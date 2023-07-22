import requests
import subprocess
import os
import json
import random
def scan_port(web):
    command = f"nmap -p 443,80,22,21 --open {web} | grep -oP '\\d+/(tcp|udp)' | awk -F'/' '{{ print $1 }}' | paste -sd \",\""
    try:
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        output, error = process.communicate()

        if "Failed to resolve" in error or "WARNING: No targets were specified" in error:
            return "Failed"

        return output.strip()

    except Exception as e:
        return "Failed"

def check_cloudflare(url):
    try:
        response = requests.head("https://"+url)
        headers = response.headers

        if 'server' in headers and 'cloudflare' in headers['server'].lower():
            return True

        if 'cf-ray' in headers:
            return True

        if 'cf-cache-status' in headers:
            return True

        return False

    except Exception as e:
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
        with open("public/files/webjson.txt",'a') as f:
                    
                        f.write('[')


        random_number = random.randint(1, 727)
        with open("websites/output_"+str(random_number)+".txt","r") as file:
           count=0
           file= file.readlines()
        try:
            for i in file:
                print(count)
                if count==5:
                    exit()
                port=scan_port(i.replace(" ","").replace("\n","").replace("\t",""))
                
                #print(port)
                if  port=='Failed' or port=="":
                    continue
                else:
                    
                    cf=check_cloudflare(i)
                    json_data = {
        "port": port.replace('\n',''),
        "cloudflare": str(cf),
        "cms":"wordpress",
        "website":i.replace(" ","").replace("\n","").replace("\t","")
    }               
                json_object = json.dumps(json_data)
                with open("public/files/webjson.txt",'a') as f:
                    if count==4:
                        f.write(json_object+']')
                        count+=1
                    else:
                        f.write(json_object+',')
                        count+=1
# Print the JSON object
                
                

        except Exception as e:
            print(e)
            pass
menu()


