cut -d ' ' -f1 .tool-versions | xargs -I {} asdf plugin add {}
asdf install
pnpm install
