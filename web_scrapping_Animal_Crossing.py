import requests
from bs4 import BeautifulSoup
import csv

url = 'https://acnh.co/villagers' 


response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')


table = soup.find('table', {'id': 'core'})


characters = []
for row in table.find('tbody').find_all('tr'):

    name = row.find('td', class_='tdName').text.strip()
    birthdate = row.find('td', class_='tdBirthdate').text.strip()
    colors = row.find('td', class_='tdColors').text.strip()
    styles = row.find('td', class_='tdStyles').text.strip()
    personality = row.find('td', class_='tdPersonality').text.strip()
    species = row.find('td', class_='tdAnimal').text.strip()
    gender = row.find('td', class_='tdGender').text.strip()

    characters.append([name, birthdate, colors, styles, personality, species, gender])

with open('characters.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(['Name', 'Birthday', 'Colors', 'Styles', 'Personality', 'Species', 'Gender'])  # Encabezados
    writer.writerows(characters)

print("Datos guardados en 'characters.csv'")
