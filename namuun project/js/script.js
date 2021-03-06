// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount


// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener


function scrollDetect(e) {
    let header = document.getElementById("header");
    let nav = document.querySelector("nav")
    let headerHeight = header.offsetHeight;
    let scrollPx = e.target.scrollingElement.scrollTop;
    
    if(scrollPx > headerHeight){
        nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
}
window.addEventListener('scroll', scrollDetect)

// Define Play button variable
// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request
// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code


// var button = document.getElementById("btn")
// var url = document.getElementById("#youtubeVideo").attr('src')
// var videoURL = document.getElementById("#youtubeVideo")

// var finsetModal = new bootstrap.Modal(document.getElementById("myModal"), {
//     keyboard: true
// })

// button.addEventListener('click', finsetModal.show())


// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

const promise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(this.responseText)
            return resolve(xhr.responseText)
        } else {
            console.log("Failed")
        }
    }
    xhr.open('GET', '../data/company_intro.json');
    xhr.send()
})

promise.then((data) => {
    var data = JSON.parse(data);
    const company_intro = data.data;
    company_intro.map((i) => {
        document.getElementById("section1-1").innerHTML += 
        `<div class="col-12 col-md-4">
        <img style="border-radius: 15px;" src="${i.thumbnail}" alt="post1">
        <h3>${i.title}</h3>
        <p>${i.content}</p>
        <a style="color: #f58a07;" href="#">Learn More???</a>
        </div>`
    })
})

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 
