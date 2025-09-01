Un *espacio medible* es un par
$$(\mathcal{X}, \mathcal{A}),$$
donde:
- $\mathcal{X}$ es un conjunto no vacío, llamado _espacio de resultados_,
- $\mathcal{A}$ es una [σ-álgebra](../σ-álgebra.md) de subconjuntos de $\mathcal{X}$, cuyos elementos se llaman _conjuntos medibles_ o _eventos_.

### Interpretación

- El espacio $\mathcal{X}$ describe los posibles resultados de un experimento o universo de estudio.
- La $\sigma$-álgebra $\mathcal{A}$ determina qué subconjuntos de $\mathcal{X}$ se consideran _observables_ o _medibles_.

### Ejemplos

1. **Espacio finito:**  
    Para $X = {1,2,3}$, podemos tomar $\mathcal{A} = \mathcal{P}(X)$, el conjunto potencia, que es siempre una $\sigma$-álgebra.
2. **Recta real con Borel:**  
    En $X = \mathbb{R}$, la $\sigma$-álgebra más usada es la de los conjuntos de Borel, $\mathcal{B}(\mathbb{R})$, generada por los intervalos abiertos $(a,b)$.
3. **Ejemplo trivial:**  
    Para cualquier conjunto $X$, la $\sigma$-álgebra trivial es $\mathcal{A} = {\varnothing, X}$.

### Relación con otros conceptos

- Al dotar un espacio medible $(\mathcal{X}, \mathcal{A})$ de una [Medida de probabilidad](Medida%20de%20probabilidad.md) $P$, se obtiene un **espacio de probabilidad** $(\mathcal{X}, \mathcal{A}, P)$.
- Las [variables aleatorias](Variable%20aleatoria.md) se definen como [funciones medibles](Función%20medible.md) desde un espacio de probabilidad a otro espacio medible.


#probabilidad #medidas #espacios-medibles