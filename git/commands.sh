
# — Clean —
# After branch switching
git clean -fdx
# Also removes old submodules
git clean -ffdx

# — Rename branch —
# Currently on the branch
git branch -m <new-name>
# On a different branch
git branch -m <old-name> <new-name>
# Push new name to remote
git push origin -u <new-name>
# Remove old name from remote
git push origin --delete <old-name>

# — Rewrite history —
git rebase -i HEAD~10

# — Push new branch to remote —
git push -u origin naked

# — Move all into new directory, exclude blockchain and .git —
shopt -s extglob
git mv !(blockchain|.git) blockchain/