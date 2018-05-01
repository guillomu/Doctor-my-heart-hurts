var  description = document.getElementById('description');
var  cercles = document.getElementsByClassName('cercle');

function ClearColor(){
	var i;
	
	for (i = 0; i < cercles.length; i++) {
		cercles[i].style.backgroundColor = 'black';
	}
}


function ChangeDesc(titre, desc, id){

	ClearColor();
	
	if(id != ''){
		var  cercle = document.getElementById(id);
		cercle.style.backgroundColor = 'red';
	}

	description.firstChild.innerHTML = titre;
	description.lastChild.innerHTML = desc;
}