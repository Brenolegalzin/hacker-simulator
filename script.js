let code = "const axios = require('axios');\nconst hackNASA = async () => {\n  let accessGranted = false;\n  let attempts = 0;\n  while (!accessGranted && attempts < 5) {\n    console.log('Attempt ' + (attempts + 1) + ': Hacking into NASA\'s server...');\n    console.log('Sending encrypted requests...');\n    try {\n      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');\n      if (response.status === 200) {\n        console.log('Access granted! Downloading top-secret files...');\n        console.log('Data retrieved:', response.data);\n        accessGranted = true;\n      } else {\n        throw new Error('Access denied! Retrying...');\n      }\n    } catch (error) {\n      console.error(error.message);\n      attempts++;\n    }\n  }\n  if (!accessGranted) {\n    console.log('Max attempts reached. Hacking failed.');\n  } else {\n    console.log('Mission accomplished! Extracting sensitive data...');\n    console.log('Decrypting files...');\n    console.log('Uploading information to secure location...');\n    console.log('Covering tracks and exiting stealthily...');\n  }\n};\nconst hideTracks = () => {\n  try {\n    console.log('Erasing logs and traces of the hack...');\n    console.log('Modifying timestamps to conceal activity...');\n    console.log('Sending false signals to mislead investigators...');\n    console.log('Disguising IP address and location...');\n    console.log('Creating decoy files to throw off suspicion...');\n    console.log('Generating fake access logs...');\n    console.log('Spoofing user agent to confuse forensic analysis...');\n    console.log('Planting misleading clues for investigators...');\n    console.log('Implementing a diversionary attack on a decoy server...');\n    console.log('Creating a virtual private network to mask activity...');\n  } catch (error) {\n    console.error('Error while covering tracks:', error);\n  }\n};\nconst hackCompleteMessage = () => {\n  try {\n    console.log('Hacking process complete. No one will suspect a thing!');\n  } catch (error) {\n    console.error('Error while completing hack:', error);\n  }\n};\nhackNASA();\nhideTracks();\nhackCompleteMessage();";
let textoPorTexto = code.split("");
let indice = 0;
let texto = document.getElementById("hackCode").value;
let quantidadeDeCorrecoes = 0;
function loop(){
	setTimeout(function() {
	    document.getElementById("hackCode").innerText = document.getElementById("hackCode").innerText+"_";
    }, 1000);
    setTimeout(function() {
	    loop();
	    document.getElementById("hackCode").innerText = document.getElementById("hackCode").innerText.replaceAll("_", "");
    }, 1500);
}
loop();
document.onkeydown = function(){
	const codigo = document.getElementById("hackCode");
	const resultado = textoPorTexto[indice]
	document.getElementById("hackCode").innerText = document.getElementById("hackCode").innerText.replaceAll("_", "");
	document.getElementById("hackCode").innerText = codigo.innerText+textoPorTexto[indice]
	indice += 1;
	if(indice>=code.length){
		document.onkeydown = {};
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
