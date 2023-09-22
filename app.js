const dark=document.querySelector(".dark");
const night=document.querySelector(".night");
const light=document.querySelector(".light");
const sidebar=document.querySelector(".sidebar");
const activelistitem=document.querySelector(".list-item.active");

dark.addEventListener("click",()=>{
    sidebar.className="sidebar"
    activelistitem.className="list-item active dark"
})

night.addEventListener("click",()=>{
    sidebar.className="sidebar night"
    activelistitem.className="list-item active night"
})

light.addEventListener("click",()=>{
    sidebar.className="sidebar light"
    activelistitem.className="list-item active light"
})

console.log(activelistitem);