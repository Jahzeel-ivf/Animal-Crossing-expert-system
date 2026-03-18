// Lista de vecinos 
const neighbors = [

    {
        nombre: "Admiral",
        especie: "Pájaro",
        personalidad: "Gruñón",
        colores: ["Black", "Blue"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/admiral.png"
    },
    {
        nombre: "Agent S",
        especie: "Ardilla",
        personalidad: "Animada",
        colores: ["Blue", "Black"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/agent-s.png"
    },
    {
        nombre: "Agnes",
        especie: "Cerdo",
        personalidad: "Hermana",
        colores: ["Pink", "White"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/agnes.png"
    },
    {
        nombre: "Al",
        especie: "Gorila",
        personalidad: "Perezoso",
        colores: ["Red", "White"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/al.png"
    },
    {
        nombre: "Alfonso",
        especie: "Cocodrilo",
        personalidad: "Perezoso",
        colores: ["Blue", "Red"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/alfonso.png"
    },
    {
        nombre: "Alice",
        especie: "Koala",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/alice.png"
    },
    {
        nombre: "Alli",
        especie: "Cocodrilo",
        personalidad: "Snooty",
        colores: ["Brown", "Yellow"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/alli.png"
    },
    {
        nombre: "Amelia",
        especie: "Eagle",
        personalidad: "Snooty",
        colores: ["Black", "White"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/amelia.png"
    },
    {
        nombre: "Anabelle",
        especie: "Anteater",
        personalidad: "Animada",
        colores: ["Blue", "Green"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/anabelle.png"
    },
    {
        nombre: "Anchovy",
        especie: "Pájaro",
        personalidad: "Perezoso",
        colores: ["Colorful", "Orange"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/anchovy.png"
    },
    {
        nombre: "Angus",
        especie: "Bull",
        personalidad: "Gruñón",
        colores: ["Black", "Red"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/angus.png"
    },
    {
        nombre: "Anicotti",
        especie: "Mouse",
        personalidad: "Animada",
        colores: ["Pink", "Red"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/anicotti.png"
    },
    {
        nombre: "Ankha",
        especie: "Cat",
        personalidad: "Snooty",
        colores: ["Brown", "Colorful"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ankha.png"
    },
    {
        nombre: "Annalisa",
        especie: "Anteater",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/annalisa.png"
    },
    {
        nombre: "Annalise",
        especie: "Horse",
        personalidad: "Snooty",
        colores: ["Blue", "Purple"],
        estilos: ["Active", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/annalise.png"
    },
    {
        nombre: "Antonio",
        especie: "Anteater",
        personalidad: "Jock",
        colores: ["Blue", "Light Blue"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/antonio.png"
    },
    {
        nombre: "Apollo",
        especie: "Eagle",
        personalidad: "Gruñón",
        colores: ["Black"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/apollo.png"
    },
    {
        nombre: "Apple",
        especie: "Hamster",
        personalidad: "Animada",
        colores: ["Colorful", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/apple.png"
    },
    {
        nombre: "Astrid",
        especie: "Kangaroo",
        personalidad: "Snooty",
        colores: ["Black", "Colorful"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/astrid.png"
    },
    {
        nombre: "Audie",
        especie: "Wolf",
        personalidad: "Animada",
        colores: ["Green", "White"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/audie.png"
    },
    {
        nombre: "Aurora",
        especie: "Penguin",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/aurora.png"
    },
    {
        nombre: "Ava",
        especie: "Chicken",
        personalidad: "Normal",
        colores: ["Gray", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ava.png"
    },
    {
        nombre: "Avery",
        especie: "Eagle",
        personalidad: "Gruñón",
        colores: ["Brown", "Orange"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/avery.png"
    },
    {
        nombre: "Axel",
        especie: "Elephant",
        personalidad: "Jock",
        colores: ["Green", "White"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/axel.png"
    },
    {
        nombre: "Baabara",
        especie: "Sheep",
        personalidad: "Snooty",
        colores: ["Blue", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/baabara.png"
    },
    {
        nombre: "Bam",
        especie: "Deer",
        personalidad: "Jock",
        colores: ["Brown", "Green"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bam.png"
    },
    {
        nombre: "Bangle",
        especie: "Tiger",
        personalidad: "Animada",
        colores: ["Green", "Yellow"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bangle.png"
    },
    {
        nombre: "Barold",
        especie: "Cub",
        personalidad: "Perezoso",
        colores: ["Black", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/barold.png"
    },
    {
        nombre: "Bea",
        especie: "Dog",
        personalidad: "Normal",
        colores: ["Light Blue", "Green"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bea.png"
    },
    {
        nombre: "Beardo",
        especie: "Bear",
        personalidad: "Smug",
        colores: ["Blue", "Brown"],
        estilos: ["Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/beardo.png"
    },
    {
        nombre: "Beau",
        especie: "Deer",
        personalidad: "Perezoso",
        colores: ["Beige", "Orange"],
        estilos: ["Cute", "SImple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/beau.png"
    },
    {
        nombre: "Becky",
        especie: "Chicken",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/becky.png"
    },
    {
        nombre: "Bella",
        especie: "Mouse",
        personalidad: "Animada",
        colores: ["Black", "Purple"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bella.png"
    },
    {
        nombre: "Benedict",
        especie: "Chicken",
        personalidad: "Perezoso",
        colores: ["Blue", "Purple"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/benedict.png"
    },
    {
        nombre: "Benjamin",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Red", "White"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/benjamin.png"
    },
    {
        nombre: "Bertha",
        especie: "Hippo",
        personalidad: "Normal",
        colores: ["Pink", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bertha.png"
    },
    {
        nombre: "Bettina",
        especie: "Mouse",
        personalidad: "Normal",
        colores: ["Red", "White"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bettina.png"
    },
    {
        nombre: "Bianca",
        especie: "Tiger",
        personalidad: "Animada",
        colores: ["Orange", "Pink"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bianca.png"
    },
    {
        nombre: "Biff",
        especie: "Hippo",
        personalidad: "Jock",
        colores: ["Black", "Blue"],
        estilos: ["Active", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/biff.png"
    },
    {
        nombre: "Big Top",
        especie: "Elephant",
        personalidad: "Perezoso",
        colores: ["Green"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/big-top.png"
    },
    {
        nombre: "Bill",
        especie: "Duck",
        personalidad: "Jock",
        colores: ["Blue", "Purple"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bill.png"
    },
    {
        nombre: "Billy",
        especie: "Goat",
        personalidad: "Jock",
        colores: ["Blue", "Purple"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/billy.png"
    },
    {
        nombre: "Biskit",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Colorful", "Purple"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/biskit.png"
    },
    {
        nombre: "Bitty",
        especie: "Hippo",
        personalidad: "Snooty",
        colores: ["Orange", "Pink"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bitty.png"
    },
    {
        nombre: "Blaire",
        especie: "Ardilla",
        personalidad: "Snooty",
        colores: ["Brown", "Orange"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/blaire.png"
    },
    {
        nombre: "Blanche",
        especie: "Ostrich",
        personalidad: "Snooty",
        colores: ["Black", "Brown"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/blanche.png"
    },
    {
        nombre: "Bluebear",
        especie: "Cub",
        personalidad: "Animada",
        colores: ["Blue", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bluebear.png"
    },
    {
        nombre: "Bob",
        especie: "Cat",
        personalidad: "Perezoso",
        colores: ["Colorful", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bob.png"
    },
    {
        nombre: "Bonbon",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bonbon.png"
    },
    {
        nombre: "Bones",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bones.png"
    },
    {
        nombre: "Boomer",
        especie: "Penguin",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/boomer.png"
    },
    {
        nombre: "Boone",
        especie: "Gorila",
        personalidad: "Jock",
        colores: ["Colorful", "Red"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/boone.png"
    },
    {
        nombre: "Boots",
        especie: "Cocodrilo",
        personalidad: "Jock",
        colores: ["Colorful", "Purple"],
        estilos: ["Active", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/boots.png"
    },
    {
        nombre: "Boris",
        especie: "Cerdo",
        personalidad: "Gruñón",
        colores: ["Black", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/boris.png"
    },
    {
        nombre: "Boyd",
        especie: "Gorila",
        personalidad: "Gruñón",
        colores: ["Black", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/boyd.png"
    },
    {
        nombre: "Bree",
        especie: "Mouse",
        personalidad: "Snooty",
        colores: ["Black", "Blue"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bree.png"
    },
    {
        nombre: "Broccolo",
        especie: "Mouse",
        personalidad: "Perezoso",
        colores: ["Colorful", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/broccolo.png"
    },
    {
        nombre: "Broffina",
        especie: "Chicken",
        personalidad: "Snooty",
        colores: ["Black", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/broffina.png"
    },
    {
        nombre: "Bruce",
        especie: "Deer",
        personalidad: "Gruñón",
        colores: ["Black", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bruce.png"
    },
    {
        nombre: "Bubbles",
        especie: "Hippo",
        personalidad: "Animada",
        colores: ["Pink", "Purple"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bubbles.png"
    },
    {
        nombre: "Buck",
        especie: "Horse",
        personalidad: "Jock",
        colores: ["Brown", "Gray"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/buck.png"
    },
    {
        nombre: "Bud",
        especie: "Lion",
        personalidad: "Jock",
        colores: ["Green", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bud.png"
    },
    {
        nombre: "Bunnie",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Green", "Pink"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/bunnie.png"
    },
    {
        nombre: "Butch",
        especie: "Dog",
        personalidad: "Gruñón",
        colores: ["Blue", "Gray"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/butch.png"
    },
    {
        nombre: "Buzz",
        especie: "Eagle",
        personalidad: "Gruñón",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/buzz.png"
    },
    {
        nombre: "Cally",
        especie: "Ardilla",
        personalidad: "Normal",
        colores: ["Green", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cally.png"
    },
    {
        nombre: "Camofrog",
        especie: "Frog",
        personalidad: "Gruñón",
        colores: ["Blue", "White"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/camofrog.png"
    },
    {
        nombre: "Canberra",
        especie: "Koala",
        personalidad: "Hermana",
        colores: ["Green", "Light Blue"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/canberra.png"
    },
    {
        nombre: "Candi",
        especie: "Mouse",
        personalidad: "Animada",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/candi.png"
    },
    {
        nombre: "Carmen",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Beige", "Green"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/carmen.png"
    },
    {
        nombre: "Caroline",
        especie: "Ardilla",
        personalidad: "Normal",
        colores: ["Colorful", "White"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/caroline.png"
    },
    {
        nombre: "Carrie",
        especie: "Kangaroo",
        personalidad: "Normal",
        colores: ["Colorful", "Red"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/carrie.png"
    },
    {
        nombre: "Cashmere",
        especie: "Sheep",
        personalidad: "Snooty",
        colores: ["Beige", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cashmere.png"
    },
    {
        nombre: "Celia",
        especie: "Eagle",
        personalidad: "Normal",
        colores: ["Green", "Pink"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/celia.png"
    },
    {
        nombre: "Cesar",
        especie: "Gorila",
        personalidad: "Gruñón",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cesar.png"
    },
    {
        nombre: "Chadder",
        especie: "Mouse",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chadder.png"
    },
    {
        nombre: "Charlise",
        especie: "Bear",
        personalidad: "Hermana",
        colores: ["Orange", "Red"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/charlise.png"
    },
    {
        nombre: "Cheri",
        especie: "Cub",
        personalidad: "Animada",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cheri.png"
    },
    {
        nombre: "Cherry",
        especie: "Dog",
        personalidad: "Hermana",
        colores: ["Black", "Purple"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cherry.png"
    },
    {
        nombre: "Chester",
        especie: "Cub",
        personalidad: "Perezoso",
        colores: ["Green", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chester.png"
    },
    {
        nombre: "Chevre",
        especie: "Goat",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chevre.png"
    },
    {
        nombre: "Chief",
        especie: "Wolf",
        personalidad: "Gruñón",
        colores: ["Gray", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chief.png"
    },
    {
        nombre: "Chops",
        especie: "Cerdo",
        personalidad: "Smug",
        colores: ["Green", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chops.png"
    },
    {
        nombre: "Chow",
        especie: "Bear",
        personalidad: "Gruñón",
        colores: ["Black", "White"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chow.png"
    },
    {
        nombre: "Chrissy",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Pink", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/chrissy.png"
    },
    {
        nombre: "Claude",
        especie: "Rabbit",
        personalidad: "Perezoso",
        colores: ["Black", "Colorful"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/claude.png"
    },
    {
        nombre: "Claudia",
        especie: "Tiger",
        personalidad: "Snooty",
        colores: ["Purple", "White"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/claudia.png"
    },
    {
        nombre: "Clay",
        especie: "Hamster",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/clay.png"
    },
    {
        nombre: "Cleo",
        especie: "Horse",
        personalidad: "Snooty",
        colores: ["Light Blue", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cleo.png"
    },
    {
        nombre: "Clyde",
        especie: "Horse",
        personalidad: "Perezoso",
        colores: ["Green", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/clyde.png"
    },
    {
        nombre: "Coach",
        especie: "Bull",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/coach.png"
    },
    {
        nombre: "Cobb",
        especie: "Cerdo",
        personalidad: "Jock",
        colores: ["Blue", "White"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cobb.png"
    },
    {
        nombre: "Coco",
        especie: "Rabbit",
        personalidad: "Normal",
        colores: ["Beige", "Green"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/coco.png"
    },
    {
        nombre: "Cole",
        especie: "Rabbit",
        personalidad: "Perezoso",
        colores: ["Colorful", "Simple"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cole.png"
    },
    {
        nombre: "Colton",
        especie: "Horse",
        personalidad: "Smug",
        colores: ["Blue", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/colton.png"
    },
    {
        nombre: "Cookie",
        especie: "Dog",
        personalidad: "Animada",
        colores: ["Green", "Light Blue"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cookie.png"
    },
    {
        nombre: "Cousteau",
        especie: "Frog",
        personalidad: "Jock",
        colores: ["Green", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cousteau.png"
    },
    {
        nombre: "Cranston",
        especie: "Ostrich",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cranston.png"
    },
    {
        nombre: "Croque",
        especie: "Frog",
        personalidad: "Gruñón",
        colores: ["Orange", "Red"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/croque.png"
    },
    {
        nombre: "Cube",
        especie: "Penguin",
        personalidad: "Perezoso",
        colores: ["Colorful", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cube.png"
    },
    {
        nombre: "Curlos",
        especie: "Sheep",
        personalidad: "Smug",
        colores: ["Green", "Red"],
        estilos: ["Active", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/curlos.png"
    },
    {
        nombre: "Curly",
        especie: "Cerdo",
        personalidad: "Jock",
        colores: ["Colorful", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/curly.png"
    },
    {
        nombre: "Curt",
        especie: "Bear",
        personalidad: "Gruñón",
        colores: ["Blue", "White"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/curt.png"
    },
    {
        nombre: "Cyd",
        especie: "Elephant",
        personalidad: "Gruñón",
        colores: ["Black", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cyd.png"
    },
    {
        nombre: "Cyrano",
        especie: "Anteater",
        personalidad: "Gruñón",
        colores: ["Beige", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/cyrano.png"
    },
    {
        nombre: "Daisy",
        especie: "Dog",
        personalidad: "Normal",
        colores: ["Blue", "Colorful"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/daisy.png"
    },
    {
        nombre: "Deena",
        especie: "Duck",
        personalidad: "Normal",
        colores: ["Blue", "Colorful"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/deena.png"
    },
    {
        nombre: "Deirdre",
        especie: "Deer",
        personalidad: "Hermana",
        colores: ["Orange"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/deirdre.png"
    },
    {
        nombre: "Del",
        especie: "Cocodrilo",
        personalidad: "Gruñón",
        colores: ["Blue", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/del.png"
    },
    {
        nombre: "Deli",
        especie: "Monkey",
        personalidad: "Perezoso",
        colores: ["Brown", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/deli.png"
    },
    {
        nombre: "Derwin",
        especie: "Duck",
        personalidad: "Perezoso",
        colores: ["Beige", "Yellow"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/derwin.png"
    },
    {
        nombre: "Diana",
        especie: "Deer",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/diana.png"
    },
    {
        nombre: "Diva",
        especie: "Frog",
        personalidad: "Hermana",
        colores: ["Light Blue", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/diva.png"
    },
    {
        nombre: "Dizzy",
        especie: "Elephant",
        personalidad: "Perezoso",
        colores: ["Blue", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/dizzy.png"
    },
    {
        nombre: "Dobie",
        especie: "Wolf",
        personalidad: "Gruñón",
        colores: ["Beige", "Brown"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/dobie.png"
    },
    {
        nombre: "Doc",
        especie: "Rabbit",
        personalidad: "Perezoso",
        colores: ["Beige", "Gray"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/doc.png"
    },
    {
        nombre: "Dom",
        especie: "Sheep",
        personalidad: "Jock",
        colores: ["Colorful", "Red"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/dom.png"
    },
    {
        nombre: "Dora",
        especie: "Mouse",
        personalidad: "Normal",
        colores: ["Blue", "Light Blue"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/dora.png"
    },
    {
        nombre: "Dotty",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Black", "Blue"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/dotty.png"
    },
    {
        nombre: "Drago",
        especie: "Cocodrilo",
        personalidad: "Perezoso",
        colores: ["Orange", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/drago.png"
    },
    {
        nombre: "Drake",
        especie: "Duck",
        personalidad: "Perezoso",
        colores: ["Brown", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/drake.png"
    },
    {
        nombre: "Drift",
        especie: "Frog",
        personalidad: "Jock",
        colores: ["Orange", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/drift.png"
    },
    {
        nombre: "Ed",
        especie: "Horse",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ed.png"
    },
    {
        nombre: "Egbert",
        especie: "Chicken",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/egbert.png"
    },
    {
        nombre: "Elise",
        especie: "Monkey",
        personalidad: "Snooty",
        colores: ["Purple", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/elise.png"
    },
    {
        nombre: "Ellie",
        especie: "Elephant",
        personalidad: "Normal",
        colores: ["Gray", "Pink"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ellie.png"
    },
    {
        nombre: "Elmer",
        especie: "Horse",
        personalidad: "Perezoso",
        colores: ["Blue", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/elmer.png"
    },
    {
        nombre: "Eloise",
        especie: "Elephant",
        personalidad: "Snooty",
        colores: ["Green", "Orange"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/eloise.png"
    },
    {
        nombre: "Elvis",
        especie: "Lion",
        personalidad: "Gruñón",
        colores: ["Black", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/elvis.png"
    },
    {
        nombre: "Erik",
        especie: "Deer",
        personalidad: "Perezoso",
        colores: ["Beige", "Red"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/erik.png"
    },
    {
        nombre: "Eugene",
        especie: "Koala",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/eugene.png"
    },
    {
        nombre: "Eunice",
        especie: "Sheep",
        personalidad: "Normal",
        colores: ["Beige", "Orange"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/eunice.png"
    },
    {
        nombre: "Fang",
        especie: "Wolf",
        personalidad: "Gruñón",
        colores: ["Light Blue", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/fang.png"
    },
    {
        nombre: "Fauna",
        especie: "Deer",
        personalidad: "Normal",
        colores: ["Beige", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/fauna.png"
    },
    {
        nombre: "Felicity",
        especie: "Cat",
        personalidad: "Animada",
        colores: ["Orange", "Yellow"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/felicity.png"
    },
    {
        nombre: "Filbert",
        especie: "Ardilla",
        personalidad: "Perezoso",
        colores: ["Blue", "White"],
        estilos: ["Simple", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/filbert.png"
    },
    {
        nombre: "Flip",
        especie: "Monkey",
        personalidad: "Jock",
        colores: ["Blue", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/flip.png"
    },
    {
        nombre: "Flo",
        especie: "Penguin",
        personalidad: "Hermana",
        colores: ["Purple", "Red"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/flo.png"
    },
    {
        nombre: "Flora",
        especie: "Ostrich",
        personalidad: "Animada",
        colores: ["Colorful", "Pink"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/flora.png"
    },
    {
        nombre: "Flurry",
        especie: "Hamster",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/flurry.png"
    },
    {
        nombre: "Francine",
        especie: "Rabbit",
        personalidad: "Snooty",
        colores: ["Black", "Blue"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/francine.png"
    },
    {
        nombre: "Frank",
        especie: "Eagle",
        personalidad: "Gruñón",
        colores: ["Brown", "Yellow"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/frank.png"
    },
    {
        nombre: "Freckles",
        especie: "Duck",
        personalidad: "Animada",
        colores: ["Colorful", "Green"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/freckles.png"
    },
    {
        nombre: "Freya",
        especie: "Wolf",
        personalidad: "Snooty",
        colores: ["Blue", "Green"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/freya.png"
    },
    {
        nombre: "Friga",
        especie: "Penguin",
        personalidad: "Snooty",
        colores: ["Black", "Pink"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/friga.png"
    },
    {
        nombre: "Frita",
        especie: "Sheep",
        personalidad: "Hermana",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/frita.png"
    },
    {
        nombre: "Frobert",
        especie: "Frog",
        personalidad: "Jock",
        colores: ["Blue", "Colorful"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/frobert.png"
    },
    {
        nombre: "Fuchsia",
        especie: "Deer",
        personalidad: "Hermana",
        colores: ["Pink"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/fuchsia.png"
    },
    {
        nombre: "Gabi",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Brown", "Red"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gabi.png"
    },
    {
        nombre: "Gala",
        especie: "Cerdo",
        personalidad: "Normal",
        colores: ["Pink", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gala.png"
    },
    {
        nombre: "Gaston",
        especie: "Rabbit",
        personalidad: "Gruñón",
        colores: ["Brown", "Orange"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gaston.png"
    },
    {
        nombre: "Gayle",
        especie: "Cocodrilo",
        personalidad: "Normal",
        colores: ["Pink", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gayle.png"
    },
    {
        nombre: "Genji",
        especie: "Rabbit",
        personalidad: "Jock",
        colores: ["Green", "Purple"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/genji.png"
    },
    {
        nombre: "Gigi",
        especie: "Frog",
        personalidad: "Snooty",
        colores: ["Black", "White"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gigi.png"
    },
    {
        nombre: "Gladys",
        especie: "Ostrich",
        personalidad: "Normal",
        colores: ["Green", "Pink"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gladys.png"
    },
    {
        nombre: "Gloria",
        especie: "Duck",
        personalidad: "Snooty",
        colores: ["Black", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gloria.png"
    },
    {
        nombre: "Goldie",
        especie: "Dog",
        personalidad: "Normal",
        colores: ["Orange", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/goldie.png"
    },
    {
        nombre: "Gonzo",
        especie: "Koala",
        personalidad: "Gruñón",
        colores: ["Black", "Green"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gonzo.png"
    },
    {
        nombre: "Goose",
        especie: "Chicken",
        personalidad: "Jock",
        colores: ["Blue", "White"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/goose.png"
    },
    {
        nombre: "Graham",
        especie: "Hamster",
        personalidad: "Smug",
        colores: ["Green", "Orange"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/graham.png"
    },
    {
        nombre: "Greta",
        especie: "Mouse",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/greta.png"
    },
    {
        nombre: "Grizzly",
        especie: "Bear",
        personalidad: "Gruñón",
        colores: ["Black", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/grizzly.png"
    },
    {
        nombre: "Groucho",
        especie: "Bear",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/groucho.png"
    },
    {
        nombre: "Gruff",
        especie: "Goat",
        personalidad: "Gruñón",
        colores: ["Black", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gruff.png"
    },
    {
        nombre: "Gwen",
        especie: "Penguin",
        personalidad: "Snooty",
        colores: ["Green", "White"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/gwen.png"
    },
    {
        nombre: "Hamlet",
        especie: "Hamster",
        personalidad: "Jock",
        colores: ["Blue", "Purple"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hamlet.png"
    },
    {
        nombre: "Hamphrey",
        especie: "Hamster",
        personalidad: "Gruñón",
        colores: ["Beige", "Gray"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hamphrey.png"
    },
    {
        nombre: "Hans",
        especie: "Gorila",
        personalidad: "Smug",
        colores: ["Blue", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hans.png"
    },
    {
        nombre: "Harry",
        especie: "Hippo",
        personalidad: "Gruñón",
        colores: ["Green", "Orange"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/harry.png"
    },
    {
        nombre: "Hazel",
        especie: "Ardilla",
        personalidad: "Hermana",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hazel.png"
    },
    {
        nombre: "Henry",
        especie: "Frog",
        personalidad: "Smug",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/henry.png"
    },
    {
        nombre: "Hippeux",
        especie: "Hippo",
        personalidad: "Smug",
        colores: ["Brown", "Green"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hippeux.png"
    },
    {
        nombre: "Hopkins",
        especie: "Rabbit",
        personalidad: "Perezoso",
        colores: ["Blue", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hopkins.png"
    },
    {
        nombre: "Hopper",
        especie: "Penguin",
        personalidad: "Gruñón",
        colores: ["Red", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hopper.png"
    },
    {
        nombre: "Hornsby",
        especie: "Rhino",
        personalidad: "Perezoso",
        colores: ["Brown", "Green"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hornsby.png"
    },
    {
        nombre: "Huck",
        especie: "Frog",
        personalidad: "Smug",
        colores: ["Green", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/huck.png"
    },
    {
        nombre: "Hugh",
        especie: "Cerdo",
        personalidad: "Perezoso",
        colores: ["Beige", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/hugh.png"
    },
    {
        nombre: "Iggly",
        especie: "Penguin",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/iggly.png"
    },
    {
        nombre: "Ike",
        especie: "Bear",
        personalidad: "Gruñón",
        colores: ["Blue", "Green"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ike.png"
    },
    {
        nombre: "Jacob",
        especie: "Pájaro",
        personalidad: "Perezoso",
        colores: ["Green", "Red"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jacob.png"
    },
    {
        nombre: "Jacques",
        especie: "Pájaro",
        personalidad: "Smug",
        colores: ["Green", "Black"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jacques.png"
    },
    {
        nombre: "Jambette",
        especie: "Frog",
        personalidad: "Normal",
        colores: ["Brown"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jambette.png"
    },
    {
        nombre: "Jay",
        especie: "Pájaro",
        personalidad: "Jock",
        colores: ["Blue", "Light Blue"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jay.png"
    },
    {
        nombre: "Jeremiah",
        especie: "Frog",
        personalidad: "Perezoso",
        colores: ["Orange", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jeremiah.png"
    },
    {
        nombre: "Jitters",
        especie: "Pájaro",
        personalidad: "Jock",
        colores: ["Orange", "Yellow"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/jitters.png"
    },
    {
        nombre: "Joey",
        especie: "Duck",
        personalidad: "Perezoso",
        colores: ["Blue", "Green"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/joey.png"
    },
    {
        nombre: "Judy",
        especie: "Cub",
        personalidad: "Snooty",
        colores: ["Pink", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/judy.png"
    },
    {
        nombre: "Julia",
        especie: "Ostrich",
        personalidad: "Snooty",
        colores: ["Purple", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/julia.png"
    },
    {
        nombre: "Julian",
        especie: "Horse",
        personalidad: "Smug",
        colores: ["Blue", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/julian.png"
    },
    {
        nombre: "June",
        especie: "Cub",
        personalidad: "Normal",
        colores: ["Red", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/june.png"
    },
    {
        nombre: "Kabuki",
        especie: "Cat",
        personalidad: "Gruñón",
        colores: ["Purple", "Red"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kabuki.png"
    },
    {
        nombre: "Katt",
        especie: "Cat",
        personalidad: "Hermana",
        colores: ["Black", "Purple"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/katt.png"
    },
    {
        nombre: "Keaton",
        especie: "Eagle",
        personalidad: "Smug",
        colores: ["Blue", "White"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/keaton.png"
    },
    {
        nombre: "Ken",
        especie: "Chicken",
        personalidad: "Smug",
        colores: ["Blue", "Purple"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ken.png"
    },
    {
        nombre: "Ketchup",
        especie: "Duck",
        personalidad: "Animada",
        colores: ["Light Blue", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ketchup.png"
    },
    {
        nombre: "Kevin",
        especie: "Cerdo",
        personalidad: "Jock",
        colores: ["Black", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kevin.png"
    },
    {
        nombre: "Kid Cat",
        especie: "Cat",
        personalidad: "Jock",
        colores: ["Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kid-cat.png"
    },
    {
        nombre: "Kidd",
        especie: "Goat",
        personalidad: "Smug",
        colores: ["Gray", "White"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kidd.png"
    },
    {
        nombre: "Kiki",
        especie: "Cat",
        personalidad: "Normal",
        colores: ["Beige", "Brown"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kiki.png"
    },
    {
        nombre: "Kitt",
        especie: "Kangaroo",
        personalidad: "Normal",
        colores: ["Purple", "Red"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kitt.png"
    },
    {
        nombre: "Kitty",
        especie: "Cat",
        personalidad: "Snooty",
        colores: ["Gray", "Green"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kitty.png"
    },
    {
        nombre: "Klaus",
        especie: "Bear",
        personalidad: "Smug",
        colores: ["Gray", "White"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/klaus.png"
    },
    {
        nombre: "Knox",
        especie: "Chicken",
        personalidad: "Gruñón",
        colores: ["Brown", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/knox.png"
    },
    {
        nombre: "Kody",
        especie: "Cub",
        personalidad: "Jock",
        colores: ["Colorful", "White"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kody.png"
    },
    {
        nombre: "Kyle",
        especie: "Wolf",
        personalidad: "Smug",
        colores: ["Black", "White"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/kyle.png"
    },
    {
        nombre: "Leonardo",
        especie: "Tiger",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/leonardo.png"
    },
    {
        nombre: "Leopold",
        especie: "Lion",
        personalidad: "Smug",
        colores: ["Green", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/leopold.png"
    },
    {
        nombre: "Lily",
        especie: "Frog",
        personalidad: "Normal",
        colores: ["Yellow", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lily.png"
    },
    {
        nombre: "Limberg",
        especie: "Mouse",
        personalidad: "Gruñón",
        colores: ["Blue", "Green"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/limberg.png"
    },
    {
        nombre: "Lionel",
        especie: "Lion",
        personalidad: "Smug",
        colores: ["Gray", "Green"],
        estilos: ["Active", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lionel.png"
    },
    {
        nombre: "Lobo",
        especie: "Wolf",
        personalidad: "Gruñón",
        colores: ["Beige", "Black"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lobo.png"
    },
    {
        nombre: "Lolly",
        especie: "Cat",
        personalidad: "Normal",
        colores: ["Gray", "Pink"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lolly.png"
    },
    {
        nombre: "Lopez",
        especie: "Deer",
        personalidad: "Smug",
        colores: ["Gray"],
        estilos: ["Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lopez.png"
    },
    {
        nombre: "Louie",
        especie: "Gorila",
        personalidad: "Jock",
        colores: ["Gray", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/louie.png"
    },
    {
        nombre: "Lucha",
        especie: "Pájaro",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lucha.png"
    },
    {
        nombre: "Lucky",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Beige", "White"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lucky.png"
    },
    {
        nombre: "Lucy",
        especie: "Cerdo",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lucy.png"
    },
    {
        nombre: "Lyman",
        especie: "Koala",
        personalidad: "Jock",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/lyman.png"
    },
    {
        nombre: "Mac",
        especie: "Dog",
        personalidad: "Jock",
        colores: ["Black", "Red"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mac.png"
    },
    {
        nombre: "Maddie",
        especie: "Dog",
        personalidad: "Animada",
        colores: ["Pink", "Purple"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/maddie.png"
    },
    {
        nombre: "Maelle",
        especie: "Duck",
        personalidad: "Snooty",
        colores: ["Pink", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/maelle.png"
    },
    {
        nombre: "Maggie",
        especie: "Cerdo",
        personalidad: "Normal",
        colores: ["Green", "Yellow"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/maggie.png"
    },
    {
        nombre: "Mallary",
        especie: "Duck",
        personalidad: "Snooty",
        colores: ["Blue", "White"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mallary.png"
    },
    {
        nombre: "Maple",
        especie: "Cub",
        personalidad: "Normal",
        colores: ["Beige", "Green"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/maple.png"
    },
    {
        nombre: "Marcel",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Blue", "Green"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/marcel.png"
    },
    {
        nombre: "Marcie",
        especie: "Kangaroo",
        personalidad: "Normal",
        colores: ["Beige", "Pink"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/marcie.png"
    },
    {
        nombre: "Margie",
        especie: "Elephant",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/margie.png"
    },
    {
        nombre: "Marina",
        especie: "Octopus",
        personalidad: "Normal",
        colores: ["Pink", "Red"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/marina.png"
    },
    {
        nombre: "Marshal",
        especie: "Ardilla",
        personalidad: "Smug",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/marshal.png"
    },
    {
        nombre: "Mathilda",
        especie: "Kangaroo",
        personalidad: "Snooty",
        colores: ["Red", "White"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mathilda.png"
    },
    {
        nombre: "Megan",
        especie: "Bear",
        personalidad: "Normal",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/megan.png"
    },
    {
        nombre: "Melba",
        especie: "Koala",
        personalidad: "Normal",
        colores: ["Green", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/melba.png"
    },
    {
        nombre: "Merengue",
        especie: "Rhino",
        personalidad: "Normal",
        colores: ["Red", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/merengue.png"
    },
    {
        nombre: "Merry",
        especie: "Cat",
        personalidad: "Animada",
        colores: ["Light Blue", "Pink"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/merry.png"
    },
    {
        nombre: "Midge",
        especie: "Pájaro",
        personalidad: "Normal",
        colores: ["Pink"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/midge.png"
    },
    {
        nombre: "Mint",
        especie: "Ardilla",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mint.png"
    },
    {
        nombre: "Mira",
        especie: "Rabbit",
        personalidad: "Hermana",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mira.png"
    },
    {
        nombre: "Miranda",
        especie: "Duck",
        personalidad: "Snooty",
        colores: ["Blue", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/miranda.png"
    },
    {
        nombre: "Mitzi",
        especie: "Cat",
        personalidad: "Normal",
        colores: ["Beige", "Brown"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mitzi.png"
    },
    {
        nombre: "Moe",
        especie: "Cat",
        personalidad: "Perezoso",
        colores: ["Black", "Gray"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/moe.png"
    },
    {
        nombre: "Molly",
        especie: "Duck",
        personalidad: "Normal",
        colores: ["Pink", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/molly.png"
    },
    {
        nombre: "Monique",
        especie: "Cat",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/monique.png"
    },
    {
        nombre: "Monty",
        especie: "Monkey",
        personalidad: "Gruñón",
        colores: ["Gray", "Yellow"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/monty.png"
    },
    {
        nombre: "Moose",
        especie: "Mouse",
        personalidad: "Jock",
        colores: ["Purple", "Red"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/moose.png"
    },
    {
        nombre: "Mott",
        especie: "Lion",
        personalidad: "Jock",
        colores: ["Blue", "Green"],
        estilos: ["Active", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/mott.png"
    },
    {
        nombre: "Muffy",
        especie: "Sheep",
        personalidad: "Hermana",
        colores: ["Black", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/muffy.png"
    },
    {
        nombre: "Murphy",
        especie: "Cub",
        personalidad: "Gruñón",
        colores: ["Blue", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/murphy.png"
    },
    {
        nombre: "Nan",
        especie: "Goat",
        personalidad: "Normal",
        colores: ["Orange", "Yellow"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/nan.png"
    },
    {
        nombre: "Nana",
        especie: "Monkey",
        personalidad: "Normal",
        colores: ["Pink", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/nana.png"
    },
    {
        nombre: "Naomi",
        especie: "Cow",
        personalidad: "Snooty",
        colores: ["Colorful", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/naomi.png"
    },
    {
        nombre: "Nate",
        especie: "Bear",
        personalidad: "Perezoso",
        colores: ["Green", "White"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/nate.png"
    },
    {
        nombre: "Nibbles",
        especie: "Ardilla",
        personalidad: "Animada",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/nibbles.png"
    },
    {
        nombre: "Norma",
        especie: "Cow",
        personalidad: "Normal",
        colores: ["Light Blue", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/norma.png"
    },
    {
        nombre: "O'Hare",
        especie: "Rabbit",
        personalidad: "Smug",
        colores: ["Blue", "Light Blue"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/o'hare.png"
    },
    {
        nombre: "Octavian",
        especie: "Octopus",
        personalidad: "Gruñón",
        colores: ["Black", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/octavian.png"
    },
    {
        nombre: "Olaf",
        especie: "Anteater",
        personalidad: "Smug",
        colores: ["Black", "Red"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/olaf.png"
    },
    {
        nombre: "Olive",
        especie: "Cub",
        personalidad: "Normal",
        colores: ["Brown", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/olive.png"
    },
    {
        nombre: "Olivia",
        especie: "Cat",
        personalidad: "Snooty",
        colores: ["Black", "White"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/olivia.png"
    },
    {
        nombre: "Opal",
        especie: "Elephant",
        personalidad: "Snooty",
        colores: ["Black", "Orange"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/opal.png"
    },
    {
        nombre: "Ozzie",
        especie: "Koala",
        personalidad: "Perezoso",
        colores: ["Orange", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ozzie.png"
    },
    {
        nombre: "Pancetti",
        especie: "Cerdo",
        personalidad: "Snooty",
        colores: ["Red", "Yellow"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pancetti.png"
    },
    {
        nombre: "Pango",
        especie: "Anteater",
        personalidad: "Animada",
        colores: ["Orange", "Purple"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pango.png"
    },
    {
        nombre: "Paolo",
        especie: "Elephant",
        personalidad: "Perezoso",
        colores: ["Gray", "Light Blue"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/paolo.png"
    },
    {
        nombre: "Papi",
        especie: "Horse",
        personalidad: "Perezoso",
        colores: ["Light Blue", "Orange"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/papi.png"
    },
    {
        nombre: "Pashmina",
        especie: "Goat",
        personalidad: "Hermana",
        colores: ["Colorful", "Red"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pashmina.png"
    },
    {
        nombre: "Pate",
        especie: "Duck",
        personalidad: "Animada",
        colores: ["Yellow", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pate.png"
    },
    {
        nombre: "Patty",
        especie: "Cow",
        personalidad: "Animada",
        colores: ["Orange", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/patty.png"
    },
    {
        nombre: "Paula",
        especie: "Bear",
        personalidad: "Hermana",
        colores: ["Green", "Orange"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/paula.png"
    },
    {
        nombre: "Peaches",
        especie: "Horse",
        personalidad: "Normal",
        colores: ["Colorful", "Light Blue"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/peaches.png"
    },
    {
        nombre: "Peanut",
        especie: "Ardilla",
        personalidad: "Animada",
        colores: ["Colorful", "Red"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/peanut.png"
    },
    {
        nombre: "Pecan",
        especie: "Ardilla",
        personalidad: "Snooty",
        colores: ["Beige", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pecan.png"
    },
    {
        nombre: "Peck",
        especie: "Pájaro",
        personalidad: "Jock",
        colores: ["Beige", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/peck.png"
    },
    {
        nombre: "Peewee",
        especie: "Gorila",
        personalidad: "Gruñón",
        colores: ["Blue", "Orange"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/peewee.png"
    },
    {
        nombre: "Peggy",
        especie: "Cerdo",
        personalidad: "Animada",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/peggy.png"
    },
    {
        nombre: "Pekoe",
        especie: "Cub",
        personalidad: "Normal",
        colores: ["Beige", "Red"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pekoe.png"
    },
    {
        nombre: "Penelope",
        especie: "Mouse",
        personalidad: "Animada",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/penelope.png"
    },
    {
        nombre: "Phil",
        especie: "Ostrich",
        personalidad: "Smug",
        colores: ["Green", "Red"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/phil.png"
    },
    {
        nombre: "Phoebe",
        especie: "Ostrich",
        personalidad: "Hermana",
        colores: ["Black", "Red"],
        estilos: ["Gorgeous", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/phoebe.png"
    },
    {
        nombre: "Pierce",
        especie: "Eagle",
        personalidad: "Jock",
        colores: ["Orange", "Yellow"],
        estilos: ["Active", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pierce.png"
    },
    {
        nombre: "Pietro",
        especie: "Sheep",
        personalidad: "Smug",
        colores: ["Colorful", "Red"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pietro.png"
    },
    {
        nombre: "Pinky",
        especie: "Bear",
        personalidad: "Animada",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pinky.png"
    },
    {
        nombre: "Piper",
        especie: "Pájaro",
        personalidad: "Animada",
        colores: ["Black", "White"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/piper.png"
    },
    {
        nombre: "Pippy",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Brown", "Green"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pippy.png"
    },
    {
        nombre: "Plucky",
        especie: "Chicken",
        personalidad: "Hermana",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/plucky.png"
    },
    {
        nombre: "Pompom",
        especie: "Duck",
        personalidad: "Animada",
        colores: ["Light Blue", "Pink"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pompom.png"
    },
    {
        nombre: "Poncho",
        especie: "Cub",
        personalidad: "Jock",
        colores: ["Orange", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/poncho.png"
    },
    {
        nombre: "Poppy",
        especie: "Ardilla",
        personalidad: "Normal",
        colores: ["Green", "Yellow"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/poppy.png"
    },
    {
        nombre: "Portia",
        especie: "Dog",
        personalidad: "Snooty",
        colores: ["Black", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/portia.png"
    },
    {
        nombre: "Prince",
        especie: "Frog",
        personalidad: "Perezoso",
        colores: ["Yellow", "White"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/prince.png"
    },
    {
        nombre: "Puck",
        especie: "Penguin",
        personalidad: "Perezoso",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/puck.png"
    },
    {
        nombre: "Puddles",
        especie: "Frog",
        personalidad: "Animada",
        colores: ["Green", "Pink"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/puddles.png"
    },
    {
        nombre: "Pudge",
        especie: "Cub",
        personalidad: "Perezoso",
        colores: ["Blue", "Green"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/pudge.png"
    },
    {
        nombre: "Punchy",
        especie: "Cat",
        personalidad: "Perezoso",
        colores: ["Blue", "Light Blue"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/punchy.png"
    },
    {
        nombre: "Purrl",
        especie: "Cat",
        personalidad: "Snooty",
        colores: ["Blue", "Gray"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/purrl.png"
    },
    {
        nombre: "Queenie",
        especie: "Ostrich",
        personalidad: "Snooty",
        colores: ["Black", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/queenie.png"
    },
    {
        nombre: "Quillson",
        especie: "Duck",
        personalidad: "Smug",
        colores: ["Beige", "Orange"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/quillson.png"
    },
    {
        nombre: "Raddle",
        especie: "Frog",
        personalidad: "Perezoso",
        colores: ["Gray", "White"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/raddle.png"
    },
    {
        nombre: "Rasher",
        especie: "Cerdo",
        personalidad: "Gruñón",
        colores: ["Black", "Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rasher.png"
    },
    {
        nombre: "Raymond",
        especie: "Cat",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/raymond.png"
    },
    {
        nombre: "Renée",
        especie: "Rhino",
        personalidad: "Hermana",
        colores: ["Purple", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/renée.png"
    },
    {
        nombre: "Reneigh",
        especie: "Horse",
        personalidad: "Hermana",
        colores: ["Black", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/reneigh.png"
    },
    {
        nombre: "Rex",
        especie: "Lion",
        personalidad: "Perezoso",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rex.png"
    },
    {
        nombre: "Rhonda",
        especie: "Rhino",
        personalidad: "Normal",
        colores: ["Black", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rhonda.png"
    },
    {
        nombre: "Ribbot",
        especie: "Frog",
        personalidad: "Jock",
        colores: ["Blue", "Light Blue"],
        estilos: ["Simple", "Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ribbot.png"
    },
    {
        nombre: "Ricky",
        especie: "Ardilla",
        personalidad: "Gruñón",
        colores: ["Blue", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ricky.png"
    },
    {
        nombre: "Rizzo",
        especie: "Mouse",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rizzo.png"
    },
    {
        nombre: "Roald",
        especie: "Penguin",
        personalidad: "Jock",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/roald.png"
    },
    {
        nombre: "Robin",
        especie: "Pájaro",
        personalidad: "Snooty",
        colores: ["Light Blue", "Purple"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/robin.png"
    },
    {
        nombre: "Rocco",
        especie: "Hippo",
        personalidad: "Gruñón",
        colores: ["Black", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rocco.png"
    },
    {
        nombre: "Rocket",
        especie: "Gorila",
        personalidad: "Hermana",
        colores: ["Pink", "Red"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rocket.png"
    },
    {
        nombre: "Rod",
        especie: "Mouse",
        personalidad: "Jock",
        colores: ["Blue", "Light Blue"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rod.png"
    },
    {
        nombre: "Rodeo",
        especie: "Bull",
        personalidad: "Perezoso",
        colores: ["Black", "Red"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rodeo.png"
    },
    {
        nombre: "Rodney",
        especie: "Hamster",
        personalidad: "Smug",
        colores: ["Colorful", "Pink"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rodney.png"
    },
    {
        nombre: "Rolf",
        especie: "Tiger",
        personalidad: "Gruñón",
        colores: ["Blue", "Black"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rolf.png"
    },
    {
        nombre: "Rooney",
        especie: "Kangaroo",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Active"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rooney.png"
    },
    {
        nombre: "Rory",
        especie: "Lion",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rory.png"
    },
    {
        nombre: "Roscoe",
        especie: "Horse",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/roscoe.png"
    },
    {
        nombre: "Rosie",
        especie: "Cat",
        personalidad: "Animada",
        colores: ["Pink", "Red"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rosie.png"
    },
    {
        nombre: "Rowan",
        especie: "Tiger",
        personalidad: "Jock",
        colores: ["Gray", "Light Blue"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rowan.png"
    },
    {
        nombre: "Ruby",
        especie: "Rabbit",
        personalidad: "Animada",
        colores: ["Light Blue", "Pink"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ruby.png"
    },
    {
        nombre: "Rudy",
        especie: "Cat",
        personalidad: "Jock",
        colores: ["Beige", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/rudy.png"
    },
    {
        nombre: "Sally",
        especie: "Ardilla",
        personalidad: "Normal",
        colores: ["Beige", "White"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sally.png"
    },
    {
        nombre: "Samson",
        especie: "Mouse",
        personalidad: "Jock",
        colores: ["Red", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/samson.png"
    },
    {
        nombre: "Sandy",
        especie: "Ostrich",
        personalidad: "Normal",
        colores: ["Light Blue", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sandy.png"
    },
    {
        nombre: "Savannah",
        especie: "Horse",
        personalidad: "Normal",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/savannah.png"
    },
    {
        nombre: "Scoot",
        especie: "Duck",
        personalidad: "Jock",
        colores: ["Beige", "Blue"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/scoot.png"
    },
    {
        nombre: "Shari",
        especie: "Monkey",
        personalidad: "Hermana",
        colores: ["Light Blue", "Yellow"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/shari.png"
    },
    {
        nombre: "Sheldon",
        especie: "Ardilla",
        personalidad: "Jock",
        colores: ["Green", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sheldon.png"
    },
    {
        nombre: "Shep",
        especie: "Dog",
        personalidad: "Smug",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/shep.png"
    },
    {
        nombre: "Sherb",
        especie: "Goat",
        personalidad: "Perezoso",
        colores: ["Blue", "Gray"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sherb.png"
    },
    {
        nombre: "Simon",
        especie: "Monkey",
        personalidad: "Perezoso",
        colores: ["Colorful", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/simon.png"
    },
    {
        nombre: "Skye",
        especie: "Wolf",
        personalidad: "Normal",
        colores: ["Blue", "White"],
        estilos: ["Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/skye.png"
    },
    {
        nombre: "Sly",
        especie: "Cocodrilo",
        personalidad: "Jock",
        colores: ["Brown", "Green"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sly.png"
    },
    {
        nombre: "Snake",
        especie: "Rabbit",
        personalidad: "Jock",
        colores: ["Black", "Blue"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/snake.png"
    },
    {
        nombre: "Snooty",
        especie: "Anteater",
        personalidad: "Snooty",
        colores: ["Green", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/snooty.png"
    },
    {
        nombre: "Soleil",
        especie: "Hamster",
        personalidad: "Snooty",
        colores: ["Red", "Yellow"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/soleil.png"
    },
    {
        nombre: "Sparro",
        especie: "Pájaro",
        personalidad: "Jock",
        colores: ["Gray", "Green"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sparro.png"
    },
    {
        nombre: "Spike",
        especie: "Rhino",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/spike.png"
    },
    {
        nombre: "Spork",
        especie: "Cerdo",
        personalidad: "Perezoso",
        colores: ["Colorful", "Green"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/spork.png"
    },
    {
        nombre: "Sprinkle",
        especie: "Penguin",
        personalidad: "Animada",
        colores: ["Light Blue", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sprinkle.png"
    },
    {
        nombre: "Sprocket",
        especie: "Ostrich",
        personalidad: "Jock",
        colores: ["Green", "Orange"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sprocket.png"
    },
    {
        nombre: "Static",
        especie: "Ardilla",
        personalidad: "Gruñón",
        colores: ["Black", "Yellow"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/static.png"
    },
    {
        nombre: "Stella",
        especie: "Sheep",
        personalidad: "Normal",
        colores: ["Beige", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/stella.png"
    },
    {
        nombre: "Sterling",
        especie: "Eagle",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Elegant", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sterling.png"
    },
    {
        nombre: "Stinky",
        especie: "Cat",
        personalidad: "Jock",
        colores: ["Blue", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/stinky.png"
    },
    {
        nombre: "Stitches",
        especie: "Cub",
        personalidad: "Perezoso",
        colores: ["Colorful", "White"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/stitches.png"
    },
    {
        nombre: "Stu",
        especie: "Bull",
        personalidad: "Perezoso",
        colores: ["Beige", "Brown"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/stu.png"
    },
    {
        nombre: "Sydney",
        especie: "Koala",
        personalidad: "Normal",
        colores: ["Beige", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sydney.png"
    },
    {
        nombre: "Sylvana",
        especie: "Ardilla",
        personalidad: "Normal",
        colores: ["Green", "Purple"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sylvana.png"
    },
    {
        nombre: "Sylvia",
        especie: "Kangaroo",
        personalidad: "Hermana",
        colores: ["Green", "Yellow"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/sylvia.png"
    },
    {
        nombre: "T-Bone",
        especie: "Bull",
        personalidad: "Gruñón",
        colores: ["Black", "Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/t-bone.png"
    },
    {
        nombre: "Tabby",
        especie: "Cat",
        personalidad: "Animada",
        colores: ["Black", "Gray"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tabby.png"
    },
    {
        nombre: "Tad",
        especie: "Frog",
        personalidad: "Jock",
        colores: ["Colorful", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tad.png"
    },
    {
        nombre: "Tammi",
        especie: "Monkey",
        personalidad: "Animada",
        colores: ["Green", "Purple"],
        estilos: ["Active", "Cute"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tammi.png"
    },
    {
        nombre: "Tammy",
        especie: "Cub",
        personalidad: "Hermana",
        colores: ["Purple", "Red"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tammy.png"
    },
    {
        nombre: "Tangy",
        especie: "Cat",
        personalidad: "Animada",
        colores: ["Green", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tangy.png"
    },
    {
        nombre: "Tank",
        especie: "Rhino",
        personalidad: "Jock",
        colores: ["Green", "Red"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tank.png"
    },
    {
        nombre: "Tasha",
        especie: "Ardilla",
        personalidad: "Snooty",
        colores: ["Beige", "Gray"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tasha.png"
    },
    {
        nombre: "Teddy",
        especie: "Bear",
        personalidad: "Jock",
        colores: ["Orange", "Yellow"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/teddy.png"
    },
    {
        nombre: "Tex",
        especie: "Penguin",
        personalidad: "Smug",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tex.png"
    },
    {
        nombre: "Tia",
        especie: "Elephant",
        personalidad: "Normal",
        colores: ["Black", "White"],
        estilos: ["Cute", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tia.png"
    },
    {
        nombre: "Tiffany",
        especie: "Rabbit",
        personalidad: "Snooty",
        colores: ["Black", "Red"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tiffany.png"
    },
    {
        nombre: "Timbra",
        especie: "Sheep",
        personalidad: "Snooty",
        colores: ["Brown", "Green"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/timbra.png"
    },
    {
        nombre: "Tipper",
        especie: "Cow",
        personalidad: "Snooty",
        colores: ["Colorful", "Pink"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tipper.png"
    },
    {
        nombre: "Tom",
        especie: "Cat",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tom.png"
    },
    {
        nombre: "Truffles",
        especie: "Cerdo",
        personalidad: "Animada",
        colores: ["Green", "Red"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/truffles.png"
    },
    {
        nombre: "Tucker",
        especie: "Elephant",
        personalidad: "Perezoso",
        colores: ["Orange", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tucker.png"
    },
    {
        nombre: "Tutu",
        especie: "Bear",
        personalidad: "Animada",
        colores: ["Pink", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tutu.png"
    },
    {
        nombre: "Twiggy",
        especie: "Pájaro",
        personalidad: "Animada",
        colores: ["Blue", "Pink"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/twiggy.png"
    },
    {
        nombre: "Tybalt",
        especie: "Tiger",
        personalidad: "Jock",
        colores: ["Blue", "Purple"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/tybalt.png"
    },
    {
        nombre: "Ursala",
        especie: "Bear",
        personalidad: "Hermana",
        colores: ["Orange", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/ursala.png"
    },
    {
        nombre: "Velma",
        especie: "Goat",
        personalidad: "Snooty",
        colores: ["Light Blue", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/velma.png"
    },
    {
        nombre: "Vesta",
        especie: "Sheep",
        personalidad: "Normal",
        colores: ["Orange", "Red"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/vesta.png"
    },
    {
        nombre: "Vic",
        especie: "Bull",
        personalidad: "Gruñón",
        colores: ["Blue", "Light Blue"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/vic.png"
    },
    {
        nombre: "Victoria",
        especie: "Horse",
        personalidad: "Animada",
        colores: ["Orange", "Yellow"],
        estilos: ["Active", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/victoria.png"
    },
    {
        nombre: "Violet",
        especie: "Gorila",
        personalidad: "Snooty",
        colores: ["Pink", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/violet.png"
    },
    {
        nombre: "Vivian",
        especie: "Wolf",
        personalidad: "Snooty",
        colores: ["Gray", "Purple"],
        estilos: ["Elegant", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/vivian.png"
    },
    {
        nombre: "Vladimir",
        especie: "Cub",
        personalidad: "Gruñón",
        colores: ["Colorful", "Yellow"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/vladimir.png"
    },
    {
        nombre: "Wade",
        especie: "Penguin",
        personalidad: "Perezoso",
        colores: ["Blue", "Light Blue"],
        estilos: ["Gorgeous", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/wade.png"
    },
    {
        nombre: "Walker",
        especie: "Dog",
        personalidad: "Perezoso",
        colores: ["Orange", "Red"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/walker.png"
    },
    {
        nombre: "Walt",
        especie: "Kangaroo",
        personalidad: "Gruñón",
        colores: ["Black", "Gray"],
        estilos: ["Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/walt.png"
    },
    {
        nombre: "Wart Jr.",
        especie: "Frog",
        personalidad: "Gruñón",
        colores: ["Blue", "Purple"],
        estilos: ["Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/wart-jr..png"
    },
    {
        nombre: "Weber",
        especie: "Duck",
        personalidad: "Perezoso",
        colores: ["Black", "Blue"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/weber.png"
    },
    {
        nombre: "Wendy",
        especie: "Sheep",
        personalidad: "Animada",
        colores: ["Green", "Red"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/wendy.png"
    },
    {
        nombre: "Whitney",
        especie: "Wolf",
        personalidad: "Snooty",
        colores: ["Blue", "Light Blue"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/whitney.png"
    },
    {
        nombre: "Willow",
        especie: "Sheep",
        personalidad: "Snooty",
        colores: ["Pink", "White"],
        estilos: ["Cute", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/willow.png"
    },
    {
        nombre: "Winnie",
        especie: "Horse",
        personalidad: "Animada",
        colores: ["Gray", "White"],
        estilos: ["Cool", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/winnie.png"
    },
    {
        nombre: "Wolfgang",
        especie: "Wolf",
        personalidad: "Gruñón",
        colores: ["Black", "Green"],
        estilos: ["Active", "Cool"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/wolfgang.png"
    },
    {
        nombre: "Yuka",
        especie: "Koala",
        personalidad: "Snooty",
        colores: ["Orange", "Yellow"],
        estilos: ["Cool", "Elegant"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/yuka.png"
    },
    {
        nombre: "Zell",
        especie: "Deer",
        personalidad: "Smug",
        colores: ["Gray", "Purple"],
        estilos: ["Cool", "Gorgeous"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/zell.png"
    },
    {
        nombre: "Zucker",
        especie: "Octopus",
        personalidad: "Perezoso",
        colores: ["Blue", "Yellow"],
        estilos: ["Cute", "Simple"],
        imagenUrl: "https://acnh.co/assets/img/nintendo-switch-acnh-villagers/zucker.png"
    },
];

function recommendNeighbors(preferences) {
    return neighbors.filter(neighbor => {
        let matches = 0;

        
        if (preferences.tematica_isla === "Conexión con la naturaleza" && neighbor.estilos.includes("Natural")) {
            matches++;
        }

        if (preferences.tematica_isla === "Disfrutar del sol y el agua" && neighbor.estilos.includes("Cool")) {
            matches++;
        }

        if (preferences.tematica_isla === "Vida moderna y animada" && neighbor.estilos.includes("Modern")) {
            matches++;
        }

        if (preferences.tematica_isla === "Refugio campestre" && neighbor.estilos.includes("Simple")) {
            matches++;
        }

       
        if (preferences.actividad_principal === "Buscar tesoros y explorar rincones escondidos" && neighbor.personalidad === "Jock") {
            matches++;
        }

        if (preferences.actividad_principal === "Relajarse y disfrutar del paisaje" && neighbor.personalidad === "Lazy") {
            matches++;
        }

        if (preferences.actividad_principal === "Jugar y mantenerse en forma" && neighbor.personalidad === "Jock") {
            matches++;
        }


        if (preferences.actividad_principal === "Celebrar y organizar eventos" && neighbor.personalidad === "Peppy") {
            matches++;
        }

       
        if (preferences.vecino_ideal === "Relajado y fácil de tratar" && neighbor.personalidad === "Lazy") {
            matches++;
        }


        if (preferences.vecino_ideal === "Divertido y alegre" && neighbor.personalidad === "Peppy") {
            matches++;
        }


        if (preferences.vecino_ideal === "Siempre en movimiento" && neighbor.personalidad === "Jock") {
            matches++;
        }

        if (preferences.vecino_ideal === "Con estilo y elegancia" && neighbor.personalidad === "Snooty") {
            matches++;
        }

        if (preferences.fiesta_ideal === "Fiesta animada y llena de risas" && neighbor.personalidad === "Peppy") {
            matches++;
        }

        if (preferences.fiesta_ideal === "Reunión tranquila y amigable" && neighbor.personalidad === "Lazy") {
            matches++;
        }


        if (preferences.fiesta_ideal === "Reunión llena de desafíos y actividades" && neighbor.personalidad === "Jock") {
            matches++;
        }

        if (preferences.fiesta_ideal === "Ambiente creativo e inspirador" && neighbor.personalidad === "Normal") {
            matches++;
        }


        if (preferences.interacciones_deseadas === "Trabajar juntos en el jardín" && neighbor.estilos.includes("Simple")) {
            matches++;
        }

        if (preferences.interacciones_deseadas === "Organizar actividades divertidas" && neighbor.personalidad === "Peppy") {
            matches++;
        }

        if (preferences.interacciones_deseadas === "Intercambiar recetas y consejos" && neighbor.personalidad === "Normal") {
            matches++;
        }

        if (preferences.interacciones_deseadas === "Explorar y descubrir lugares nuevos" && neighbor.personalidad === "Jock") {
            matches++;
        }

        if (preferences.elementos_decorativos === "Algunos toques de arte" && neighbor.estilos.includes("Elegant")) {
            matches++;
        }

        if (preferences.elementos_decorativos === "Flores de diferentes colores" && neighbor.estilos.includes("Natural")) {
            matches++;
        }

        if (preferences.elementos_decorativos === "Luces brillantes y festivas" && neighbor.estilos.includes("Cool")) {
            matches++;
        }

        if (preferences.elementos_decorativos === "Muebles rústicos y acogedores" && neighbor.estilos.includes("Rustic")) {
            matches++;
        }

        if (preferences.estilo_visual === "Estilo acogedor y natural" && neighbor.estilos.includes("Rustic")) {
            matches++;
        }

        if (preferences.estilo_visual === "Diseño moderno y elegante" && neighbor.estilos.includes("Modern")) {
            matches++;
        }

        if (preferences.estilo_visual === "Colores vibrantes y alegres" && neighbor.estilos.includes("Cute")) {
            matches++;
        }

        if (preferences.estilo_visual === "Minimalismo y sencillez" && neighbor.estilos.includes("Simple")) {
            matches++;
        }

        if (preferences.actividad_con_vecinos === "Cultivar un hermoso jardín" && neighbor.personalidad === "Sisterly") {
            matches++;
        }

        if (preferences.actividad_con_vecinos === "Pasar el día pescando" && neighbor.personalidad === "Lazy") {
            matches++;
        }

        if (preferences.actividad_con_vecinos === "Cocinar deliciosas recetas" && neighbor.personalidad === "Normal") {
            matches++;
        }

        if (preferences.actividad_con_vecinos === "Compartir comidas deliciosas" && neighbor.personalidad === "Lazy") {
            matches++;
        }

        if (preferences.color_favorito === "Tonos frescos como azul y verde" && neighbor.colores.includes("Blue")) {
            matches++;
        }

        if (preferences.color_favorito === "Colores suaves como rosa y blanco" && neighbor.colores.includes("Pink")) {
            matches++;
        }

        if (preferences.color_favorito === "Tonos cálidos como amarillo y naranja" && neighbor.colores.includes("Yellow")) {
            matches++;
        }

        if (preferences.color_favorito === "Contrastes como negro y dorado" && neighbor.colores.includes("Black")) {
            matches++;
        }

        if (preferences.decoracion_preferida === "Ambiente natural y relajante" && neighbor.estilos.includes("Natural")) {
            matches++;
        }

        if (preferences.decoracion_preferida === "Estilo urbano y contemporáneo" && neighbor.estilos.includes("Modern")) {
            matches++;
        }

        if (preferences.decoracion_preferida === "Encanto vintage y detalles elegantes" && neighbor.estilos.includes("Elegant")) {
            matches++;
        }

        if (preferences.decoracion_preferida === "Detalles exóticos y únicos" && neighbor.estilos.includes("Cool")) {
            matches++;
        }

        return matches >= 3;
    });
}