Sea $A: V \rightarrow W$ un [operador lineal](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Operadores%20lineales.md) entre dos [espacios normados](Espacios%20normados.md) $V$ y $W$ sobre un campo $\mathbb{F}$. Decimos que $A$ es un _operador acotado_ si existe una constante $C > 0$ tal que:
$$
\|A(v)\|_W \leq C\|v\|_V \quad \text{para todo } v \in V.
$$

Es decir, $A$ no amplifica arbitrariamente la norma de los vectores. Esta propiedad es equivalente a la [continuidad](Continuidad%20de%20operadores%20lineales.md) de $A$ en espacios normados.

### Interpretación
Los operadores acotados preservan el control sobre el "tamaño" (norma) de los vectores. Son el análogo funcional de las matrices con entradas finitas, pero en contextos potencialmente infinito-dimensionales.

### Notación y norma operatorial
El conjunto de todos los operadores acotados de $V$ en $W$ se denota por $\mathcal{B}(V, W)$. Si $V = W$, escribimos simplemente $\mathcal{B}(V)$. Se define la _norma operatorial_ como:
$$
\|A\| = \sup_{\|v\| \leq 1} \|A(v)\|
$$

### Propiedades
- Todo operador lineal definido sobre un espacio de dimensión finita es acotado.
- Si $A$ es acotado, entonces es continuo en todo $V$.
- $\mathcal{B}(V, W)$ es un [espacio normado](Espacios%20normados.md); si $W$ es un [espacio de Banach](Espacio%20de%20Banach.md), entonces $\mathcal{B}(V, W)$ también lo es.

#analisis-funcional 