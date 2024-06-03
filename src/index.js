console.log(data)

// WRITE YOUR CODE BELOW!

const state = {
    dogs: data,
    selectedDogID: 1,
}

function createNavButton(dogs) {
    const navButton = document.createElement('li')
    navButton.classList.add('dogs-list__button')
    navButton.innerText = dogs.name

    navButton.addEventListener('click', () => {
        state.selectedDogID = dogs.id
        render()
    })

    return navButton
}

function createNaughtyButton(dog) {
    const naughtyButton = document.createElement('button')
    naughtyButton.innerText = 'Good dog!'

    naughtyButton.addEventListener('click', () => {
        if (dog.isGoodDog) {
            dog.isGoodDog = false
        } else {
            dog.isGoodDog = true
        }
        render()
    })

    return naughtyButton
}

function render() {
    const card = document.querySelector('.main__dog-section')

    card.innerHTML = ''

    const selectedDog = state.dogs.find((dog) => dog.id == state.selectedDogID)

    const header = document.createElement('h2')
    header.innerText = selectedDog.name
    card.appendChild(header)

    const image = document.createElement('img')
    image.src = selectedDog.image
    card.appendChild(image)

    const bioContainer = document.createElement('div')
    bioContainer.classList.add('main__dog-section__desc')

    const bioHeader = document.createElement('h3')
    bioHeader.innerText = 'Bio'
    bioContainer.appendChild(bioHeader)

    const bioText = document.createElement('p')
    bioText.innerText = selectedDog.bio
    bioContainer.appendChild(bioText)
    card.appendChild(bioContainer)

    const naughtyText = document.createElement('p')
    naughtyText.innerHTML = `<em>Is naughty?</em>
        ${selectedDog.isGoodDog ? 'no' : 'yes'}`
    card.appendChild(naughtyText)
    card.appendChild(createNaughtyButton(selectedDog))
}

document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < state.dogs.length; i++) {
        const headerUL = document.querySelector('ul')
        headerUL.appendChild(createNavButton(state.dogs[i]))
    }
    render()
})
