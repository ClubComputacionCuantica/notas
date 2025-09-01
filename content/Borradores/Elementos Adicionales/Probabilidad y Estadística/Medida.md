Sea $(\mathcal{X}, \mathcal{A})$ un [Espacio medible](Espacio%20medible.md). Una *medida* en $(\mathcal{X}, \mathcal{A})$ es una función
$$\mu : \mathcal{A} \to [0, +\infty]$$
que satisface las propiedades:

1. **No negatividad:**  
    $\mu(A) \geq 0$ para todo $A \in \mathcal{A}$.
2. **Nulidad del vacío:**  
    $\mu(\varnothing) = 0$.
3. **$\sigma$-aditividad (aditividad numerable):**  
    Si ${A_i}_{i=1}^\infty \subseteq \mathcal{A}$ son disjuntos dos a dos, entonces
    $$\mu\!\left(\bigcup_{i=1}^\infty A_i\right) = \sum_{i=1}^\infty \mu(A_i).$$

### Interpretación
- Una medida es una generalización del concepto de “longitud”, “área” o “volumen” a conjuntos más abstractos.
- Permite cuantificar el “tamaño” de subconjuntos de $\mathcal{X}$ de manera coherente con la estructura de la $\sigma$-álgebra.

### Ejemplos

1. **Medida de conteo:**  
    Para $X$ un conjunto cualquiera y $\mathcal{A} = \mathcal{P}(X)$, $$\mu(A) = |A|, \quad A \subseteq X.$$
2. **[Medida de Lebesgue](Medida%20de%20Lebesgue) en $\mathbb{R}$:**  
    Extiende la noción usual de longitud de intervalos a una [σ-álgebra](../σ-álgebra.md) más amplia: $$\mu((a,b)) = b-a.$$
3. **Medida de probabilidad:**  
    Una [Medida de probabilidad](Medida%20de%20probabilidad.md) $P$ es una medida tal que $\mu(\mathcal{X}) = 1$.
    

### Relación con otros conceptos

- Una [integral de Lebesgue](integral%20de%20Lebesgue) se define a partir de una medida $\mu$.
    
- El análisis de [espacios $L^p$](espacios%20$L^p$) depende de una medida subyacente.
    
- En estadística, toda [Variable aleatoria](Variable%20aleatoria.md) se estudia respecto a una medida de probabilidad.
    

#teoría-de-la-probabilidad #análisis-funcional #medidas

---

¿Quieres que prepare también la entrada para **integral de Lebesgue**, que es la herramienta natural asociada a una medida?