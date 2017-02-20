#!/bin/sh
set -e

# show where we are on the machine
pwd
remote=$(git config remote.origin.url)
#username=$(git config user.name)
#usermail=$(git config user.email)

mkdir gh-pages-branch
git clone ./ ./gh-pages-branch
cd gh-pages-branch
git config --local user.name "lindwaltz"
git remote add --fetch github "$remote"
git checkout gh-pages
git rm -rf .

# copy over or recompile the new site
cp -a "../dist/." .
git add -A
git commit --allow-empty -m "Deploy to GitHub pages [ci skip]"
git push --quiet github gh-pages
cd ..
rm -rf gh-pages-branch
echo "Finished deployment!"
