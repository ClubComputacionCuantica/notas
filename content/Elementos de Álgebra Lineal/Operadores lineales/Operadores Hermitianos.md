Un [[Operadores lineales|operador lineal]] $A : V \rightarrow V$ en un [[espacio vectorial]] $V$ con [[producto interno]] se dice que es _Hermitiano_ o _auto-adjunto_ si es igual a su [[Adjunto de un operador|adjunto]], es decir, si satisface:
$$
A = A^\dagger
$$

Esto significa que para todos los vectores $\ket{v}, \ket{w} \in V$, se cumple:
$$
(\ket{v}, A\ket{w}) = (A\ket{v}, \ket{w})
$$
donde $(\cdot, \cdot)$ denota el producto interno en $V$.

Un operador Hermitiano es en particular [[Operadores normales|normal]].
### Resultados
1. Los [[Eigenvalores y eigenvectores|eigenvalores]] de un operador Hermitiano son reales.
2. Un operador [[Operadores normales|normal]] es Hermitiano si y solo si todos sus eigenvalores son reales.
3. Cualesquiera dos [[Eigenvalores y eigenvectores|eigenvectores]] asociados a eigenvalores distintos de un operador Hermitiano son [[Ortogonalidad y Ortonormalidad|ortogonales]].
4. Todo operador Hermitiano es [[Diagonalización|diagonalizable]] mediante una [[Base y dimensión|base ortonormal]] de eigenvectores.
### Representación matricial
La [[Representación de operadores lineales con matrices|matriz]] de un operador Hermitiano respecto a una base ortonormal es igual a su [[Matrices#Operaciones con matrices|conjugada transpuesta]]:
$$
A = A^\dagger = (A^T)^*
$$

### Operadores simétricos
Si el espacio vectorial $V$ está definido sobre el campo de los reales $\mathbb{R}$, entonces la condición de hermiticidad:
$$
(\ket{v}, A\ket{w}) = (A\ket{v}, \ket{w})
$$
implica que $A$ es un _operador simétrico_, y coincide con la noción usual de matriz simétrica:
$$
A = A^T.
$$
En este caso, el concepto de Hermitiano y simétrico coinciden, ya que no hay conjugación compleja.

#algebra-lineal 