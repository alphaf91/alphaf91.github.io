window.addEventListener("scroll",function(){
    const header = this.document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);

});

//portfolio//
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard,i) =>{
    imgCard.addEventListener("click",()=>{
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener("Click",()=>{
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        });
    });
});

