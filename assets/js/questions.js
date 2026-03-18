let userPreferences = {};
let currentQuestionIndex = 0;

const questions = [
    {
        key: "tematica_isla",
        text: "¿Qué ambiente prefieres para tu isla?",
        options: [
            "Conexión con la naturaleza",
            "Disfrutar del sol y el agua",
            "Vida moderna y animada",
            "Refugio campestre"
        ]
    },
    {
        key: "actividad_principal",
        text: "¿Cuál de estas actividades disfrutarías más en tu isla?",
        options: [
            "Buscar tesoros y explorar rincones escondidos",
            "Relajarse y disfrutar del paisaje",
            "Jugar y mantenerse en forma",
            "Celebrar y organizar eventos"
        ]
    },
    {
        key: "vecino_ideal",
        text: "¿Qué tipo de vecino te haría sentir más cómodo?",
        options: [
            "Relajado y fácil de tratar",
            "Divertido y alegre",
            "Siempre en movimiento",
            "Con estilo y elegancia"
        ]
    },
    {
        key: "fiesta_ideal",
        text: "Si organizaras una fiesta en tu isla, ¿cómo sería?",
        options: [
            "Fiesta animada y llena de risas",
            "Reunión tranquila y amigable",
            "Reunión llena de desafíos y actividades",
            "Ambiente creativo e inspirador"
        ]
    },
    {
        key: "interacciones_deseadas",
        text: "¿Qué tipo de actividades te gustaría compartir con tus vecinos?",
        options: [
            "Trabajar juntos en el jardín",
            "Organizar actividades divertidas",
            "Intercambiar recetas y consejos",
            "Explorar y descubrir lugares nuevos"
        ]
    },
    {
        key: "elementos_decorativos",
        text: "¿Qué elementos decorativos deberían destacar en tu isla?",
        options: [
            "Algunos toques de arte",
            "Flores de diferentes colores",
            "Luces brillantes y festivas",
            "Muebles rústicos y acogedores"
        ]
    },
    {
        key: "estilo_visual",
        text: "¿Qué estilo prefieres para los espacios comunes de tu isla?",
        options: [
            "Estilo acogedor y natural",
            "Diseño moderno y elegante",
            "Colores vibrantes y alegres",
            "Minimalismo y sencillez"
        ]
    },
    {
        key: "actividad_con_vecinos",
        text: "¿Qué actividad disfrutarías hacer con tus vecinos?",
        options: [
            "Cultivar un hermoso jardín",
            "Pasar el día pescando",
            "Cocinar deliciosas recetas",
            "Compartir comidas deliciosas"
        ]
    },
    {
        key: "color_favorito",
        text: "¿Qué combinación de colores representa mejor tu estilo?",
        options: [
            "Tonos frescos como azul y verde",
            "Colores suaves como rosa y blanco",
            "Tonos cálidos como amarillo y naranja",
            "Contrastes como negro y dorado"
        ]
    },
    {
        key: "decoracion_preferida",
        text: "¿Qué estilo decorativo prefieres para tu isla?",
        options: [
            "Ambiente natural y relajante",
            "Estilo urbano y contemporáneo",
            "Encanto vintage y detalles elegantes",
            "Detalles exóticos y únicos"
        ]
    }
];

// Función para recolectar respuestas
function collectAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = document.querySelector('.option-button.selected');
    if (selectedOption) {
        userPreferences[currentQuestion.key] = selectedOption.dataset.value;
    }
}

// Función para manejar el evento del botón de obtener recomendaciones
function handleRecommendations() {
    collectAnswers();
    const recommendations = recommendNeighbors(userPreferences);
    document.getElementById("questions-container").style.display = "none";
    displayRecommendations(recommendations);
}

// Función para mostrar las recomendaciones 
function displayRecommendations(recommendations) {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; 

    if (recommendations.length === 0) {
        container.innerHTML = "<p>No se encontraron vecinos que coincidan con tus preferencias. Intenta ajustar tus respuestas.</p>";
        return;
    }

    recommendations.forEach(neighbor => {
        const neighborElement = document.createElement("div");
        neighborElement.className = "card";
        neighborElement.innerHTML = `
            <div class="card-details">
                <p class="text-title">${neighbor.nombre}</p>
                <img src="${neighbor.imagenUrl}" alt="Imagen de ${neighbor.nombre}" class="neighbor-image">
                <p class="text-body">Especie: ${neighbor.especie} <br> Personalidad: ${neighbor.personalidad} <br> Estilos: ${neighbor.estilos.join(", ")} <br> Colores: ${neighbor.colores.join(", ")}</p>
            </div>
            <button class="card-button">Más información</button>
        `;

        const moreInfoButton = neighborElement.querySelector(".card-button");
        moreInfoButton.addEventListener("click", () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            setTimeout(() => {
                window.location.href = "https://acnh.co/villagers";
            }, 3000);
        });

        container.appendChild(neighborElement);
    });
}

// Función para mostrar la pregunta actual
function displayCurrentQuestion() {
    const container = document.getElementById("questions-container");
    container.innerHTML = ""; // Limpiar preguntas anteriores

    const currentQuestion = questions[currentQuestionIndex];
    const questionElement = document.createElement("div");
    questionElement.className = "question-card";
    questionElement.innerHTML = `
        <label for="${currentQuestion.key}">${currentQuestion.text}</label>
        <div class="options-container">
            ${currentQuestion.options.map(option => `
                <div class="option-button" data-value="${option}">${option}</div>
            `).join('')}
        </div>
    `;

    container.appendChild(questionElement);

    document.querySelectorAll('.option-button').forEach(optionElement => {
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.option-button').forEach(el => el.classList.remove('selected'));
            optionElement.classList.add('selected');
        });
    });

    const navContainer = document.createElement("div");
    navContainer.className = "question-nav";

    if (currentQuestionIndex > 0) {
        const prevButton = document.createElement("button");
        prevButton.id = "prev-button";
        prevButton.textContent = "Anterior";
        prevButton.addEventListener("click", () => {
            currentQuestionIndex--;
            displayCurrentQuestion();
        });
        navContainer.appendChild(prevButton);
    }

    if (currentQuestionIndex < questions.length - 1) {
        const nextButton = document.createElement("button");
        nextButton.id = "next-button";
        nextButton.textContent = "Siguiente";
        nextButton.addEventListener("click", () => {
            collectAnswers();
            currentQuestionIndex++;
            displayCurrentQuestion();
        });
        navContainer.appendChild(nextButton);
    } else {
        const submitButton = document.createElement("button");
        submitButton.id = "submit-button";
        submitButton.textContent = "Obtener Recomendaciones";
        submitButton.addEventListener("click", handleRecommendations);
        navContainer.appendChild(submitButton);
    }

    container.appendChild(navContainer);
}

document.addEventListener("DOMContentLoaded", () => {
    displayCurrentQuestion();
});
