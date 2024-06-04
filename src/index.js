console.log(data)

// WRITE YOUR CODE BELOW!

const state = {
    dogs: data,
    selectedDogID: 1,
    isEditing: false,
}

// Create the buttons on the top of the page
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

// Add logic to the + button
function createAddButton() {
    const createButton = document.querySelector('.dogs-list__button--add')
    createButton.addEventListener('click', () => {
        state.selectedDogID = 0
        render()
    })
}

// Create the form including the logic
function createForm(card) {
    // Create the elements
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
    nameInput.required = true
    form.appendChild(nameInput)

    const breedLabel = document.createElement('label')
    breedLabel.setAttribute('for', 'breed')
    breedLabel.innerText = "Dog's breed"
    form.appendChild(breedLabel)

    const breedInput = document.createElement('input')
    breedInput.setAttribute('type', 'text')
    breedInput.setAttribute('id', 'breed')
    breedInput.setAttribute('name', 'breed')
    breedInput.required = true
    form.appendChild(breedInput)

    const ageLabel = document.createElement('label')
    ageLabel.setAttribute('for', 'age')
    ageLabel.innerText = "Dog's age"
    form.appendChild(ageLabel)

    const ageInput = document.createElement('input')
    ageInput.setAttribute('type', 'number')
    ageInput.setAttribute('id', 'age')
    ageInput.setAttribute('name', 'age')
    ageInput.required = true
    form.appendChild(ageInput)

    const imageLabel = document.createElement('label')
    imageLabel.setAttribute('for', 'image')
    imageLabel.innerText = "Dog's picture"
    form.appendChild(imageLabel)

    const imageInput = document.createElement('input')
    imageInput.setAttribute('type', 'url')
    imageInput.setAttribute('id', 'image')
    imageInput.setAttribute('name', 'image')
    imageInput.required = true
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

    const goodDogLabel = document.createElement('label')
    goodDogLabel.setAttribute('for', 'goodDog')
    goodDogLabel.innerText = 'Is s/he a good dog?'
    form.appendChild(goodDogLabel)

    const goodDogInput = document.createElement('input')
    goodDogInput.setAttribute('type', 'checkbox')
    goodDogInput.setAttribute('checked', 'checked')
    goodDogInput.setAttribute('id', 'goodDog')
    goodDogInput.setAttribute('name', 'goodDog')
    form.appendChild(goodDogInput)

    const submitButton = document.createElement('input')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('id', 'submit')
    submitButton.setAttribute('name', 'submit')
    submitButton.setAttribute('value', "Let's add a dog!")
    submitButton.classList.add('form__button')
    form.appendChild(submitButton)

    card.appendChild(form)

    // Add submit action
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const newDogData = new FormData(form)
        // Fetch the data from the form and create a new object
        const newDog = {
            id: state.dogs.length + 1,
            name: newDogData.get('name'),
            breed: newDogData.get('breed'),
            age: newDogData.get('age'),
            image: newDogData.get('image'),
            bio: newDogData.get('bio'),
            isGoodDog: newDogData.get('goodDog'),
        }
        // Add the new dog as the first element in the dogs array
        state.dogs.unshift(newDog)
        console.log(state.dogs)
        // Show the user the dog that was just created
        state.selectedDogID = newDog.id
        // Render both the buttons and the displayed card
        loadEntirePage()
    })
}

