const response = await fetch('../_data/projects.json');
const data = await response.json();

const getNextTripplet = (categoryProjects, currentTrippletNo) => {

    const nextTrippletStartingIndex = (currentTrippletNo + 1)*3

    console.log(nextTrippletStartingIndex)

    const getNextNo = Math.min(3, categoryProjects.length - (nextTrippletStartingIndex))

    console.log(nextTrippletStartingIndex + getNextNo)

    return categoryProjects.slice(nextTrippletStartingIndex, nextTrippletStartingIndex + getNextNo)
}

data.categories.forEach((category, index) => {
    const totalTriplets = Math.ceil(category.projects.length/3)
    console.log({totalTriplets})
    const nextButton = document.getElementById(`nextButton-${category.id}`)

    nextButton.addEventListener('click', () => {
        const regex = new RegExp(`^${category.id}-tripplet(-\\d+)?$`);

        const trippletContainer = [...document.querySelectorAll('[id]')].find(element => regex.test(element.id));
        const currentTrippletNo = parseInt(trippletContainer.id.split('-')[2])

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

        const nextTrippletId = (currentTrippletNo + 1)%category.projects.length > totalTriplets
            ? (currentTrippletNo + 1)%category.projects.length
            : 1

        console.log({nextTrippletId})
        console.log("------")

    

        trippletContainer.id = `${category.id}-tripplet-${(currentTrippletNo + 1)%category.projects.length}`
    });
})
