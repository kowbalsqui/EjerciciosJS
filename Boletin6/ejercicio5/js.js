window.addEventListener("load", inicializar); 

function inicializar(){
    table();
}

function table(){
    let table = document.createElement("table");
    for (let i = 0; i < 20; i ++){
        let tr = document.createElement("tr")
        for (let j = 0; j < 20; j ++){
            let td = document.createElement("td");
            td.textContent = "Pureba con Bucle";
            tr.appendChild(td);
            td.style.border = "1px solid black";
        }
        table.appendChild(tr);
    }
    table.style.border = "1px solid black";
    document.body.appendChild(table);
}