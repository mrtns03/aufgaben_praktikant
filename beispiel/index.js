// Challenge 7: Dynamische Berufserfahrung

// JS
function addExperience() {
    const experienceList = document.getElementById('experienceList');
    const newExperience = document.createElement('li');
    newExperience.textContent = 'Neue Berufserfahrung';
    experienceList.appendChild(newExperience);
}

//HTML
// <ul id="experienceList">
//     <li>Berufserfahrung 1</li>
//     <li>Berufserfahrung 2</li>
// </ul>


// Challenge 8: Dynamische Berufserfahrung mit Namen

// JS
function addNamedExperience() {
    const experienceName = document.getElementById('experienceName').value;
    if (experienceName.trim() !== '') {
        const experienceList = document.getElementById('experienceList');
        const newExperience = document.createElement('li');
        newExperience.textContent = experienceName;
        experienceList.appendChild(newExperience);
        document.getElementById('experienceName').value = ''; // Inputfeld leeren
    } else {
        alert('Bitte geben Sie einen Namen für die Berufserfahrung ein.');
    }
}

//HTML
// <input type="text" id="experienceName" placeholder="Name der Berufserfahrung">
// <button onClick="addNamedExperience()">Berufserfahrung hinzufügen</button>