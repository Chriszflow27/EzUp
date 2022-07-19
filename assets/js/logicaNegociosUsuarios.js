/* Roles:
1: Admin
2: Trabajador
3: Cliente
*/

function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'))
    if(listaUsuarios == null){
        listaUsuarios = 
        [
            //id, apodo, nombre, correo,contraseña,fechanac,rol
            ['1','Chriszflow27','Christian Linares','calco2002@gmail.com','chris123','27-03-2002','1'],
            ['2','elTioDiegoo','Diego Wukongcio','dietor123@gmail.com','dietor123','21-03-2002','2'],
            ['3','TheOmarLeon','Omar Leon','theomarleon@gmail.com','elomar123','16-08-2001','3']
        ]
    }
    return listaUsuarios
}

function validarCredenciales(pUser , pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pUser == listaUsuarios[i][1] && pContrasena == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]+''+listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }

    return bAcceso;
}
