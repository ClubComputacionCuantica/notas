La _traza_ de un [operador lineal](Operadores%20lineales.md) $A: V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ de dimensión finita sobre un campo $\mathbb{F}$ se define como la suma de los elementos diagonales de [la matriz que representa](Representación%20de%20operadores%20lineales%20con%20matrices.md) a $A$ en alguna base de $V$. Formalmente, si $\{ \ket{e_1}, \ket{e_2}, \ldots, \ket{e_n} \}$ es una [base](../Fundamentos/Base%20y%20dimensión.md) de $V$ y $A\ket{e_j} = \sum_{i=1}^{n} a_{ij} \ket{e_i}$, entonces la traza de $A$, denotada por $\text{Tr}(A)$, se define como como
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

- **Invarianza bajo [cambio de base](../Fundamentos/Cambio%20de%20base.md)**: Sea $P: V \rightarrow V$ un [operador lineal invertible](Inverso%20de%20un%20operador%20lineal.md). Entonces
$$
\text{Tr}(A) = \text{Tr}(PAP^{-1}).
$$

- **Traza del producto tensorial**:
$$
\text{Tr}(A \otimes B) = \text{Tr}(A) \cdot \text{Tr}(B)
$$
#algebra-lineal 