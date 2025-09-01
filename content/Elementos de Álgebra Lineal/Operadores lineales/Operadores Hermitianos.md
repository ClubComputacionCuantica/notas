Un [operador lineal](Operadores%20lineales.md) $A : V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ con [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) se dice que es _Hermitiano_ o _auto-adjunto_ si es igual a su [adjunto](Adjunto%20de%20un%20operador.md), es decir, si satisface:
$$
A = A^\dagger
$$

Esto significa que para todos los vectores $\ket{v}, \ket{w} \in V$, se cumple:
$$
(\ket{v}, A\ket{w}) = (A\ket{v}, \ket{w})
$$
donde $(\cdot, \cdot)$ denota el producto interno en $V$.

Un operador Hermitiano es en particular [normal](Operadores%20normales.md).
### Resultados
1. Los [eigenvalores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de un operador Hermitiano son reales.
2. Un operador [normal](Operadores%20normales.md) es Hermitiano si y solo si todos sus eigenvalores son reales.
3. Cualesquiera dos [eigenvectores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) asociados a eigenvalores distintos de un operador Hermitiano son [ortogonales](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md).
4. Todo operador Hermitiano es [diagonalizable](Diagonalización.md) mediante una [base ortonormal](../Fundamentos/Base%20y%20dimensión.md) de eigenvectores.
### Representación matricial
La [matriz](Representación%20de%20operadores%20lineales%20con%20matrices.md) de un operador Hermitiano respecto a una base ortonormal es igual a su [](../Matrices/Matrices.md#Operaciones%20con%20matrices|conjugada%20transpuesta):
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