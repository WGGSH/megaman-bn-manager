#!/bin/sh
jq -s -R 'split("\n")|map(split(","))|map({
  "id": .[0],
  "number": .[1],
  "name": .[2],
  "capacity": .[3],
  "ability-1": {
    "key": .[4],
    "value": .[5]
  },
  "ability-2": {
    "key": .[6],
    "value": .[7]
  },
  "ability-3": {
    "key": .[8],
    "value": .[9]
  },
  "ability-4": {
    "key": .[10],
    "value": .[11]
  },
  "ability-5": {
    "key": .[12],
    "value": .[13]
  },
  "ability-6": {
    "key": .[14],
    "value": .[15]
  }
})'  patch-card.csv > patch-card.json
