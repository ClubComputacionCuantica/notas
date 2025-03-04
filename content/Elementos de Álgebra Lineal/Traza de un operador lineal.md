La _traza_ de un [[Operadores lineales|operador lineal]] $A: V \rightarrow V$ en un [[espacio vectorial]] $V$ de dimensión finita sobre un campo $\mathbb{F}$ se define como la suma de los elementos diagonales de [[Representación de operadores lineales con matrices|la matriz que representa]] a $A$ en alguna base de $V$. Formalmente, si $\{ \ket{e_1}, \ket{e_2}, \ldots, \ket{e_n} \}$ es una [[Base y dimensión|base]] de $V$ y $A\ket{e_j} = \sum_{i=1}^{n} a_{ij} \ket{e_i}$, entonces la traza de $A$, denotada por $\text{Tr}(A)$, se calcula como
$$
Tr(A)=\sum_i a_{ii}.
$$
#### Propiedades
Sean $A, B: V \rightarrow V$ operadores lineales. Se verifica
- **Linealidad**:$$ Tr(A+cB)=Tr(A)+c Tr(B)$$ Para cualquier escalar $c\in \mathbb{F}$.
- **Traza de la composición de operadores (ciclicidad)**:$$Tr(AB)=Tr(BA)$$
Observe que este resultado implica la siguiente propiedad.

- **Invarianza bajo transformaciones de similaridad**: Sea $P: V \rightarrow V$ un [[Inverso de un operador lineal|operador lineal invertible]]. Dada la [[Transformación de similaridad|transformación de similaridad]] de $A$ mediante $P$ entonces la traza de $A$ es igual a la traza de $A'$, donde $A' = PAP^{-1}$.$$Tr(A)=Tr(PAP^{-1})$$Luego, el valor de la traza de un operador lineal es independiente de la elección de la base para el espacio vectorial $V$.
- **Traza del producto tensorial**: Se verifica 
$$
Tr(A\otimes B)= Tr(A)Tr(B)
$$


#pendiente 