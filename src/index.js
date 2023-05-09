// write your code here

//## Core Deliverables

//As a user, I can:

/*- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.*/


 //GET request (FETCH function): 
fetch ('http://localhost:3000/ramens')
    .then ((resp) =>resp.json())

    //forEach:
    .then ((ramenObjects) => {
        ramenObjects.forEach (ramenObject => renderRamenMenuItem(ramenObject))

        //regular for loop: (can be used insead of the .then((ramenObjects)))
        /*for (let i=0; i< ramenObjects.length; i++) {
            renderRamenMenuItem(ramenObjects[i])
        }*/


        selectRamen(ramenObjects[0]) 
        //to reset the picture to the first image when page is refreshed; it's 
        //ramenObjects (plural) because we are pulling a particular item from the array
    })

function renderRamenMenuItem(ramen) {
    const newImg = document.createElement('img')
    newImg.src = ramen.image

    newImg.addEventListener('click', () => selectRamen(ramen))

    document.querySelector('#ramen-menu').appendChild(newImg)
}


/*- Click on an image from the `#ramen-menu` div and see all the info about that
  ramen displayed inside the `#ramen-detail` div and where it says
  `insert comment here` and `insert rating here`.*/



function selectRamen(ramen){
    const img = document.querySelector('.detail-image')
    img.src = ramen.image

    const name = document.querySelector('.name')
    name.textContent = ramen.name

    const restaurant = document.querySelector('.restaurant')
    restaurant.textContent = ramen.restaurant

    const rating = document.querySelector('#rating-display')
    rating.textContent = ramen.rating

    const comment =document.querySelector('#comment-display')
    comment.textContent = ramen.comment
}







/*- Create a new ramen after submitting the `new-ramen` form. The new ramen should
  be added to the`#ramen-menu` div. The new ramen does not need to persist; in
  other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page.*/



const form = document.querySelector('#new-ramen')

form.addEventListener('submit',(event) => handleSubmit(event))

function handleSubmit(event) {
    event.preventDefault()

    const ramenObject = {
        "name": event.target.name.value,
        "restaurant": event.target.restaurant.value,
        "image": event.target.image.value,
        "rating": event.target.rating.value,
        "comment": event.target["new-comment"].value //have to but name in bracket due to the dash
    }
    renderRamenMenuItem(ramenObject)

    selectRamen(ramenObject)
//to refresh form
    event.target.reset()
    //OR use: form.reset()
}




/*- See the details for the first ramen as soon as the page loads (without
    clicking on an image)
  - Update the rating and comment for a ramen by submitting a form. Changes should
    be reflected on the frontend. No need to persist. You can add this HTML to the
    `index.html` file to create the edit form:*/























//WHAT I WROTE IS BELOW:


/*
fetch ("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((ramens) => {
        ramens.forEach(ramens => renderRamen ())
    })

let fulllMenu = document.createElement ('navbar')


function renderRamen (ramens) {
let ramenDetails = console.log(ramens)
}

let allImages = document.querySelectorAll('div#ramen-menu')
allImages.src = '/assets/image-placeholder.jpg'
















const form = document.querySelector('form')
function handleSubmit(e) {
    e.preventDefault();
    let name = document.querySelector('#new-name').value
    let restaurant = document.querySelector('#new-restaurant').value
    let image = document.querySelector('#new-image').value
    let rating= document.querySelector('#new-rating').value
    let comment = document.querySelector('#new-comment').value


console.log(name)
console.log(restaurant)
console.log(image)
console.log(rating)
console.log(comment)
}
form.addEventListener ('submit', handleSubmit)
*/