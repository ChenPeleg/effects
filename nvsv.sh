#!/bin/sh
dubug="false"

nodeVersionFileName=".nvmrc"
nodeVersionFileNameOneUp="../.nvmrc"
nodeVersionFileNameTwoUp=".nvmrc"

thisPath="$(cd "$(dirname "$1")" && pwd -P)/$(basename "$1")"

oneDirUp=""

SCRIPTPATH=$(dirname "$SCRIPT")

if test -f "$thisPath$nodeVersionFileName"; then
   fileText=`cat $thisPath$nodeVersionFileName`
  
   elif test -f "$thisPath$nodeVersionFileNameOneUp"; 
   then
     fileText=`cat $thisPath$nodeVersionFileNameOneUp`

fi


 

if [ "$dubug" = "true" ]
	then
	echo "This file path is $thisPath"
	echo "The content of the file is $fileText"
	
fi
 

nvs link $fileText
 