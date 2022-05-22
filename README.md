#  Unicode Character Code Names

This script generates a JSON files that that map Unicode
character codes to their names.
If a Unicode 1.0 name is present, it is appended after a
slash.
There is a minified version which puts all the data on
a single line.

The current version of Unicode is 14.0.0 which is what
is used here.
Whenever Unicode is updated, this file must be
regenerated.

## Usage

```shell
# install auxiliary tools
brew install wget jq

npm run build
```
