const plants = [
    { name: "Rosa", origin: "Asia, Europa y América del Norte" },
    { name: "Girasol", origin: "América del Norte y del Sur" },
    { name: "Tulipán", origin: "Asia Central y Europa del Este" },
    { name: "Margarita", origin: "Europa" },
    { name: "Lirio", origin: "Europa, Asia y América del Norte" },
    { name: "Orquídea", origin: "Región tropical mundial" },
    { name: "Clavel", origin: "Mediterráneo" },
    { name: "Jazmín", origin: "Región tropical y subtropical" },
    { name: "Narciso", origin: "Europa y el Mediterráneo" },
    { name: "Dalia", origin: "México" },
    { name: "Peonía", origin: "Europa, Asia y América del Norte" },
    { name: "Gladiolo", origin: "África y Europa" },
    { name: "Azucena", origin: "Europa" },
    { name: "Crisantemo", origin: "Asia y Europa" },
    { name: "Hortensia", origin: "Asia y América del Norte" },
    { name: "Aloe Vera", origin: "Arabia y África" },
    { name: "Bambú", origin: "Asia" },
    { name: "Cactus", origin: "América" },
    { name: "Helecho", origin: "Regiones tropicales y subtropicales" },
    { name: "Lavanda", origin: "Mediterráneo" },
    { name: "Menta", origin: "Europa, Asia y América del Norte" },
    { name: "Eucalipto", origin: "Australia y Asia" },
    { name: "Hiedra", origin: "Europa y Asia" },
    { name: "Pino", origin: "Regiones templadas del hemisferio norte" },
    { name: "Sauce Llorón", origin: "Asia y Europa" },
    { name: "Tomillo", origin: "Mediterráneo" },
    { name: "Albahaca", origin: "Asia y África" },
    { name: "Hierbabuena", origin: "Mediterráneo y Asia" },
    { name: "Romero", origin: "Mediterráneo" },
    { name: "Yerba Mate", origin: "Sudamérica" },
    { name: "Amarilis", origin: "América del Sur" },
    { name: "Ajo", origin: "Asia Central" },
    { name: "Romero", origin: "Mediterráneo" },
    { name: "Cebolla ", origin: "Asia Central" },
    { name: "Perejíl", origin: "Mediterráneo" },
    { name: "Buganvilla", origin: "América del sur" },
    { name: "Azucena", origin: "Europa" },
    { name: "Narciso ", origin: "Europa, Mediterráneo" },
    { name: "Clavel", origin: "Mediterráneo" },


    
];

document.getElementById("plantForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional

    const plantName = document.getElementById("plantName").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    // Busca la planta en la lista
    const plant = plants.find(p => p.name.toLowerCase() === plantName);

    if (plant) {
        resultDiv.textContent = `Verdadero: La planta existe. Procedencia: ${plant.origin}.`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "Falso: La planta no existe.";
        resultDiv.style.color = "red";
    }
});
