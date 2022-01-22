

const badgeNumber = document.querySelector("#btn-num");
const badgeButton = document.querySelector("#badge-hide-btn");





badgeButton.addEventListener('click',function(){
    badgeNumber.classList.toggle("hide");
})

