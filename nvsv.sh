#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.

#  Variable Definitions

 # The json file where the version change will be
#folder="../../"

#debug true | false
dubug="false"





dubug="true"


nodeVersionFileName="./nvmrc"

echo "Cheching node version..."

thisPath="$(cd "$(dirname "$1")" && pwd -P)/$(basename "$1")"

oneDirUp=""

SCRIPTPATH=$(dirname "$SCRIPT")
#fileText=`cat $verFileName`

if [ "$dubug" = "true" ]
	then
	echo "This file path is $thisPath"
	echo "The content of the file is $fileText"
	
fi


verFileName="./.nvmrc"
verFileNameInTechUpgradeFiles="./.nvmrc"

if [ "$dubug" = "true" ]
    then
    verFileName="$verFileNameInTechUpgradeFiles"
fi
 
 
fileText=`cat $verFileName`
orgFileText=$fileText
stringLength=${#fileText}

echo "$fileText"

nvs link $fileText
 