// let photo=document.querySelectorAll(".phot")
// let next=document.querySelector(".next")
// let pre=document.querySelector(".pre")
// let count=0
// console.log(photo)
// photo.forEach((el,ind)=>{
//     el.style.left=`${ind*100}%`

// })
// next.addEventListener("click",()=>{
//     count++;
//     slider();


// })
// pre.addEventListener("click",()=>{
//     count--;
//     slider();
    

// })
// function slider(){
//     photo.forEach((el,ind)=>{
//         el.style.transform=`translateX(-${count*100})%`

//     })
// }
let photo = document.querySelectorAll(".phot");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre");
let count = 0;

photo.forEach((el, ind) => {
    el.style.left = `${ind * 100}%`;
});

next.addEventListener("click", () => {
    count++;
    if (count >= photo.length) {
        count = 0; // Reset count if it exceeds the number of photos
    }
    slider();
});

pre.addEventListener("click", () => {
    count--;
    if (count < 0) {
        count = photo.length - 1; // Set count to last index if it goes below 0
    }
    slider();
});

function slider() {
    photo.forEach((el) => {
        el.style.transform = `translateX(-${count * 100}%)`;
    });
}
