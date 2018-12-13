self.addEventListener("load",main);

function main() {
//revisarUser();
}



function RegistrarUsuario() {

  var id1= document.getElementById("TextBoxId").value;
  var name= document.getElementById("TxtName").value;
  var lastname= document.getElementById("TxtLastName").value;
  var email= document.getElementById("TxtEmail").value;
  var curso= document.getElementById("ListCurso").value;
  var status= "True";


firebase.database().ref('estudiantes').push({
          nombre:name,
          apellido:lastname,
          codigo:id1,
          curso:curso,
          estado:status,
          email:email,

});

function EliminarUsuario() {

}


CamposEnBlanco();
}

function CamposEnBlanco() {
document.getElementById("TextBoxId").value="";
document.getElementById("TxtName").value="";
document.getElementById("TxtLastName").value="";
document.getElementById("TxtEmail").value="";
document.getElementById("TxtCurso").value="";

}




$(document).ready(function(){
			$(".Lienzo .rgstr-btn button").click(function(){
				$('.Lienzo .wrapper').addClass('move');
				$('.body').css('background','#e0b722');
				$(".Lienzo .login-btn button").removeClass('active');
				$(this).addClass('active');

			});

			$(".Lienzo .login-btn button").click(function(){
				$('.Lienzo .wrapper').removeClass('move');
				$('.body').css('background','#ff4931');
				$(".Lienzo .rgstr-btn button").removeClass('active');
				$(this).addClass('active');
			});
		});



function cambiarImagen(dato) {

   alert("Usuario:"+dato);


}
