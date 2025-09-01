Sea $A: V \rightarrow V$ un [operador normal](../Operadores%20normales.md) sobre un [espacio de Hilbert](../../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) $V$ de dimensión finita.

El _teorema espectral_ afirma que existe una [base ortonormal](../../Fundamentos/Base%20y%20dimensión.md) $\{\ket{a}\}$ de $V$ formada por [eigenvectores](Eigenvalores%20y%20eigenvectores.md) de $A$, tal que $A$ se puede expresar como:
$$
A = \sum_a a \ket{a}\bra{a},
$$
donde $a$ recorre el conjunto de [eigenvalores](Eigenvalores%20y%20eigenvectores.md) de $A$. Esta expresión se conoce como la _descomposición espectral_ de $A$.

### Resultados
1. $A$ es [diagonalizable](../Diagonalización.md) mediante una base ortonormal.
2. El operador $A$ actúa multiplicando por $a$ en la dirección de cada $\ket{a}$:
   $$A\ket{a} = a\ket{a}$$
3. La [evaluación funcional](../Funciones%20de%20operadores.md) $f(A)$ está bien definida por:
   $$f(A) = \sum_a f(a) \ket{a} \bra{a}$$
4. Si $A$ es [Hermitiano](../Operadores%20Hermitianos.md), los autovalores $a$ son reales.

### Observación
La descomposición espectral garantiza que cualquier operador normal puede representarse como suma ponderada de [proyecciones ortogonales](../Proyector%20ortogonal.md).

#algebra-lineal 