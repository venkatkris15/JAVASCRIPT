var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function (event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookDescriptionInput = document.getElementById("book-description-input")

addBook.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h1>Title:${bookTitleInput.value}</h1>`
    container.appendChild(div)
});
