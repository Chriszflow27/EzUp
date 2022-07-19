var UserList = [
    ['1','Chriszflow27','Christian Linares','calco2002@gmail.com','chris123','27-03-2002','1'],
    ['2','elTioDiegoo','Diego Wukongcio','dietor123@gmail.com','dietor123','21-03-2002','2'],
    ['3','TheOmarLeon','Omar Leon','theomarleon@gmail.com','elomar123','16-08-2001','3']
];

function addUsuarioAlSistema(pNuevoUsuario){
    /* var newUser = {
        id: pid,
        user: puser,
        nombre: pnombre,
        correo: pcorreo,
        contrasena: pcontrasena
    }; */
    console.log(UserList);
    UserList.push(pNuevoUsuario);
    localStorageUserList(UserList);
}

function getUserList(){
    var storedlist = localStorage.getItem ('localUserList');
    if (storedlist == null){
        UserList = [];
    }
    else {
        UserList = JSON.parse(storedlist);
    }
    return UserList;
}

function localStorageUserList(plist){
    localStorage.setItem('localUserList', JSON.stringify(plist));

}

