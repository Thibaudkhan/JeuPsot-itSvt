const mainAffiche = document.getElementById("mainAffiche");

var resultat;
var result;
var deleteA;
var time;
var list = ['0','1','2','3','4',5,6,7,8,9];


function hasard(Min,Max) { 
    return (Math.floor((Max-Min)*Math.random())+Min); 
} 

function timer(){
	time = setInterval(function(){
		jeu();
		//mainAffiche.innerHTML = list[hasard(0,3)];
	},5000)
}

function jeu(){
	if (list.length > 0) {
	result = hasard(0,list.length);
	resultat = list[result];
	mainAffiche.innerHTML = resultat;
	deleteA = list.splice(list.length - list.length + result, 1);
	console.log(deleteA);
	alert("index "+result);
	}else{
		alert('stop');
	}
	/*if(time === undefined){
		timer();
	}else{
		clearInterval(time);
		timer();
	}*/
}

