function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}


function toggleGrow() {
    const plant = document.getElementById('plant');
    const leaf = document.getElementById('leaf');
    const butterfly = document.getElementById('butterfly');
    const butterfly1 = document.getElementById('butterfly1');

    plant.classList.toggle('grow');
    leaf.classList.toggle('grow');
    butterfly.classList.toggle('grow');
    butterfly1.classList.toggle('grow');
}


gsap.from('.hero-img', 1.2, {opacity:0, y:-250, delay:2.5})
gsap.from('h1', 1.2, {opacity:0, y:-150, delay:0.5})
gsap.from('p', 1.2, {opacity:0, y:150, delay:1})
gsap.from('.banner-link', 1.2, {opacity:0, x:-150, delay:1.5})
gsap.from('.video-btn', 1.2, {opacity:0, x:150, delay:1.5})