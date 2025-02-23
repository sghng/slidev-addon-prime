FILE_PATH=${1:-"slides.md"}

grep -o '<[A-Z][A-Za-z]*' "$FILE_PATH" \
  | sort -u \
  | sed -E 's/^<//'
