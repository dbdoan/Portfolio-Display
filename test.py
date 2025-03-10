import json
import requests
from os import system
system("clear")

with open('coc_token.json', 'r') as file:
    token = json.load(file)
    
# print(token['access_token'])
user_tag = token["user_tag"].replace('#', '%23')
url = f'https://api.clashofclans.com/v1/players/{user_tag}'
headers = {
    'Authorization': f'Bearer {token["access_token"]}',
    'Accept': 'application/json'
}

response = requests.get(url=url, headers=headers)
data = response.json()

print(json.dumps(data, indent=4))