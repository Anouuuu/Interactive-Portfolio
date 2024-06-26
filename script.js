let ratings = {
    html: 0,
    css: 0,
    javascript: 0
};

function rateSkill(skill) {
    ratings[skill]++;
    const ratingElement = document.getElementById(`${skill}-rating`);
    ratingElement.innerText = `Rating: ${ratings[skill]}`;
    animateRating(ratingElement);
}

function animateRating(element) {
    element.style.transition = 'transform 0.3s';
    element.style.transform = 'scale(1.2)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}

function openModal(project) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (project === 'project1') {
        modalTitle.innerText = 'Project One';
        modalDescription.innerText = 'Detailed description of project one.';
    } else if (project === 'project2') {
        modalTitle.innerText = 'Project Two';
        modalDescription.innerText = 'Detailed description of project two.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}