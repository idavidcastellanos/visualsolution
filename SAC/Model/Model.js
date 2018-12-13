
window.onload = UserStatus;

//FUNCION UserStatus verifica el estado actual de la sesion, el usuario podra acceder a la sesion
//con el correo y la contraseña siempre y cuando tenga acceso al sistema

function UserStatus() {
  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        var user1=firebase.auth().currentUser;
      
        if (user1!=null) {
            window.alert("Bienvenido a SAC");
            document.getElementById("modal").style.display="block";
        }
    }
    else {
      document.getElementById("modal").style.display="none";
  }
  });
}

//FUNCION LogIn permite al usuario administrador entrar y tener acceso a todos los estudiantes
//para modificar o revisar la informacion de cada alumno

function LogIn() {
var correo = document.getElementById("UserId").value;
var contraseña = document.getElementById("UserPass").value;
firebase.auth().signInWithEmailAndPassword(correo, contraseña).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("error:"+errorMessage);

});
}


//FNCIONES LogOut permite que los usuarios administradores cierren sesion, sin importar el dispositivo
//la sesion se cierra.

function LogOut() {
  firebase.auth().signOut().then(function() {
window.alert("Sesion cerrada");
}).catch(function(error) {
  // An error happened.
});

}
