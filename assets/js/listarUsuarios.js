console.log(getUserList);
imprimirTabla();


function imprimirTabla(){
    var list = getUserList(),
    tbody = document.querySelector('#usersTable tbody');

    tbody.innerHTML = '';

    for(var i=0; i<list.length; i++){
        var row = tbody.insertRow(i);
        var idCell = row.insertCell(0);
        idCell.innerHTML = list[i].id;

    tbody.appendChild(row);
    }

}