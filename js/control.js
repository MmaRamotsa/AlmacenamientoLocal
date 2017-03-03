function ElementoId(id){
	return document.getElementById(id);
}

function ComprobarLocalStorage(){
	var cond=true;
	if (!(typeof(Storage) !== "undefined")) {
		cond=false;
		alert("No puede ejecutarse este formulario en este navegador.");
	}
	return cond;
}

function AlmacenaDatos(){
	ComprobarLocalStorage();
	if (ComprobarLocalStorage()){
    localStorage.setItem("nombre", ElementoId("nombre").value);
    if (ElementoId("idmujer").checked){
    	localStorage.setItem("sexo", "mujer");
    } else {
    	localStorage.setItem("sexo", "hombre");
		}
		localStorage.setItem("ciudad",ElementoId("idciudad").value );
		localStorage.setItem("provincia",ElementoId("idprov").value );
	}
}

function redireccionar(pagina) {
	location.href=pagina;
}

function Siguiente(){
	AlmacenaDatos();
	redireccionar("continuacion.html");
}

function Anterior(){
	localStorage.setItem("email",ElementoId("email").value );
	redireccionar("index.html");
}
//Coge los datos que están guardados en el localStorage y los guarda
//en campos hidden del formulario para que cuando se haga un submit
//se envíen junto con los de la página.
function RellenaCamposHidden(){
	ElementoId("idnombre").value=localStorage.getItem("nombre");
	ElementoId("idsexo").value=localStorage.getItem("sexo");
	ElementoId("idciudad").value=localStorage.getItem("ciudad");
	ElementoId("idprovincia").value=localStorage.getItem("provincia");
}
//Rellena los datos que estén guardados de index.html
function RellenarDatosIniciales1(){
	var nombre = localStorage.getItem("nombre")||"";
	var sexo = localStorage.getItem("sexo")||"";
	var ciudad = localStorage.getItem("ciudad")||"";
	var provincia = localStorage.getItem("provincia")||"";

	ElementoId("nombre").value=nombre;

	if (sexo == "mujer"){ ElementoId("idmujer").checked=true;}
	if (sexo == "hombre"){ ElementoId("idhombre").checked=true;}
	
	ElementoId("idciudad").value=ciudad;
	ElementoId("idprov").value=provincia;
}
//Rellena los datos que estén guardados de continuacion.html
function RellenarDatosIniciales2(){
	var email = localStorage.getItem("email")||"";

	ElementoId("email").value=email;
}
//Limpia los datos almacenados en localStorage y recarga la página
function LimpiarDatos(){
	localStorage.clear();
	document.location.href = document.location.href;
}