const projectsResponse = await fetch('../data/projects.json')
const articlesResponse = await fetch('../data/articles.json')

const projectsData = await projectsResponse.json()
const articlesData = await articlesResponse.json()

function createProjectContainer(project) {
    const container = document.createElement('div')
    container.className = 'project-container'

    const table = document.createElement('table')

    const titleRow = document.createElement('tr')
    const titleCell = document.createElement('td')
    titleCell.textContent = project.title
    titleRow.appendChild(titleCell)
    table.appendChild(titleRow)

    const descriptionRow = document.createElement('tr')
    const descriptionCell = document.createElement('td')
    descriptionCell.textContent = project.description
    descriptionRow.appendChild(descriptionCell)
    table.appendChild(descriptionRow)

    const langsRow = document.createElement('tr')
    const langsCell = document.createElement('td')

    project.langs.forEach(lang => {
        const langSpan = document.createElement('span')
        langSpan.textContent = lang
        langsCell.appendChild(langSpan)
    })

    langsRow.appendChild(langsCell)
    table.appendChild(langsRow)

    container.appendChild(table)

    return container
}

function createArticleContainer(article) {
    const anchor = document.createElement('a')
    anchor.href = article.link
    anchor.classList.add('article-presentation-card')
    anchor.target = '_blank'

    const img = document.createElement('div')
    img.classList.add('image-container')
    img.style.backgroundImage = `url(${article.img})`
    img.style.backgroundColor = article.bgColor

    const contentDiv = document.createElement('div')

    const title = document.createElement('h3')
    title.textContent = article.title

    const description = document.createElement('p')
    description.textContent = article.description

    contentDiv.appendChild(title)
    contentDiv.appendChild(description)

    anchor.appendChild(img)
    anchor.appendChild(contentDiv)

    return anchor
}

function registerPaginationForElement(elementId, elementCreator, elements) {
    const regex = new RegExp(`^${elementId}-tripplet(-\\d+)?$`)
    const noElements = elements.length

    const backButton = document.getElementById(`backButton-${elementId}`)
    const nextButton = document.getElementById(`nextButton-${elementId}`)

    if (noElements === 3) nextButton.classList.add('hide')

    nextButton.addEventListener('click', () => {
        backButton.classList.remove('hide')

        const trippletContainer = [...document.querySelectorAll('[id]')].find(element => regex.test(element.id))
        const currentLastElementSliceIndex = parseInt(trippletContainer.id.split('-')[2])
        const remainingProjects = noElements - currentLastElementSliceIndex

        const nextTripplet = remainingProjects > 3
            ? elements.slice(currentLastElementSliceIndex, currentLastElementSliceIndex + 3)
            : elements.slice(currentLastElementSliceIndex, currentLastElementSliceIndex + (noElements - currentLastElementSliceIndex))

        const nextElements = nextTripplet.map(element => elementCreator(element))

        trippletContainer.replaceChildren(...nextElements)

        if (remainingProjects > 3)
            trippletContainer.id = `${elementId}-tripplet-${currentLastElementSliceIndex + 3}`
        else {
            nextButton.classList.add('hide')
            trippletContainer.id = `${elementId}-tripplet-${currentLastElementSliceIndex + (noElements - currentLastElementSliceIndex)}`
        }
    })

    backButton.addEventListener('click', () => {

        const trippletContainer = [...document.querySelectorAll('[id]')].find(element => regex.test(element.id))
        const currentLastElementSliceIndex = parseInt(trippletContainer.id.split('-')[2])

        var nextTripplet

        if(currentLastElementSliceIndex === noElements) {
            if(currentLastElementSliceIndex === 6) {
                nextTripplet = elements.slice(0, 3)
                trippletContainer.id = `${elementId}-tripplet-3`
                backButton.classList.add('hide')
                nextButton.classList.remove('hide')
            }
            else {
                nextButton.classList.remove('hide')
                const noTripplets = Math.floor(noElements/3)
                const lastPageNoCards = noElements - (noTripplets*3)
                const newLastProjectsSliceIndex = noElements - lastPageNoCards
                nextTripplet = elements.slice(newLastProjectsSliceIndex - 3, newLastProjectsSliceIndex)
                trippletContainer.id = `${elementId}-tripplet-${newLastProjectsSliceIndex}`

                if (currentLastElementSliceIndex < 6) {
                    backButton.classList.add('hide')
                }
            }
        }
        else {
            if(currentLastElementSliceIndex === 6) {
                nextTripplet = elements.slice(0, 3)
                trippletContainer.id = `${elementId}-tripplet-3`
                backButton.classList.add('hide')
            }
            else {
                nextTripplet = elements.slice(currentLastElementSliceIndex - 3, currentLastElementSliceIndex)
                trippletContainer.id = `${elementId}-tripplet-${currentLastElementSliceIndex - 3}`
            }
        }

        const prevCards = nextTripplet.map(project => elementCreator(project))
        trippletContainer.replaceChildren(...prevCards)
    })
}

projectsData.categories.forEach(category => registerPaginationForElement(category.id, createProjectContainer, category.projects))
registerPaginationForElement("articles", createArticleContainer, articlesData)
