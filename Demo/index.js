function switchTab(tabName) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(`page-${tabName}`).classList.add('active-page');
  document.getElementById(`btn-${tabName}`).classList.add('active');
}

const backgrounds = {
    city: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2071&auto=format&fit=crop',
    neon: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
};

function changeBg(type) {
    const playground = document.getElementById('playground');
    playground.style.backgroundImage = `url('${backgrounds[type]}')`;
    
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

const draggables = document.querySelectorAll('.draggable');
let activeItem = null;
let initialX, initialY, currentX, currentY;
let xOffset = 0, yOffset = 0;

draggables.forEach(item => {
  item.xOffset = 0;
  item.yOffset = 0;

  item.addEventListener('mousedown', dragStart);
  item.addEventListener('touchstart', dragStart, {passive: false});
});

const container = document.getElementById('playground');
container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag, {passive: false});
container.addEventListener('mouseup', dragEnd);
container.addEventListener('touchend', dragEnd);
container.addEventListener('mouseleave', dragEnd);

function dragStart(e) {
    activeItem = e.currentTarget;
            
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - activeItem.xOffset;
        initialY = e.touches[0].clientY - activeItem.yOffset;
    } else {
        initialX = e.clientX - activeItem.xOffset;
        initialY = e.clientY - activeItem.yOffset;
    }
}

function drag(e) {
    if (activeItem) {
        e.preventDefault();
    
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }
        activeItem.xOffset = currentX;
        activeItem.yOffset = currentY;
        setTranslate(currentX, currentY, activeItem);
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    activeItem = null;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

function resetPositions() {
    draggables.forEach(item => {
        item.style.transform = "translate3d(0, 0, 0)";
        item.xOffset = 0;
        item.yOffset = 0;
    });
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-mode');
            
  const icon = document.querySelector('#theme-toggle i');

  if (body.classList.contains('light-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
}