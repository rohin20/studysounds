class SoundController {
    constructor(audioSrc, buttonId, volumeId) {
        this.audio = new Audio(audioSrc);
        this.audio.loop = true;
        this.button = document.getElementById(buttonId);
        this.volume = document.getElementById(volumeId);
        this.isPlaying = false;

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.button.addEventListener('click', () => this.togglePlay());
        this.volume.addEventListener('input', (e) => this.updateVolume(e));
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.button.textContent = '▶';
        } else {
            this.audio.currentTime = Math.random() * this.audio.duration;
            this.audio.play();
            this.button.textContent = '⏸';
        }
        this.isPlaying = !this.isPlaying;
    }

    updateVolume(e) {
        this.audio.volume = e.target.value;
        this.audio.volume = Math.pow(value, 2);
    }
}

class TodoList {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addButton = document.getElementById('addTask');
        this.pendingList = document.getElementById('pendingTasks');
        this.completedList = document.getElementById('completedTasks');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.addButton.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }

    addTask() {
        const text = this.taskInput.value.trim();
        if (!text) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button class="complete">✓</button>
            <button class="delete">×</button>
        `;

        li.querySelector('.complete').addEventListener('click', () => li.remove());
        li.querySelector('.delete').addEventListener('click', () => li.remove());

        this.pendingList.appendChild(li);
        this.taskInput.value = '';
    }

    completeTask(li) {
        const completedLi = li.cloneNode(true);
        completedLi.querySelector('.complete').remove();
        completedLi.querySelector('.delete').addEventListener('click', () => completedLi.remove());
        this.completedList.appendChild(completedLi);
        li.remove();
    }
}

// Initialize sound controllers when the page loads
document.addEventListener('DOMContentLoaded', () => {

    new TodoList();

    const rainSound = new SoundController(
        'sounds/rain_noise.mp3',
        'rainButton',
        'rainVolume'
    );

    const brownSound = new SoundController(
        'sounds/brown_noise.mp3',
        'brownButton',
        'brownVolume'
    );
    const lofiSound = new SoundController(
        'sounds/lofi.mp3',
        'lofiButton',
        'lofiVolume'
    );

    const jazzSound = new SoundController(
        'sounds/jazz.mp3',
        'jazzButton',
        'jazzVolume'
    );
    const fireSound = new SoundController(
        'sounds/fireplace.mp3',
        'fireButton',
        'fireVolume'
    );
});

const aboutButton = document.querySelector('.about-button');
const popup = document.getElementById('aboutPopup');
const closePopupButton = document.getElementById('closePopup');

// Show popup when the about button is clicked
aboutButton.addEventListener('click', () => {
    popup.style.display = 'flex';  // Show the popup
});

// Close popup when the close button (×) is clicked
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';  // Hide the popup
});

// Close the popup if user clicks outside of the popup content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';  // Hide the popup
    }
});
