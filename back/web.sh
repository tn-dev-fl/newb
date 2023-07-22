#!/bin/bash

# Generate a random number between 1 and 727
random_number=$((RANDOM % 727 + 1))

> public/files/web.txt
echo $random_number

cp  websites/output_${random_number}.txt public/files/web.txt
> public/files/webjson.txt

python3 test.py