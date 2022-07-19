document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);


function iniciarSesion(){
    var sUser = '';
    var sContrasena = '';
    var bAcceso = false;

    sUser = document.querySelector('#txtUser').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sUser, sContrasena);
    console.log(bAcceso);

    if(bAcceso == true){
        ingresar();
    }

    function ingresar(){
        var rol = sessionStorage.getItem('rolUsuarioActivo');
        switch(rol){
            case '1':
                window.location.href = 'admin.html';
            break;
            case '2':
                window.location.href = 'empleado.html';
            break;
            case '3':
                window.location.href = 'cliente.html';
            break;
        }
    }
}