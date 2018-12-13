

// Aqui el controlador se encarga de llenar los datos con lo usuarios existentes en la base de datos

    var listaAmigos=document.getElementById("ListaEstudiantes");



    firebase.database().ref('estudiantes')
    .on('value',function(snapshot) {
      var html='';
        snapshot.forEach(function (e) {
          var element=e.val();
          var clave=e.key;
          var nombre = element.nombre;
          var apellido= element.apellido;
          var estado= element.estado;
          var codigo=element.codigo;
          var curso=element.curso;

          html +="<li> <b> <div class='card' style='max-width:318px;'> <img id='imagen' type='file' class='card-img-top' onclick='cambiarImagen("+codigo+")' src='View/UI/icons/student.png' alt='Card image cap'> <div class='card-body'> <p class='card-text'>" +"<h1 id='keyUser' onclick='cambiarImagen();'>Borrar</h1>"+apellido+"<br>"+nombre+"<br>"+codigo+"<br>"+estado+"<br>"+curso+"º"+"</p> </div> </div> </b></li>";

        });

      document.getElementById("ListaEstudiantes").innerHTML=html;

    });
