const glowingIconsContainer = document.querySelector(".glowing-icons");

function createGlowingIcon() {
    const icon = document.createElement("img");
    icon.src = "Icon-Only-Color.png";
    icon.classList.add("favicon-glow");
    
    // Random position
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    icon.style.left = `${randomX}%`;
    icon.style.top = `${randomY}%`;
    
    glowingIconsContainer.appendChild(icon);
    
    // Remove after animation completes
    setTimeout(() => {
        glowingIconsContainer.removeChild(icon);
    }, 4000);
}

// Create new glowing icons periodically
setInterval(createGlowingIcon, 1000);