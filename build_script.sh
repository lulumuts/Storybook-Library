#!/bin/bash

npm run build
npm run build-storybook
npm run chromatic
npm version patch --no-git-tag-version
npm publish