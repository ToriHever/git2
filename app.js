//
//function menu (){
//    let x = document.getElementById("visibleMemu");
//    let drow = document.querySelector('.potfolio__nav-drow');
//    if(x.style.visibility ==="hidden"){
//        x.style.visibility = "visible";
//        drow.classList.add("active-drow");
//    } else {
//        x.style.visibility = "hidden";
//        drow.classList.remove("active-drow");
//    }
//}
function menu (){
    let x = document.getElementById("visibleMemu");
    let drow = document.querySelector('.potfolio__nav-drow');
    if(x.classList.contains("active")){

        x.classList.remove("active");
        drow.classList.add("active-drow");
    } else {
        x.classList.add("active");
        drow.classList.remove("active-drow");

    }
}
