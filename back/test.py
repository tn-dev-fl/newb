import requests

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

# Example usage
website_url = 'https://proxiesfree.cc'
is_cloudflare = check_cloudflare(website_url)

if is_cloudflare:
    print(f"The website {website_url} is using Cloudflare.")
else:
    print(f"The website {website_url} is not using Cloudflare.")
