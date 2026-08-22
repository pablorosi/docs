---
title: Git CLI
date: 2026-08-21
tags:
  - git
---
## History & Time Travel
`git reflog`
`git reset --soft HEAD~1` -> Undoes the last commit but leaves the files staged 
`git reset --hard HEAD~1` -> Completely wipes the last commit and destroys the uncommitted changes.

## Advanced Branching 
`git rebase <branch>` -> Reapplies your current branch's commit on top of another branch tip.
`git rebase -i HEAD~3` -> Opens an editor when you can squash, reorder, or drop your last three commits.
`git cherry-pick <commit-hash>` -> Grabs a specific commit and applies those exact changes to your current branch.

## Context Switching & Cleanup 
`git stash` -> Temporarily shelves your uncommitted changes so you can safely switch branches without having to commit half-finished work.
`git stash pop` -> Applies the most recently stashed changes back to your working directory and removes them from the stash list.
`git clean -fd` -> Force-deletes any untracked files and directories


