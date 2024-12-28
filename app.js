
// State management - keeps track of user selections and current workout
let state = {
    selectedType: null,
    selectedTime: null,
    currentWorkout: null
};

// Cache DOM elements for better performance
const selectionScreen = document.getElementById('selection-screen');
const workoutScreen = document.getElementById('workout-screen');
const generateBtn = document.getElementById('generate-btn');
const newWorkoutBtn = document.getElementById('new-workout-btn');

// Initialize the workout type selection interface
const workoutTypesContainer = document.getElementById('workout-types');
workoutTypes.forEach(type => {
    const button = document.createElement('button');
    button.className = 'workout-button';
    button.setAttribute('data-type', type.id);
    button.innerHTML = `
        <h3>${type.title}</h3>
        <p>${type.description}</p>
    `;
    button.addEventListener('click', () => selectWorkoutType(type.id));
    workoutTypesContainer.appendChild(button);
});

// Initialize the time range selection interface
const timeRangesContainer = document.getElementById('time-ranges');
timeRanges.forEach(range => {
    const button = document.createElement('button');
    button.className = 'time-button';
    button.setAttribute('data-time', range.id);
    button.innerHTML = `
        <i class="ph ph-clock"></i>
        <span>${range.label}</span>
    `;
    button.addEventListener('click', () => selectTimeRange(range.id));
    timeRangesContainer.appendChild(button);
});


// Set up event listeners for main action buttons
generateBtn.addEventListener('click', generateWorkout);
newWorkoutBtn.addEventListener('click', resetToSelection);

// Handle workout type selection
function selectWorkoutType(typeId) {
    state.selectedType = typeId;
    updateWorkoutTypeButtons();
    updateGenerateButton();
}

// Handle time range selection
function selectTimeRange(timeId) {
    state.selectedTime = timeId;
    updateTimeRangeButtons();
    updateGenerateButton();
}

// Update UI to reflect workout type selection
function updateWorkoutTypeButtons() {
    const buttons = workoutTypesContainer.querySelectorAll('.workout-button');
    buttons.forEach(button => {
        button.classList.toggle('selected', 
            button.getAttribute('data-type') === state.selectedType);
    });
}

// Update UI to reflect time range selection
function updateTimeRangeButtons() {
    const buttons = timeRangesContainer.querySelectorAll('.time-button');
    buttons.forEach(button => {
        button.classList.toggle('selected', 
            button.getAttribute('data-time') === state.selectedTime);
    });
}

// Enable/disable generate button based on selections
function updateGenerateButton() {
    generateBtn.disabled = !(state.selectedType && state.selectedTime);
}

// Generate a random workout based on user selections
function generateWorkout() {
    const availableWorkouts = workouts[state.selectedType];
    if (!availableWorkouts || availableWorkouts.length === 0) {
        alert('No workouts available for this combination. Please try different options.');
        return;
    }

    // Randomly select a workout from available options
    const randomIndex = Math.floor(Math.random() * availableWorkouts.length);
    state.currentWorkout = availableWorkouts[randomIndex];

    // Update the workout display with selected workout details
    document.getElementById('workout-title').textContent = state.currentWorkout.title;
    document.getElementById('workout-intensity').textContent = 
        `Intensity: ${state.currentWorkout.intensity}`;
    document.getElementById('workout-duration').textContent = 
        `Duration: ${state.currentWorkout.duration} minutes`;
    document.getElementById('workout-instructions').textContent = 
        state.currentWorkout.instructions;

    // Switch to workout display screen
    showWorkoutScreen();
}

// Handle screen transitions
function showWorkoutScreen() {
    selectionScreen.style.display = 'none';
    workoutScreen.style.display = 'block';
    // Reinitialize icons after showing workout screen

}

function showSelectionScreen() {
    workoutScreen.style.display = 'none';
    selectionScreen.style.display = 'block';
}

// Reset the app to selection state
function resetToSelection() {
    // Clear current selections
    state.selectedType = null;
    state.selectedTime = null;
    state.currentWorkout = null;

    // Reset UI selections
    updateWorkoutTypeButtons();
    updateTimeRangeButtons();
    updateGenerateButton();

    // Switch back to selection screen
    showSelectionScreen();
}

// Handle errors gracefully
window.addEventListener('error', function(event) {
    console.error('An error occurred:', event.error);
    alert('Something went wrong. Please try again.');
});

// Initialize the app
function initApp() {
    showSelectionScreen();
    updateGenerateButton();
}

// Start the application
initApp();