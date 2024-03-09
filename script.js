let code = "const axios = require('axios');\nconst hackNASA = async () => {\n\t  let accessGranted = false;\n\tlet attempts = 0;\n\twhile (!accessGranted && attempts < 5) {\n\t\t  console.log('Attempt ' + (attempts + 1) + ': Hacking into NASA\'s server...'); \n\t\tconsole.log('Sending encrypted requests...');\n\t\ttry {\n\t\t\tconst response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');\n\t\t\tif (response.status === 200) {\n\t\t\t\tconsole.log('Access granted! Downloading top-secret files...');\n\t\t\t\tconsole.log('Data retrieved:', response.data);\n\t\t\t\taccessGranted = true;\n\t\t\t} else {\n\t\t\t\tthrow new Error('Access denied! Retrying...');\n\t\t\t}\n\t\t} catch (error) {\n\t\t\tconsole.error(error.message);\n\t\t\tattempts++;\n\t\t}\n\t}\n\tif (!accessGranted) {\n\t\tconsole.log('Max attempts reached. Hacking failed.');\n\t} else {\n\t\tconsole.log('Mission accomplished! Extracting sensitive data...');\n\t\tconsole.log('Decrypting files...');\n\t\tconsole.log('Uploading information to secure location...');\n\t\tconsole.log('Covering tracks and exiting stealthily...');\n\t}\n};\nconst hideTracks = () => {\n\ttry {\n\t\tconsole.log('Erasing logs and traces of the hack...');\n\t\tconsole.log('Modifying timestamps to conceal activity...');\n\t\tconsole.log('Sending false signals to mislead investigators...');\n\t\tconsole.log('Disguising IP address and location...');\n\t\tconsole.log('Creating decoy files to throw off suspicion...');\n\t\tconsole.log('Generating fake access logs...');\n\t\tconsole.log('Spoofing user agent to confuse forensic analysis...');\n\t\tconsole.log('Planting misleading clues for investigators...');\n\t\tconsole.log('Implementing a diversionary attack on a decoy server...');\n\t\tconsole.log('Creating a virtual private network to mask activity...');\n\t} catch (error) {\n\t\tconsole.error('Error while covering tracks:', error);\n\t}\n};\nconst hackCompleteMessage = () => {\n\ttry {\n\t\tconsole.log('Hacking process complete. No one will suspect a thing!');\n\t} catch (error) {\n\t\tconsole.error('Error while completing hack:', error);\n\t}\n};\nhackNASA();\nhideTracks();\nhackCompleteMessage();";
let textoPorTexto = code.split("");
let indice = 0;
let texto = document.getElementById("hackCode").value;
let quantidadeDeCorrecoes = 0;
document.onkeydown = function(){
	const codigo = document.getElementById("hackCode");
	const resultado = textoPorTexto[indice]
	document.getElementById("hackCode").innerHTML = codigo.innerHTML+textoPorTexto[indice]
	indice+=1
	if(indice>=code.length){
		document.onkeydown = {};
	}
	if(resultado.startsWith(";") || resultado.startsWith("{") || resultado.startsWith("}")){
		document.getElementById("hackCode").innerText = codigo.innerText+"\n";
	}
	if(resultado.startsWith("{")){
		document.getElementById("hackCode").innerHTML = codigo.innerHTML+" ";
	}
	if(indice>textoPorTexto.length){
		indice = textoPorTexto.length;
	}
}

if(localStorage.color == "red"){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "red";
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "red";
		document.querySelectorAll("button")[z].style.color = "red";
	}
}
if(localStorage.color == "green"){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "lightgreen";
		
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "lightgreen";
		document.querySelectorAll("button")[z].style.color = "lightgreen";
	}
}
if(localStorage.color == "blue"){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "blue";
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "blue";
		document.querySelectorAll("button")[z].style.color = "blue";
	}
}
function toRed(){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	localStorage.setItem("color", "red");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "red";
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "red";
		document.querySelectorAll("button")[z].style.color = "red";
	}
}
function toGreen(){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	localStorage.setItem("color", "green");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "lightgreen";
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "lightGreen";
		document.querySelectorAll("button")[z].style.color = "lightGreen";
	}
}
function toBlue(){
	let texts = document.querySelectorAll("p");
	let buttons = document.querySelectorAll("button");
	localStorage.setItem("color", "blue");
	for(let i=0; i<texts.length; i++){
		document.querySelectorAll("p")[i].style.color = "blue";
	}
	for(let z=0; z<buttons.length; z++){
		document.querySelectorAll("button")[z].style.borderColor = "blue";
		document.querySelectorAll("button")[z].style.color = "blue";
	}
}
