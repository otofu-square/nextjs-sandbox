#!/bin/bash
directories=$(find apps packages -type d -mindepth 1 -maxdepth 1)

pnpm update --latest

for dir in $directories; do
  stripped_dir=$(echo "$dir" | sed -r 's/(apps|packages)\///')
  echo "Updating $stripped_dir..."
  pnpm -F "$stripped_dir" update --latest
  echo "Finished updating $stripped_dir"
done

echo "All directories have been updated."
