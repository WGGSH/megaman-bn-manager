jq -s -R 'split("\n")|map(split(","))|map({"id": .[0], "chip-number": .[1], "name": .[2], "class": .[3], "type": .[4], "damage": .[5], "capacity": .[6], "rare": .[7], "code1": .[8], "code2": .[9], "code3": .[10], "code4": .[11]})' battle-chip.csv > battle-chip.json
