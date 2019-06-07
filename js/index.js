const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img"); // select element
logo.setAttribute('src', siteContent["nav"]["img-src"]) // update the JS content to take from siteContent object

// insert nav links
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, i) => {
  link.textContent = siteContent["nav"][`nav-item-${i+1}`]
  link.style.color = 'green';
});

// inset code snippet image

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// insert title
let ctaText = document.querySelector("h1");
// break string up into array
let ctaTextArray = siteContent["cta"]["h1"].split(" ");
// create <br> element
let lineBreak1 = document.createElement("br");
let lineBreak2 = document.createElement("br");
// insert <br> after array element at index 1 and 3
ctaText.append(ctaTextArray[0]);
ctaText.append(lineBreak1);
ctaText.append(ctaTextArray[1]);
ctaText.append(lineBreak2);
ctaText.append(ctaTextArray[2]);


// insert button text
const buttonText = document.querySelector('button');
buttonText.textContent = siteContent["cta"]["button"];

//insert main content
let mainHeaders = document.querySelectorAll('h4'); 
const mainPargs = document.querySelectorAll('.main-content p');
const middleImg = document.getElementById('middle-img');

// // make an array of main-content keys that incliude h4
// let mainHeadersArray = Array.from(Object.keys(siteContent["main-content"]).filter(key => key.includes("h4")));
// for(let i=0; i < mainHeaders.length; i++) {
//   mainHeaders[i].textContent = mainHeadersArray[i];
// }


mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainPargs[0].textContent = siteContent["main-content"]["features-content"];

mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainPargs[1].textContent = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

mainHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainPargs[2].textContent = siteContent["main-content"]["services-content"];

mainHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainPargs[3].textContent = siteContent["main-content"]["product-content"];


mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
mainPargs[4].textContent = siteContent["main-content"]["vision-content"];

// insert contact

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelectorAll('.contact p');

let addressArr = siteContent["contact"]["address"].split(' '); //apply split method on address string to create an array of strings stored in variable addressArr
addressArr.splice(3, 0, `<br>`); // use splice() on array to insert <br> at 3rd index and remove no items
let newAddressStr = addressArr.join(' '); //join() joins the elements of addressArr into a string newAddressStri

address[0].innerHTML = newAddressStr;
address[1].textContent = siteContent["contact"]["phone"];
address[2].textContent = siteContent["contact"]["email"];

//insert footer

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];

// Add two new items to navigation

const nav = document.querySelector('nav'); 
let newNavItem = document.createElement('a'); 
newNavItem.textContent = 'Home'; 
newNavItem.style.color = 'green';
newNavItem.href = '#';

let newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Another Idea';
newNavItem2.style.color = 'green';
newNavItem2.href = '#';


nav.prepend(newNavItem);
nav.appendChild(newNavItem2);














