#!/bin/sh

# Decrypt the file
mkdir $HOME/
gpg --quiet --batch --yes --decrypt --passphrase="$PASS_PHRASE" \
--output ./amplify/team-provider-info.json site/team/team-provider-info.json.gpg