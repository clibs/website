#!/bin/bash

set -e

# Build the app.
NODE_ENV=production yarn build

# Only pre-render the app if we're in the master branch and _NOT_ part of a PR.
if [ "$PULL_REQUEST" == "false" ] && [ "$BRANCH" == "master" ]; then
  yarn build:static
else
  # Act like a "SPA" if we're not pre-rendering.
  echo "/* /index.html 200" > dist/_redirects
fi