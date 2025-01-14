window.addEventListener("load", inciar);

function inciar(){
    coloEnlace();
}

function coloEnlace(){
    let aLink = document.getElementById("a");
    aLink.addEventListener("mouseover", () =>{
        aLink.style.color = "blue";
    });

    aLink.addEventListener("mouseout", () =>{
        aLink.style.color = "red";
    });

}