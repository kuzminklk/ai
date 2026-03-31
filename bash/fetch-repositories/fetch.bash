
#!/bin/bash

INPUT_FILE="repositories.txt"
BASE_URL="https://github.com/kuzminklk/"

while IFS= read -r repository_name || [[ -n "$repository_name" ]]; do
		if [[ -n "$repository_name" ]]; then
			git clone --recursive --remote-submodules "${BASE_URL}${repository_name}.git"
			echo "Cloned ${repository_name}"
		fi
done < "$INPUT_FILE"