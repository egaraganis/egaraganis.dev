const projectsResponse = await fetch('../_data/projects.json');
const articlesResponse = await fetch('../_data/articles.json');

const projectsData = await projectsResponse.json();
const articlesData = await articlesResponse.json();

function createProjectContainer(project) {
    const anchor = document.createElement('a');
    anchor.href = project.code;
    anchor.className = 'project-container';
    anchor.target = '_blank';
    anchor.rel = 'noopener';

    const table = document.createElement('table');
    const rows = [
        { text: project.title, className: 'title-row' },
        { text: project.description, className: 'description-row' },
        {
            content: project.langs.map(lang => {
                const span = document.createElement('span');
                span.textContent = lang;
                return span;
            }),
            className: 'langs-row'
        }
    ];

    rows.forEach(row => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');

        if (row.content) {
            row.content.forEach(child => td.appendChild(child));
        } else {
            td.textContent = row.text;
        }

        tr.className = row.className;
        tr.appendChild(td);
        table.appendChild(tr);
    });

    anchor.appendChild(table);

    return anchor;
}

function createArticleContainer(article) {
    const anchor = document.createElement('a');
    anchor.href = article.link;
    anchor.className = 'article-presentation-card';
    anchor.target = '_blank';
    anchor.rel = 'noopener';

    const img = document.createElement('div');
    img.className = 'image-container';
    img.style.backgroundImage = `url(${article.img})`;
    img.style.backgroundColor = article.bgColor;

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
    `;

    anchor.appendChild(img);
    anchor.appendChild(contentDiv);
    return anchor;
}

function updateButtonVisibility(currentIndex, totalItems, backButton, nextButton) {
    backButton.classList.toggle('hide', currentIndex === 0);
    nextButton.classList.toggle('hide', currentIndex + 3 >= totalItems);
}

function updateContainer(container, elements, createElementFn, startIndex) {
    const triplet = elements.slice(startIndex, startIndex + 3);
    container.replaceChildren(...triplet.map(createElementFn));
}

function registerPaginationForElement(elementId, createElementFn, elements) {
    if (!elements || elements.length === 0) return;

    let currentIndex = 0;
    const container = document.querySelector(`#${elementId}-tripplet-3`);
    const backButton = document.getElementById(`backButton-${elementId}`);
    const nextButton = document.getElementById(`nextButton-${elementId}`);

    updateButtonVisibility(currentIndex, elements.length, backButton, nextButton);

    nextButton.addEventListener('click', () => {
        currentIndex += 3;
        updateContainer(container, elements, createElementFn, currentIndex);
        updateButtonVisibility(currentIndex, elements.length, backButton, nextButton);
        container.id = `${elementId}-tripplet-${currentIndex + 3}`;
    });

    backButton.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 3);
        updateContainer(container, elements, createElementFn, currentIndex);
        updateButtonVisibility(currentIndex, elements.length, backButton, nextButton);
        container.id = `${elementId}-tripplet-${currentIndex + 3}`;
    });
}

projectsData.categories.forEach(category =>
    registerPaginationForElement(category.id, createProjectContainer, category.projects)
);
registerPaginationForElement('articles', createArticleContainer, articlesData);
