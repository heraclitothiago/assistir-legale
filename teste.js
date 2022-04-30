let openGoogle = window.open('https://www.google.com.br/')
let addScript = document.createElement('script');
addScript.setAttribute('src', 'https://raw.githubusercontent.com/heraclitothiago/assistir-legale/main/legale.js');
addScript.setAttribute('defer', '');
addScript.innerText = `alert('teste')`;
openGoogle.document.body.appendChild(addScript);
