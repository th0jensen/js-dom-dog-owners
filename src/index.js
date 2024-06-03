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
    naughtyButton.innerText = `${dog.isGoodDog ? 'Bad dog!' : 'Good dog!'}`

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

function createAddButton() {
    const createButton = document.querySelector('.dogs-list__button--add')
    createButton.addEventListener('click', () => {
        state.selectedDogID = 0
        console.log(state.selectedDogID)
        render()
    })
}

function render() {
    const card = document.querySelector('.main__dog-section')

    card.innerHTML = ''

    if (state.selectedDogID === 0) {
        console.log('Create a new dog entry')

        const header = document.createElement('h2')
        header.innerText = 'Add a new dog'
        card.appendChild(header)

        const form = document.createElement('form')
        form.classList.add('form')

        const nameLabel = document.createElement('label')
        nameLabel.setAttribute('for', 'name')
        nameLabel.innerText = "Dog's name"
        form.appendChild(nameLabel)

        const nameInput = document.createElement('input')
        nameInput.setAttribute('type', 'text')
        nameInput.setAttribute('id', 'name')
        nameInput.setAttribute('name', 'name')
        form.appendChild(nameInput)

        const imageLabel = document.createElement('label')
        imageLabel.setAttribute('for', 'image')
        imageLabel.innerText = "Dog's picture"
        form.appendChild(imageLabel)

        const imageInput = document.createElement('input')
        imageInput.setAttribute('type', 'url')
        imageInput.setAttribute('id', 'image')
        imageInput.setAttribute('name', 'image')
        form.appendChild(imageInput)

        const bioLabel = document.createElement('label')
        bioLabel.setAttribute('for', 'bio')
        bioLabel.innerText = "Dog's bio"
        form.appendChild(bioLabel)

        const bioInput = document.createElement('textarea')
        bioInput.setAttribute('rows', '5')
        bioInput.setAttribute('id', 'bio')
        bioInput.setAttribute('name', 'bio')
        form.appendChild(bioInput)

        const submitButton = document.createElement('input')
        submitButton.setAttribute('type', 'submit')
        submitButton.setAttribute('id', 'submit')
        submitButton.setAttribute('name', 'submit')
        submitButton.setAttribute('value', "Let's add a dog!")
        submitButton.classList.add('form__button')
        form.appendChild(submitButton)

        card.appendChild(form)
        return
    }

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
    naughtyText.innerHTML = `
        <em>Is naughty?</em>
        ${selectedDog.isGoodDog ? 'no' : 'yes'}`
    card.appendChild(naughtyText)
    card.appendChild(createNaughtyButton(selectedDog))
}

document.addEventListener('DOMContentLoaded', () => {
    for (i = 0; i < state.dogs.length; i++) {
        const headerUL = document.querySelector('ul')
        headerUL.appendChild(createNavButton(state.dogs[i]))
    }
    createAddButton()
    render()
})