function editForm(card, dog) {
    // Create the elements
    const header = document.createElement('h2')
    header.innerText = `Edit ${dog.name}`
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
    nameInput.value = dog.name
    form.appendChild(nameInput)

    const breedLabel = document.createElement('label')
    breedLabel.setAttribute('for', 'breed')
    breedLabel.innerText = "Dog's breed"
    form.appendChild(breedLabel)

    const breedInput = document.createElement('input')
    breedInput.setAttribute('type', 'text')
    breedInput.setAttribute('id', 'breed')
    breedInput.setAttribute('name', 'breed')
    breedInput.value = dog.breed
    form.appendChild(breedInput)

    const ageLabel = document.createElement('label')
    ageLabel.setAttribute('for', 'age')
    ageLabel.innerText = "Dog's age"
    form.appendChild(ageLabel)

    const ageInput = document.createElement('input')
    ageInput.setAttribute('type', 'number')
    ageInput.setAttribute('id', 'age')
    ageInput.setAttribute('name', 'age')
    ageInput.value = dog.age
    form.appendChild(ageInput)

    const imageLabel = document.createElement('label')
    imageLabel.setAttribute('for', 'image')
    imageLabel.innerText = "Dog's picture"
    form.appendChild(imageLabel)

    const imageInput = document.createElement('input')
    imageInput.setAttribute('type', 'url')
    imageInput.setAttribute('id', 'image')
    imageInput.setAttribute('name', 'image')
    imageInput.value = dog.image
    form.appendChild(imageInput)

    const bioLabel = document.createElement('label')
    bioLabel.setAttribute('for', 'bio')
    bioLabel.innerText = "Dog's bio"
    form.appendChild(bioLabel)

    const bioInput = document.createElement('textarea')
    bioInput.setAttribute('rows', '5')
    bioInput.setAttribute('id', 'bio')
    bioInput.setAttribute('name', 'bio')
    bioInput.value = dog.bio
    form.appendChild(bioInput)

    const goodDogLabel = document.createElement('label')
    goodDogLabel.setAttribute('for', 'goodDog')
    goodDogLabel.innerText = 'Is s/he a good dog?'
    form.appendChild(goodDogLabel)

    const goodDogInput = document.createElement('input')
    goodDogInput.setAttribute('type', 'checkbox')
    goodDogInput.setAttribute('checked', 'checked')
    goodDogInput.setAttribute('id', 'goodDog')
    goodDogInput.setAttribute('name', 'goodDog')
    form.appendChild(goodDogInput)

    const submitButton = document.createElement('input')
    submitButton.setAttribute('type', 'submit')
    submitButton.setAttribute('id', 'submit')
    submitButton.setAttribute('name', 'submit')
    submitButton.setAttribute('value', 'Save changes')
    submitButton.classList.add('form__button')
    form.appendChild(submitButton)

    card.appendChild(form)

    // Add submit action
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const newDogData = new FormData(form)
        // Fetch the data from the form and create a new object
        dog.name = newDogData.get('name')
        dog.breed = newDogData.get('breed')
        dog.age = newDogData.get('age')
        dog.image = newDogData.get('image')
        dog.bio = newDogData.get('bio')
        dog.isGoodDog = newDogData.get('goodDog')
        console.log(newDogData.get('goodDog'))
        state.isEditing = false
        loadEntirePage()
    })
}

// This was factored out of render()
function dogBio(dog) {
    const bioContainer = document.createElement('div')
    bioContainer.classList.add('main__dog-section__desc')

    const bioHeader = document.createElement('h3')
    bioHeader.innerText = 'Bio'
    bioContainer.appendChild(bioHeader)

    const bioContent = document.createElement('p')
    bioContent.innerText = dog.bio
    bioContainer.appendChild(bioContent)

    return bioContainer
}

// This was factored out of render()
function naughtyText(dog) {
    const naughtyTextContainer = document.createElement('div')

    const naughtyText = document.createElement('p')
    naughtyText.innerHTML = `
        <em>Is naughty?</em>
        ${dog.isGoodDog ? 'no' : 'yes'}`

    const naughtyButton = document.createElement('button')
    // Set the text to change depending on the boolean value
    // of dog.isGoodDog, displaying the corresponding text
    naughtyButton.innerText = `${dog.isGoodDog ? 'Bad dog!' : 'Good dog!'}`

    // Add logic to change the text and button text
    // to the opposite value
    naughtyButton.addEventListener('click', () => {
        if (dog.isGoodDog) {
            dog.isGoodDog = false
        } else {
            dog.isGoodDog = true
        }
        // Render the card to update the innterText
        render()
    })

    naughtyTextContainer.appendChild(naughtyText)
    naughtyTextContainer.appendChild(naughtyButton)
    return naughtyTextContainer
}

function render() {
    const card = document.querySelector('.main__dog-section')

    // Clear out the HTML of the main section
    card.innerHTML = ''

    // If the + button is selected show the form
    if (state.selectedDogID === 0) {
        createForm(card)
        return
    }

    // Match the selected ID (button) with the corresponding element in the array
    const selectedDog = state.dogs.find((dog) => dog.id == state.selectedDogID)

    if (state.isEditing) {
        editForm(card, selectedDog)
        return
    }

    // Create the elements needed
    const dogName = document.createElement('h2')
    dogName.innerText = selectedDog.name

    const dogImage = document.createElement('img')
    dogImage.src = selectedDog.image

    const dogInfo = document.createElement('p')
    dogInfo.innerHTML = `
        ${selectedDog.breed} | Age: ${selectedDog.age}
    `

    const editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.classList.add('edit--button')
    editButton.addEventListener('click', () => {
        state.isEditing = true
        render()
    })

    // Append the elements to the card
    card.appendChild(dogName)
    card.appendChild(dogImage)
    card.appendChild(dogInfo)
    card.appendChild(dogBio(selectedDog))
    card.appendChild(naughtyText(selectedDog))
    card.appendChild(editButton)
}

function loadEntirePage() {
    // Reset the list with buttons to the default state
    const navButtonList = document.querySelector('.dogs-list')
    navButtonList.innerHTML = `
        <li class="dogs-list__button dogs-list__button--add">+</li>
    `

    // Loop through all the entries and display the buttons
    for (i = 0; i < state.dogs.length; i++) {
        const headerUL = document.querySelector('ul')
        headerUL.appendChild(createNavButton(state.dogs[i]))
    }

    // Add logic to + button
    createAddButton()
    // Load the cards
    render()
}

// Load all the content on page load
document.addEventListener('DOMContentLoaded', () => {
    loadEntirePage()
})
