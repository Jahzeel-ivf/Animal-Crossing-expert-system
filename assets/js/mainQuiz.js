let userPreferences = {};
let currentQuestionIndex = 0;

// Función para recolectar respuestas
function collectAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const userResponse = document.getElementById(currentQuestion.key).value;
    userPreferences[currentQuestion.key] = userResponse;
}


function handleRecommendations() {
    collectAnswers();
    const recommendations = recommendNeighbors(userPreferences);
    displayRecommendations(recommendations);
}

// Función para mostrar las recomendaciones en el HTML
function displayRecommendations(recommendations) {
    const container = document.getElementById("questions-container");
    container.innerHTML = ""; // Limpiar preguntas anteriores

    if (recommendations.length === 0) {
        container.innerHTML = "<p>No se encontraron vecinos que coincidan con tus preferencias. Intenta ajustar tus respuestas.</p>";
        return;
    }

    // Limitar a máximo 3 vecinos
    const maxNeighborsToShow = 3;
    const limitedRecommendations = recommendations.slice(0, maxNeighborsToShow);

    limitedRecommendations.forEach(neighbor => {
        const neighborElement = document.createElement("div");
        neighborElement.className = "card";
        neighborElement.innerHTML = `
            <div class="card-details">
                <p class="text-title">${neighbor.nombre}</p>
                <p class="text-body">Especie: ${neighbor.especie} <br> Personalidad: ${neighbor.personalidad} <br> Estilos: ${neighbor.estilos.join(", ")} <br> Colores: ${neighbor.colores.join(", ")}</p>
            </div>
        `;
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
        <select id="${currentQuestion.key}">
            ${currentQuestion.options.map(option => `<option value="${option}">${option}</option>`).join('')}
        </select>
    `;

    container.appendChild(questionElement);

    // Añadir botones de navegación
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

// Inicializar la primera pregunta
document.addEventListener("DOMContentLoaded", () => {
    displayCurrentQuestion();
});
