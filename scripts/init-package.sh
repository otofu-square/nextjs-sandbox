#!/bin/bash

echo "Creating a new package..."

if [ "$#" -ne 2 ]; then
  echo "usage: $0 <apps|packages> <package name>"
  exit 1
fi

pkg_type=$1
pkg_name=$2
pkg_path="$pkg_type/$pkg_name"

echo "Creating directories and files for $pkg_name..."
mkdir -p $pkg_path/src

echo "Setting up tsconfig.json..."
echo "{
  \"extends\": \"../../tsconfig.base.json\",
  \"compilerOptions\": {
    \"outDir\": \"./dist\",
    \"baseUrl\": \".\",
    \"paths\": {
      \"~/*\": [\"./*\"]
    }
  },
  \"include\": [\"./src\"],
  \"exclude\": [\"node_modules\", \"dist\"]
}" > $pkg_path/tsconfig.json

echo "Creating index.ts file..."
echo "console.log('Hello from $pkg_name');" > $pkg_path/src/index.ts

echo "Setting up .eslintrc.js..."
echo "module.exports = {
  parserOptions: {
    project: [\"./$pkg_path/tsconfig.json\"],
  },
};" > $pkg_path/.eslintrc.js

echo "Creating package.json..."
echo "{
  \"name\": \"@nextjs-sandbox/$pkg_name\",
  \"version\": \"0.0.1\",
  \"private\": true,
  \"main\": \"dist/index.js\",
  \"types\": \"dist/index.d.ts\",
  \"scripts\": {
    \"start\": \"tsx watch src/index.ts\",
    \"tsc\": \"tsc\"
  },
  \"dependencies\": {
  },
  \"devDependencies\": {
  }
}" > $pkg_path/package.json

echo "Installing dependencies..."
(cd $pkg_path && pnpm add -DE typescript @types/node npm-run-all tsx)

echo "Package creation completed successfully!"
