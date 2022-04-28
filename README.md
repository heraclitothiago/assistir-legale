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

### Cole o código aseguir, apertando F12 e colando na guia console
```
let multiplasAulas = document.querySelectorAll('.flex-container a')
multiplasAulas.forEach(aula => {
    window.open(aula.href)
});
```

