Dada una función $f: \mathbb{C} \rightarrow \mathbb{C}$ y un [operador normal](Operadores%20normales.md) $A$ sobre un [espacio de Hilbert](../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) de dimensión finita, es posible definir la evaluación de la función $f$ sobre el operador $A$.

Supongamos que $A$ admite una [descomposición espectral](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Teorema%20Espectral.md):
$$
A = \sum_a a \ket{a}\bra{a},
$$
donde $\{\ket{a}\}$ es una [base ortonormal](../Fundamentos/Base%20y%20dimensión.md) de [eigenvectores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de $A$, y los $a$ son los [eigenvalores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) correspondientes.

Entonces se define:
$$
f(A) = \sum_a f(a)\ket{a}\bra{a}
$$

Esta construcción se conoce como la _evaluación funcional_ de $f$ en $A$.
### Unicidad
Esta definición de $f(A)$ está bien definida y es única: si $A$ es diagonalizable mediante una base ortonormal (como ocurre con operadores normales), entonces cualquier función $f$ definida sobre el [espectro](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Espectro%20de%20un%20operador%20lineal.md) de $A$ induce un operador que conmuta con $A$ y comparte sus [eigenvectores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md), donde cada eigenvalor $a$ es reemplazado por $f(a)$.

#algebra-lineal 