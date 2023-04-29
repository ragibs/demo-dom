// ⭐ DOM stands for Document Object Model.
// ➡️ DOCUMENT - HTML File
// ➡️ OBJECTS - Elements in the HTML file
// ➡️ MODEL - Layout Structure

// DOM ➡️:
// 💡 Represents the content of HTML document as a tree structure
// 💡 Can easily read, access and update the content of the document

//Example of how the DOM Tree should look like https://software.hixie.ch/utilities/js/live-dom-viewer/#

// WHY USE DOM 🧐
// 💡 With the DOM, developers can create dynamic, interactive web pages that respond to user input without needing to reload the entire page.
// 💡 Manipulating web page content: The DOM allows developers to add, remove, or modify HTML elements and their attributes, styles, and content. This means that web pages can be updated on-the-fly in response to user actions or other events.

// ⭐ DOM manipulation⭐ refers to the process of changing or modifying the content and structure of a web page using the Document Object Model (DOM). This can involve adding, removing, or modifying HTML elements, attributes, styles, and content on the page, as well as handling user events such as mouse clicks and key presses.

// ⛰️ Accesing exsisting HTML Elements with DOM methods

// ⭐ getElementById - This method allows you to retrieve an HTML element by its ID attribute.

let mainElementHeader = document.getElementById("main__header");
// console.log(mainElementHeader);

// 💡 getElementById returns a single element that matches the specified ID

// ⭐ getElementsByClassName This method allows you to retrieve a collection of HTML elements by their class name.

let textElement = document.getElementsByClassName("main__text");
// console.log(textElement);

// 💡 getElementsByClassName returns a collection of HTML elements that have a specified class name

// ⭐ getElementsByTagName - This method allows you to retrieve a collection of HTML elements by their tag name.

let allParagraphs = document.getElementsByTagName("p");
// console.log(allParagraphs);

// ⭐ querySelector: retrieves the first element that matches a specified CSS selector.

let mainElement1 = document.querySelector("main");
let mainElement2 = document.querySelector("#main");
let mainElement3 = document.querySelector(".main");
let textElement1 = document.querySelector(".main__text"); // only the first element will show up
// console.log(mainElement1, mainElement2, mainElement3, textElement1);

// ⭐ querySelectorAll: retrieves a collection of elements that match a specified CSS selector.

let textElementAll = document.querySelectorAll(".main__text"); // only the first element will show up
// console.log(textElementAll);

// Some other DOM methods
// getElementsByName: retrieves a collection of elements with a specified name attribute.
// getElementsByAttribute: retrieves a collection of elements that have a specified attribute.

// ⭐ element.innerText is a property of the DOM API that represents the text content of an HTML element.

let mainElementText = mainElementHeader.innerText;
// console.log(mainElementText);

// ⭐ element.innerHTML: Gets or sets the HTML content of an element.

let mainElement1HTML = mainElement1.innerHTML;
// console.log(mainElement1HTML);

// ⭐ element.classList.add/remove/toggle: Adds, removes, or toggles a CSS class on an element's class list.
let toggleElement = document.querySelector(".main__text2");
// console.log(toggleElement.classList);
// toggleElement.classList.add("main__text3");
// toggleElement.classList.remove("main__text3");

// ⭐ element.getAttribute/setAttribute: Gets or sets the value of a specified attribute on an element.

let image = document.querySelector(".main__img");
// console.log(image.getAttribute("src"));
let link = document.querySelector("#main__link");
// console.log(link.getAttribute("href"));

// image.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
// );

// ⛰️ Create new HTML Elements with DOM methods
// 💡 Create a new element using the document.createElement() method, passing in the tag name of the element you want to create as an argument.
let newImage = document.createElement("img");

// 💡 Set any attributes you want the new element to have using the element.setAttribute() method.

newImage.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1bm55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);
newImage.setAttribute("class", "main__img");

// 💡 Insert the new element into the DOM using one of the various methods available, such as appendChild(), insertBefore(), replaceChild(), etc. For example, to add the new paragraph element to the end of the document body,
// parent.appendChild(child);

let mainElement = document.querySelector(".main");
mainElement.appendChild(newImage);

// ⛰️ Remove an HTML Elements with DOM methods

// newImage.remove();

// _______________________________________________________________________________________

//⭐JavaScript events are actions or occurrences that happen in the browser, such as a user clicking on a button, hovering over an element, or typing on a keyboard. These events can be detected by the browser and used to trigger JavaScript code.

// Here are some common types of events:
// ➡️ Click: Fired when a user clicks on an element.
// ➡️ Mouseover: Fired when a user moves their mouse over an element.
// ➡️ Keydown: Fired when a user presses a key on their keyboard.
// ➡️ Submit: Fired when a user submits a form.

// How to write use a eventlistener method ()
// The first argument is the type of event to listen for ("click" in this case),
// and the second argument is the function to execute when the event is fired.

// let button = document.querySelector(".main__button");
// button.addEventListener("click", function () {
//   image.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//   );
// });

let button = document.querySelector(".main__button");
button.addEventListener("click", function () {
  if (
    image.getAttribute("src") ===
    "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  ) {
    image.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    );
  } else {
    image.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    );
  }
});
