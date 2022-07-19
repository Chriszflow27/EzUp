document.querySelector('#btnRegistrar').addEventListener('click', saveUsuario);
imprimirTabla();


function saveUsuario(){
    var aNuevoUsuario = [],
        sId = '', 
        sUser = '',  
        sNombre = '',  
        sCorreo = '', 
        sContrasena = '';

        sId = document.querySelector('#txtId').value;
        sUser = document.querySelector('#txtUser').value;
        sNombre = document.querySelector('#txtNombre').value;
        sCorreo = document.querySelector('#txtCorreo').value;
        sContrasena = document.querySelector('#txtContrasena').value;

    aNuevoUsuario.push(sId,sUser,sNombre,sCorreo,sContrasena);
    addUsuarioAlSistema(aNuevoUsuario);
    imprimirTabla();
}

function imprimirTabla(){
    var list = getUserList(),
        tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML='';

    for(var i=0; i < list.length; i++){
        var row = tbody.insertRow(i);
        var idCell = row.insertCell(0);
        idCell.innerHTML = list[i].id;

    tbody.appendChild(row);
    }

}