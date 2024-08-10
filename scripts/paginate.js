import data from '../_data/projects.json' assert { type: 'json' };

const getNextTripplet = (categoryProjects, currentTrippletNo) => {
    const nextTrippletStartingIndex = (currentTrippletNo + 1)*3    
    const getNextNo = Math.min(3, categoryProjects.length - (nextTrippletStartingIndex))
    return categoryProjects.slice(nextTrippletStartingIndex, nextTrippletStartingIndex + getNextNo - 1)
}

data.categories.forEach((category, index) => {
    const nextButton = document.getElementById(`nextButton-${category.id}`)

    nextButton.addEventListener('click', () => {
        const trippletContainer = nextButton.parentElement
        const currentTrippletNo = trippletContainer.id.split('-')[2]
        console.log({currentTrippletNo})
        const nextTripplet = getNextTripplet(category.projects, currentTrippletNo)

        for(let i=0; i < nextTripplet.length; i++) {
            const projectCard = document.getElementById(`project-card-${category.id}-${i+1}`) 
            const tdElements = projectCard.querySelectorAll('td');
            tdElements[0].textContent = nextTripplet[i].title
            tdElements[1].textContent = nextTripplet[i].description
            const span = document.createElement("span")
            const span1 = document.createElement("span")
            span.textContent = "test"
            span1.textContent = "test1"
            tdElements[2].replaceChildren(span, span1)
        }

        console.log(category.projects.length)
        console.log(currentTrippletNo)
        console.log((currentTrippletNo + 1)%category.projects.length)

        trippletContainer.id = `${category.id}-tripplet-${(currentTrippletNo + 1)%category.projects.length}`
    });
})

 