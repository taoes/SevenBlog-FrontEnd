#!/bin/sh

git config user.name 'zhoutao'
git config user.email 'zhoutao825638@vip.qq.com'

git filter-branch --env-filter '

OLD_EMAIL="zhoutao@aluyun.com"
CORRECT_NAME="zhoutao"
CORRECT_EMAIL="zhoutao825638@vip.qq.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
