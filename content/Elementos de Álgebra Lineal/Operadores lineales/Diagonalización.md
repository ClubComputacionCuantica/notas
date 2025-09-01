Un [operador lineal](Operadores%20lineales.md) $A : V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ sobre un campo $\mathbb{F}$ se dice que es _diagonalizable_ si existe una [base](../Fundamentos/Base%20y%20dimensión.md) $\{\ket{v_1}, \ldots, \ket{v_n}\}$ de $V$ formada por [eigenvectores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de $A$.

Esto implica que $A$ es similar a una [matriz diagonal](Operadores%20diagonales.md), es decir, existe una matriz invertible $P$ tal que
$$
P^{-1} A P = D,
$$
donde $D$ es una matriz diagonal cuyos valores en la diagonal son los eigenvalores de $A$.

Si un operador es diagonalizable, existe una [representación matricial diagonal](Operadores%20diagonales.md) de dicho operador respecto a alguna base de eigenvectores.
### Caracterización
Un operador $A$ es diagonalizable si y sólo si 
- Existe una base de $V$ formada por eigenvectores de $A$.
- $A$ es similar a una matriz diagonal: $\exists P$ invertible tal que $P^{-1} A P = D$ con $D$ diagonal.
- La suma de las multiplicidades geométricas de todos los eigenvalores es igual a la dimensión del espacio:
$$
\sum_{\lambda \in \text{spec}(A)} m_g(\lambda) = \dim V.
$$
- Para todo eigenvalor $\lambda$, la [multiplicidad geométrica](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Multiplicidad.md) coincide con la [multiplicidad algebraica](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Multiplicidad.md):
$$
m_g(\lambda) = m_a(\lambda).
$$
#algebra-lineal 