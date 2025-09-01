Un *espacio de probabilidad* es una tripleta
$$(\mathcal{X}, \mathcal{A}, P),$$
donde:
- $(\mathcal{X}, \mathcal{A})$ es un [espacio medible](Espacio%20medible.md),
- $P$ es una [medida de probabilidad](Medida%20de%20probabilidad.md) definida sobre $\mathcal{A}$.

### Interpretación
- $\mathcal{X}$: el conjunto de **resultados posibles** de un experimento aleatorio (también llamado _espacio muestral_).
- $\mathcal{A}$: una [σ-álgebra](../σ-álgebra.md) de subconjuntos de $\mathcal{X}$, cuyos elementos representan los **eventos** observables.
- $P$: una medida de probabilidad que asigna a cada evento $A \in \mathcal{A}$ un número $P(A) \in [0,1]$, interpretado como la **probabilidad de que ocurra $A$**.

### Ejemplos

1. **Lanzamiento de un dado justo:** $$
   \mathcal{X} = \{1,2,3,4,5,6\}, \quad 
   \mathcal{A} = \mathcal{P}(\mathcal{X}), \quad 
   P(A) = \frac{|A|}{6}.
   $$

2. **Espacio gaussiano:** $$
   \mathcal{X} = \mathbb{R}, \quad
   \mathcal{A} = \mathcal{B}(\mathbb{R}), \quad
   P(A) = \int_A \frac{1}{\sqrt{2\pi}} e^{-x^2/2}\, dx.
   $$

3. **Modelo Bernoulli:** $$
   \mathcal{X} = \{0,1\}, \quad
   \mathcal{A} = \mathcal{P}(\mathcal{X}), \quad
   P(\{1\}) = p, \; P(\{0\}) = 1-p.
   $$

### Relación con otros conceptos

- Una [Variable aleatoria](Variable%20aleatoria.md) es una función medible $X:(\mathcal{X}, \mathcal{A}, P) \to (\mathcal{Y}, \mathcal{B})$.
- Los [modelos estadísticos](Modelo%20estadístico.md) son familias de espacios de probabilidad parametrizados por $\theta \in \Theta$.

#probabilidad #medida