import requests
from bs4 import BeautifulSoup
import csv


url = 'https://acnh.co/villagers'  
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
table = soup.find('table', {'id': 'core'})

base_image_url = 'https://acnh.co/assets/img/nintendo-switch-acnh-villagers/'  


characters = []
for row in table.find('tbody').find_all('tr'):

    name = row.find('td', class_='tdName').text.strip()
    formatted_name = name.lower().replace(' ', '-')  
    image_url = f"{base_image_url}{formatted_name}.png"  
    

    birthdate = row.find('td', class_='tdBirthdate').text.strip()
    colors = row.find('td', class_='tdColors').text.strip()
    styles = row.find('td', class_='tdStyles').text.strip()
    personality = row.find('td', class_='tdPersonality').text.strip()
    species = row.find('td', class_='tdAnimal').text.strip()
    gender = row.find('td', class_='tdGender').text.strip()
    
    characters.append([name, birthdate, colors, styles, personality, species, gender, image_url])


with open('characters_With_Photo.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Name', 'Birthday', 'Colors', 'Styles', 'Personality', 'Species', 'Gender', 'Image URL'])  # Encabezados
    writer.writerows(characters)

print("Datos guardados en 'characters_With_Photo.csv'")