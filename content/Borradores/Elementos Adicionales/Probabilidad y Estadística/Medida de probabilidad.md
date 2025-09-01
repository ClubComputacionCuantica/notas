Sea $(\mathcal{X}, \mathcal{A})$ un [Espacio medible](Espacio%20medible.md), donde $\mathcal{X}$ es un conjunto y $\mathcal{A}$ una [σ-álgebra](../σ-álgebra.md) de subconjuntos de $\mathcal{X}$.

Una *medida de probabilidad* sobre $(\mathcal{X}, \mathcal{A})$ es una función
$$P : \mathcal{A} \to [0,1]$$
que satisface las siguientes propiedades:

1. **No negatividad:**  
    $P(A) \geq 0$ para todo $A \in \mathcal{A}$.
2. **Normalización:**  
    $P(\mathcal{X}) = 1$.
3. **$\sigma$-aditividad:**  
    Si ${A_i}_{i=1}^\infty$ es una familia de conjuntos disjuntos en $\mathcal{A}$, entonces
    $$P\!\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty P(A_i).$$

### Interpretación

- $P(A)$ representa la _probabilidad_ de que el resultado de un experimento aleatorio pertenezca al evento $A$.
- Una medida de probabilidad es un caso particular de una [Medida](Medida.md) donde la masa total está normalizada a $1$.

### Ejemplos

1. **Medida uniforme en un conjunto finito:**  
    Para $X = {1,2,\dots,n}$ y $\mathcal{A} = \mathcal{P}(X)$, definimos
    $$P(A) = \frac{|A|}{n}, \quad A \subseteq X.$$
2. **Distribución Bernoulli:**  
    En $X = {0,1}$, con parámetro $p \in [0,1]$,
    $$P(\{1\}) = p, \quad P(\{0\}) = 1-p.$$
3. **Distribución normal estándar:**  
    En $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, la medida $P$ asociada a la densidad
    $$f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$$
    respecto a la medida de Lebesgue.

### Relación con otros conceptos

- Toda medida de probabilidad es una [Medida de Borel](Medida%20de%20Borel.md) si se define sobre $\mathcal{B}(\mathbb{R}^n)$.
- Los [modelos estadísticos](Modelo%20estadístico.md) se construyen como familias de medidas de probabilidad parametrizadas.
    

#probabilidad #medida #espacios-medibles 