Un [[Operadores lineales|operador lineal]] $A : V \rightarrow V$ en un [[Espacio vectorial]] $V$ sobre un campo $\mathbb{F}$ se dice que es _diagonalizable_ si existe una [[Base y dimensión|base]] $\{\ket{v_1}, \ldots, \ket{v_n}\}$ de $V$ formada por [[Eigenvalores y eigenvectores|eigenvectores]] de $A$.

Esto implica que $A$ es similar a una [[Operadores diagonales|matriz diagonal]], es decir, existe una matriz invertible $P$ tal que
$$
P^{-1} A P = D,
$$
donde $D$ es una matriz diagonal cuyos valores en la diagonal son los eigenvalores de $A$.

Si un operador es diagonalizable, existe una [[Operadores diagonales|representación matricial diagonal]] de dicho operador respecto a alguna base de eigenvectores.
### Caracterización
Un operador $A$ es diagonalizable si y sólo si 
- Existe una base de $V$ formada por eigenvectores de $A$.
- $A$ es similar a una matriz diagonal: $\exists P$ invertible tal que $P^{-1} A P = D$ con $D$ diagonal.
- La suma de las multiplicidades geométricas de todos los eigenvalores es igual a la dimensión del espacio:
$$
\sum_{\lambda \in \text{spec}(A)} m_g(\lambda) = \dim V.
$$
- Para todo eigenvalor $\lambda$, la [[Multiplicidad|multiplicidad geométrica]] coincide con la [[Multiplicidad|multiplicidad algebraica]]:
$$
m_g(\lambda) = m_a(\lambda).
$$
#algebra-lineal 