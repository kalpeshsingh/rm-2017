const mainContainer = document.querySelector('.main-container');

const getCard = function(data) {
    return `<div class="card">
        <div class="card__header js-team">${data.team}</div>
        <div class="card__body">
            <div class="card__title js-name">Kalpesh Singh</div>
            <div class="card__subtitle js-designation">Software engineer</div>
        </div>
    </div>`;
}

const traverseHierarchy = function(data) {
    let row  = '';
    let container = '';
    row = document.createElement('div');
    container = document.createElement('div');
    row.className = `row`;
    container.className = `container`;
    row.appendChild(container);
    data.forEach(function(node, idx) {
        let hasChildren = '';
        if(node.children) {
            hasChildren = 'has-children';
         }
        container.innerHTML += `<div class="${hasChildren} col">${getCard(node)}</div>`;
        mainContainer.appendChild(row);
    });
    data.forEach(function(node, idx) {
        if(node && node.children) {
            traverseHierarchy(node.children);
        }
    });
}

traverseHierarchy(teamHierarchy);


const cards = document.querySelectorAll('li');

const toggleLevelCards = function(id) {
    if(id == 0) {
        id = 1;
    }
    const cards = document.querySelectorAll(`[data-parent="${id}"]`);
    cards.forEach(function(card, idx) {
        card.classList.toggle('is-visible');
    });
}

cards.forEach(function(card, idx) {
    card.addEventListener('click', function() {
        const id = this.dataset.parent;
        if(id) {
            //this.querySelector('.card__header').classList.toggle('is-active');
            toggleLevelCards(id);
        }
    });
});