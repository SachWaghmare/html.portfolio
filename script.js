let cart = document.getElementById("cart");
let shopCard = document.querySelectorAll(".shopCard");

cart.addEventListener("click", function(){
    document.querySelector(".container").innerHTML="";
    document.querySelector("body").innerHTML='<a class="empty" href="">Cart is Empty</a>'

})

shopCard.forEach(function(card){
    card.addEventListener("click", function(){
        document.querySelector(".container").innerHTML="";

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div>
        <h1>Trends At ToAT's</h1>
        <h1>Upto 50% Off ON EarPhones</h1>
        <p>Super Extra Bass.</p>
        <p>Super Extra Bass.</p>
        <p>Super Extra Bass.</p>
        <p>Super Extra Bass.</p>
        <a href="">Shop Now</a>
        </div>
        `
        console.log(card);
        document.querySelector("body").appendChild(div)
    })
})