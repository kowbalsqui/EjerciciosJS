window.addEventListener("load", inciar);

const json =  [
    {titular: "Noticia 1", resumen: "Resumen de la noticia 1",descripcion: "Esta esla noticia 1"},
    {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion:"Esta es la noticia 2"},
    {titular: "Noticia 3",resumen: "Resumen de la noticia3",descripcion: "Esta es la noticia 3"}];

function inciar(){
    arbol();
}

function arbol(){
    let divPadre = document.getElementById('noticias');
    divPadre.style.border = "solid 1px black"
    divPadre.style.width = '15%'; 
    divPadre.style.float = 'right';
    for(let i = 0; i < json.length; i ++){
        let divn1 = document.createElement("div");
        divn1.setAttribute("id", "noticia1");
        let h1n1 = document.createElement("h1");
        h1n1.textContent = json[i].titular;
        let pn1 = document.createElement("p");
        pn1.setAttribute("id", "resumen1");
        pn1.textContent = json[i].resumen;
        let imgn1 = document.createElement("img");
        imgn1.setAttribute("src", "https://cdn-icons-png.flaticon.com/256/2875/2875404.png");
        imgn1.setAttribute("name", "mostrar");
        imgn1.addEventListener("click", function(e){
            let imagen = e.currentTarget;
            if(imagen.parentNode.lastChild.style.display === 'none'){
                imagen.setAttribute("src", "https://imgs.search.brave.com/OWeawqyUC7mE-m6Y8tpzKLHdFczMysYc047x4Ar_vDk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nb2Fs/YW1hcmtldGluZy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTcvMDEvQ2VydmV6/YS1jYWxpZGFkLmpw/Zw");
                imagen.parentNode.lastChild.style.display = 'block';
            }else{
                imagen.parentNode.lastChild.style.display = 'none';
                imagen.setAttribute("src", "https://cdn-icons-png.flaticon.com/256/2875/2875404.png");
            }
        });
        imgn1.style.width = '30';
        let h4n1 = document.createElement("h4");
        h4n1.style.display = "none";
        h4n1.textContent = json[i].descripcion; 

        divn1.appendChild(h1n1);
        divn1.appendChild(pn1);
        divn1.appendChild(imgn1);
        divn1.appendChild(h4n1);

        divPadre.appendChild(divn1);
    }
}