function createRaindrop() {
    const rainContainer = document.querySelector('.rain-container');

    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    raindrop.style.left = `${Math.random() * 100}vw`; 
    raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`;  
    raindrop.style.opacity = Math.random(); 

    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        rainContainer.removeChild(raindrop);
    }, 3000); 
}

function makeItRain() {
    setInterval(createRaindrop, 20);
}

makeItRain();