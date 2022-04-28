# assistir-legale

### Abra a lista de aulas, aperte F12 e cole na guia console
```
let aulas = document.querySelectorAll('[id^="disciplina-aulas"] a');
aulas.forEach(assistir => {
    if (!assistir.querySelector('i') || assistir.querySelector('.fa-star-half-o')) {
        window.open(assistir.href)
    }
});
```

### Feche todas as abas que foram abertas, volte na lista de aulas, aperte F5 e repita o passo acima

### Esse segundo código abrirá todas as partes de aulas nas páginas que foram abertas. Cole o código abaixo em cada página que foi aberta, apertando F12 e colando na aba console
```
let multiplasAulas = document.querySelectorAll('.flex-container a')
multiplasAulas.forEach(aula => {
    window.open(aula.href)
});
```

