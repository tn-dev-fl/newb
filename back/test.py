import requests
import subprocess
import os
def scan_port(web):
    command = "nmap -p 443,80,22,21 --open "+str(web)+" | grep -oP '\\d+/(tcp|udp)' | awk -F'/' '{ print $1 }' | paste -sd \",\""
    print(command)
    try:
        output = subprocess.check_output(command, shell=True, universal_newlines=True)
        print("Command output:", output)
        return output
    except subprocess.CalledProcessError as e:
        print("Command execution failed:", e)

def check_cloudflare(url):
    try:
        response = requests.head(url)
        headers = response.headers

        if 'server' in headers and 'cloudflare' in headers['server'].lower():
            return True

        if 'cf-ray' in headers:
            return True

        if 'cf-cache-status' in headers:
            return True

        return False

    except requests.exceptions.RequestException:
        return False

def split_file_by_lines(file_path, output_directory, lines_per_file=1000):
    with open(file_path, 'r') as input_file:
        lines = input_file.readlines()

    file_count = 1
    lines_count = len(lines)

    for i in range(0, lines_count, lines_per_file):
        file_name = f'output_{file_count}.txt'
        output_path = os.path.join(output_directory, file_name)

        with open(output_path, 'w') as output_file:
            output_file.writelines(lines[i:i+lines_per_file])

        file_count += 1
def menu():
    with open("websites/output_1.txt","r") as file:
        print(file.readline())
        scan_port(file.readline())
        print(check_cloudflare(file.readline()))
    
menu()

