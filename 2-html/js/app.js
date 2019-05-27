5var ans=document.getElementById("answer");
var qns=prompt("Cual es su nombre?");

if (qns=="luisa") {
	ans.innerHTML="Bienvenido administrador: "+qns;
}else {
	ans.innerHTML="Bienvenido usuario: "+qns;
}