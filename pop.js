const popup = document.querySelector('.popup')
console.log(popup)
function openPopup(){
    popup.classList.add("openPopup")
}
function closePopup(){
    popup.classList.remove("openPopup")
}