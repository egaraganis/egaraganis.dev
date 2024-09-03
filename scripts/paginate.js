const response = await fetch('../_data/projects.json')
const data = await response.json()

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

data.categories.forEach((category, index) => {

    const regex = new RegExp(`^${category.id}-tripplet(-\\d+)?$`)
    const noProjects = category.projects.length

    const backButton = document.getElementById(`backButton-${category.id}`)
    const nextButton = document.getElementById(`nextButton-${category.id}`)

    if(noProjects === 3) nextButton.classList.add('hide')

    nextButton.addEventListener('click', () => {

        backButton.classList.remove('hide')

        const trippletContainer = [...document.querySelectorAll('[id]')].find(element => regex.test(element.id))
        const currentLastProjectSliceIndex = parseInt(trippletContainer.id.split('-')[2])
        const remainingProjects = noProjects - currentLastProjectSliceIndex

        const nextTripplet = remainingProjects > 3
            ? category.projects.slice(currentLastProjectSliceIndex, currentLastProjectSliceIndex + 3)
            : category.projects.slice(currentLastProjectSliceIndex, currentLastProjectSliceIndex + (noProjects - currentLastProjectSliceIndex) + 1)

        const nextCards = nextTripplet.map(project => createProjectContainer(project))

        trippletContainer.replaceChildren(...nextCards)

        if(remainingProjects > 3)
            trippletContainer.id = `${category.id}-tripplet-${currentLastProjectSliceIndex + 3}`
        else {
            nextButton.classList.add('hide')
            trippletContainer.id = `${category.id}-tripplet-${(noProjects - remainingProjects) + 1}`
        }
    })

    backButton.addEventListener('click', () => {

        const trippletContainer = [...document.querySelectorAll('[id]')].find(element => regex.test(element.id))
        const currentLastProjectSliceIndex = parseInt(trippletContainer.id.split('-')[2])

        var nextTripplet

        if(currentLastProjectSliceIndex === noProjects) {
            nextButton.classList.remove('hide')
            const noTripplets = Math.floor(noProjects/3)
            const lastPageNoCards = noProjects - (noTripplets*3)
            const newLastProjectsSliceIndex = noProjects - lastPageNoCards
            nextTripplet = category.projects.slice(newLastProjectsSliceIndex - 3, newLastProjectsSliceIndex)
            trippletContainer.id = `${category.id}-tripplet-${newLastProjectsSliceIndex}`
        }
        else {
            if(currentLastProjectSliceIndex === 6) {
                nextTripplet = category.projects.slice(0, 3)
                trippletContainer.id = `${category.id}-tripplet-3`
                backButton.classList.add('hide')
            }
            else {
                nextTripplet = category.projects.slice(currentLastProjectSliceIndex - 3, currentLastProjectSliceIndex)
                trippletContainer.id = `${category.id}-tripplet-${currentLastProjectSliceIndex - 3}`
            }
        }

        const prevCards = nextTripplet.map(project => createProjectContainer(project))
        trippletContainer.replaceChildren(...prevCards)
    })

})
