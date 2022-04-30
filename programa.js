/**
 * 1º PASSO
 * Abrir a pós que você deseja marcar todas as aulas como assistidas
 * Aperte a tecla F12 e cole o código a seguir na guia console
 * O código fará que todas as aulas sejam abertas no navegador
 */
let aulas = document.querySelectorAll('[id^="disciplina-aulas"] a');
aulas.forEach(assistir => {
    if (!assistir.querySelector('i') || assistir.querySelector('.fa-star-half-o')) {
        let abrirAula = window.open(assistir.href)
        abrirAula.location.href = "javascript:(let multiplasAulas = document.querySelectorAll('.flex-container a'); multiplasAulas.forEach(aula => { window.open(aula.href) });)"
    }
});

// FECHAR TODAS AS AULAS DO CURSO QUE FORAM ABERTAS 
// IR NOVAMENTE NA LISTA DE AULAS E ATUALIZAR A PÁGINA COM F5
// EXECUTAR NOVAMENTE O 1º PASSO

/**
 * 2º PASSO
 * Esse passo fará com que todas as aulas com estrela cortada abram no navegador
 * Cole o código abaixo apertando F12 e colando na guia console
 * O código fará que todas as partes de aulas somente da página em que se colou o código sejam abertas
 * Ao terminar de carregar a página feche-as todas novamente
 */
let multiplasAulas = document.querySelectorAll('.flex-container a')
multiplasAulas.forEach(aula => {
    window.open(aula.href)
});

// ASSISTIR AS AULAS DE MONITORIA
document.querySelectorAll('#disciplina-aulas-00000001411 > div:nth-child(1) a').forEach(monitoria => {
    window.open(monitoria.href)
});

//DOWNLOAD DOS MATERIAIS
function download(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
        })
        .catch(console.error);
}
document.querySelectorAll('[id^="disciplina-material"] a')
    .forEach(material => {
        // window.open(material.href)
        // download(material.href, material.innerText)
        console.log(material.href)
    });
