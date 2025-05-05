Sea $A$ una [[Matrices|matriz]] de tamaño $m \times n$ y $B$ una matriz de tamaño $p \times q$, el _producto de Kronecker_, también conocido como _producto tensorial_, de $A$ por $B$, denotado como $A \otimes B$, es una matriz de tamaño $mp \times nq$ formada por el producto de cada elemento de $A$ por la matriz completa $B$. Formalmente, si $A = [a_{ij}]$ y $B = [b_{kl}]$, entonces el producto de Kronecker $A \otimes B$ se define como:
$$
A \otimes B = \begin{bmatrix}
    a_{11}B & a_{12}B & \cdots & a_{1n}B \\
    a_{21}B & a_{22}B & \cdots & a_{2n}B \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{m1}B & a_{m2}B & \cdots & a_{mn}B
\end{bmatrix}
$$
Cada elemento $a_{ij}B$ representa la multiplicación de la matriz $B$ por el escalar $a_{ij}.$
### Propiedades
- **Asociatividad**:
$$
(A \otimes B) \otimes C = A \otimes (B \otimes C)
$$

- **Distributividad sobre la suma**:
$$
A \otimes (B + C) = A \otimes B + A \otimes C, \quad (A + B) \otimes C = A \otimes C + B \otimes C
$$

- **Multiplicación mixta (compatibilidad con el producto matricial)**:
$$
(A \otimes B)(C \otimes D) = (AC) \otimes (BD)
$$
(siempre que los productos $AC$ y $BD$ estén bien definidos).

- **Producto por un escalar**:
$$
\lambda (A \otimes B) = (\lambda A) \otimes B = A \otimes (\lambda B)
$$

- **Inversas e identidad** Si $A$ y $B$ son matrices invertibles:
$$
(A \otimes B)^{-1} = A^{-1} \otimes B^{-1}
$$
Y si $I_m$ e $I_n$ son identidades, entonces $I_m \otimes I_n$ es la identidad de tamaño $mn \times mn$.

### Vectores columna

Si $\ket{u} \in \mathbb{C}^{m \times 1}$ y $\ket{v} \in \mathbb{C}^{n \times 1}$ son vectores columna, su producto de Kronecker es otro vector columna en $\mathbb{C}^{mn \times 1}$. Si:
$$
\ket{u} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_m \end{bmatrix}, \quad \ket{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}
$$
Entonces:
$$
\ket{u} \otimes \ket{v} = \begin{bmatrix} u_1\ket{v} \\ u_2\ket{v} \\ \vdots \\ u_m\ket{v} \end{bmatrix} = \begin{bmatrix} u_1v_1 \\ u_1v_2 \\ \vdots \\ u_1v_n \\ u_2v_1 \\ \vdots \\ u_2v_n \\ \vdots \\ u_mv_n \end{bmatrix}
$$

#algebra-lineal 
