La _traza_ de un [[Operadores lineales|operador lineal]] $A: V \rightarrow V$ en un [[Espacio vectorial]] $V$ de dimensión finita sobre un campo $\mathbb{F}$ se define como la suma de los elementos diagonales de [[Representación de operadores lineales con matrices|la matriz que representa]] a $A$ en alguna base de $V$. Formalmente, si $\{ \ket{e_1}, \ket{e_2}, \ldots, \ket{e_n} \}$ es una [[Base y dimensión|base]] de $V$ y $A\ket{e_j} = \sum_{i=1}^{n} a_{ij} \ket{e_i}$, entonces la traza de $A$, denotada por $\text{Tr}(A)$, se define como como
$$
Tr(A)=\sum_i a_{ii}.
$$
#### Propiedades
Sean $A, B: V \rightarrow V$ operadores lineales. Se verifica:

- **Linealidad**:
$$
\text{Tr}(A + cB) = \text{Tr}(A) + c \cdot \text{Tr}(B)
$$
para cualquier escalar $c \in \mathbb{F}$.

- **Traza de la composición de operadores (ciclicidad)**:
$$
\text{Tr}(AB) = \text{Tr}(BA)
$$
Observe que este resultado implica la siguiente propiedad:

- **Invarianza bajo [[Cambio de base|cambio de base]]**: Sea $P: V \rightarrow V$ un [[Inverso de un operador lineal|operador lineal invertible]]. Entonces
$$
\text{Tr}(A) = \text{Tr}(PAP^{-1}).
$$

- **Traza del producto tensorial**:
$$
\text{Tr}(A \otimes B) = \text{Tr}(A) \cdot \text{Tr}(B)
$$
#algebra-lineal 