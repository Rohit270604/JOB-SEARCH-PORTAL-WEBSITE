// Navbar
const bar = document.querySelector("#bar");
const menu = document.querySelector("#menu");

if(bar){
    bar.addEventListener("click",()=>{
    menu.classList.toggle("active");
    });
}

// job listing Section 

const sortBtn = document.querySelectorAll(".jobs-id > *");
const sortItem = document.querySelectorAll(".jobs-container > *");


 sortBtn.forEach((btn) => {
    btn.addEventListener("click",() => {
        sortBtn.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        const targetData = btn.getAttribute('data-target');
        sortItem.forEach((item) => {
            item.classList.add("delete");

        if(item.getAttribute("data-item") === targetData || targetData === "all"){
            item.classList.remove("delete");
        }
        });
    });
 });