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
        const value = e.target.value;
        this.audio.volume = Math.pow(value, 2);
    }
}


// Initialize sound controllers and todo list when the page loads
document.addEventListener('DOMContentLoaded', () => {

    
    // Initialize sound controllers
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
if (aboutButton && popup) {
    aboutButton.addEventListener('click', () => {
        popup.style.display = 'flex'; 
    });
}

// Close popup when the close button (×) is clicked
if (closePopupButton && popup) {
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';  // Hide the popup
    });
}

// Close the popup if user clicks outside of the popup content
if (popup) {
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';  // Hide the popup
        }
    });
}