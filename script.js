let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    addCloseAndEditButtons(myNodelist[i]);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'INPUT' && ev.target.type === 'checkbox') {
        let li = ev.target.parentElement;
        li.classList.toggle('checked');
    } else if (ev.target.classList.contains('edit')) {
        let li = ev.target.parentElement;
        let text = li.textContent.replace("\u00D7", "").replace("\u270E", "").trim();
        let originalTask = text.split(' - ')[1].trim();
        let dateValue = text.split(' - ')[0].trim();
        let editedTask = prompt("Editar tarefa:", originalTask);
        if (editedTask !== null) {
            li.textContent = `${dateValue} - ${editedTask}`;
            addCloseAndEditButtons(li);
        }
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let dateValue = document.getElementById("Data").value;

    if (inputValue === '' || dateValue === '') {
        alert("Por favor, preencha tanto a tarefa quanto a data.");
        return;
    }

    let t = document.createTextNode(`${dateValue} - ${inputValue}`);
    li.appendChild(t);

    // Adiciona o checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    li.insertBefore(checkbox, t); 

    document.getElementById("itemLista").appendChild(li);

    document.getElementById("tarefa").value = "";
    document.getElementById("Data").value = "";

    addCloseAndEditButtons(li);
}

function addCloseAndEditButtons(li) {
    let closeBtn = document.createElement("span");
    let closeTxt = document.createTextNode("\u00D7"); 
    closeBtn.className = "close";
    closeBtn.appendChild(closeTxt);
    closeBtn.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    };
    li.appendChild(closeBtn);
    
    let editBtn = document.createElement("span");
    let editTxt = document.createTextNode("\u270E"); 
    editBtn.className = "edit";
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);
}

function limparLista() {
    let ul = document.getElementById("itemLista");
    ul.innerHTML = '';
}
