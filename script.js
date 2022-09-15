const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const deleteAll = document.querySelector('#danger-outlined');
const listItem = document.querySelector('.list-group');
const deleteList = document.querySelector('#task-list');


allEvents();

function allEvents(){
    form.addEventListener('submit', addItem); //item ekleme

    deleteList.addEventListener('click', deleteListItem); //itemları silme

    deleteAll.addEventListener('click', deleteAllItems); // komple silme
}

//CREATE ADD
function addItem(e){
    
    if(input.value === ""){ // input boşşa uyarı çıksın
        alert('Please Add New Item')
        
    }else{ // değilse şartlara göre eleman oluşturulsun
        const li = document.createElement('li');
        li.className =('list-group-item list-group-item-secondary text-center');
        li.appendChild(document.createTextNode(input.value))

        const label = document.createElement('label');
        label.className = ('btn btn-outline-success float-start');
        label.innerHTML =('<i class="fas fa-check"></i>');

        const label2 = document.createElement('label');
        label2.className = ('btn btn-outline-danger float-end ');
        label2.innerHTML = ('<i class="fas fa-times"></i>');

        li.appendChild(label);
        li.appendChild(label2);
        listItem.appendChild(li);
    }

    input.value = ''; // girilen değerden sonra inputun içini boşaltma
    
    e.preventDefault(); //sayfayı yenileme durdurma
}

//DELETE ITEM
function deleteListItem(e){
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.className === 'fas fa-check'){
        e.target.parentElement.parentElement.style.textDecoration=('line-through') 
    }
}

//DELETE ALL
function deleteAllItems(){
    while(deleteList.firstChild){
        deleteList.removeChild(deleteList.firstChild);
    }
}