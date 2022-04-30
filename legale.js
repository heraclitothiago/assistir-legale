let multiplasAulas = document.querySelectorAll('.flex-container a')
multiplasAulas.forEach(aula => {
    window.open(aula.href)
});