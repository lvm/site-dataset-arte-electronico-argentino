#!/bin/bash
set -e # exit with nonzero exit code if anything fails

if [ "$TRAVIS_TAG" = "" ]
then
  echo "Not a tag, not deploying"
  exit 0
else
  echo "==> Building and deploying tag $TRAVIS_TAG <=="
fi

# clear and re-create the out directory
rm -rf out || exit 0;
mkdir out;

ember build -prod
cp -r dist/* out/

# go to the out directory and create a *new* Git repo
cd out
git init

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "${COMMIT_AUTHOR_EMAIL}"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "release $TRAVIS_TAG: deploy to gh-pages (on: `date -R`)"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force "https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_REPO}" master:gh-pages > /dev/null 2>&1

echo "DEPLOY COMPLETE!"
