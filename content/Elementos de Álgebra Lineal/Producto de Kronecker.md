Sea $A$ una [[Matrices|matriz]] de tamaño $m \times n$ y $B$ una matriz de tamaño $p \times q$, el _producto de Kronecker_, también conocido como _producto tensorial_, de $A$ por $B$, denotado como $A \otimes B$, es una matriz de tamaño $mp \times nq$ formada por el producto de cada elemento de $A$ por la matriz completa $B$. Formalmente, si $A = [a_{ij}]$ y $B = [b_{kl}]$,\* entonces el producto de Kronecker $A \otimes B$ se define como:
$$
A \otimes B = \begin{bmatrix}
a_{11}B & a_{12}B & \cdots & a_{1n}B \\
a_{21}B & a_{22}B & \cdots & a_{2n}B \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1}B & a_{m2}B & \cdots & a_{mn}B
\end{bmatrix}
$$
Cada elemento $a_{ij}B$ representa la multiplicación de la matriz $B$ por el escalar $a_{ij}$.
#### Propiedades

- **Asociatividad**: Para cualesquiera tres matrices $A$, $B$, y $C$, se tiene que
$$
(A \otimes B) \otimes C = A \otimes (B \otimes C).
$$

- **Distributividad sobre la suma**: Dadas las matrices $A$, $B$, y $C$ de tamaños compatibles,
$$
A \otimes (B + C) = A \otimes B + A \otimes C,
$$
y
$$
(A + B) \otimes C = A \otimes C + B \otimes C.
$$

- **Multiplicación mixta (relación con el producto matricial)**: Para cualesquiera cuatro matrices $A$, $B$, $C$, y $D$, donde las dimensiones de $A$ y $C$, así como las de $B$ y $D$, son compatibles entre sí, se tiene que
$$
(A \otimes B)(C \otimes D) = (AC) \otimes (BD).
$$

- **Producto por un escalar**: Dado un escalar $\lambda$ y una matriz $A$, se cumple que
$$
\lambda (A \otimes B) = (\lambda A) \otimes B = A \otimes (\lambda B).
$$

%%5. **Matriz identidad y matrices invertibles**: Si $A$ y $B$ son matrice[](Matrices%20invertibles.md)]], entonces
$$
(A \otimes B)^{-1} = A^{-1} \otimes B^{-1}.
$$
Además, si $I_m$ e $I_n$ son matrices identidad de tamaño $m \times m$ y $n \times n$ respectivamente, entonces $I_m \otimes I_n$ es la matriz identidad en el espacio de matrices de tamaño $mn \times mn$.%% %%Introducirlo en el producto tensorial de espacios%%

##### Vectores columna

Si consideramos dos vectores columna $\ket{u} \in \mathbb{C}^{m \times 1}$ y $\ket{v} \in \mathbb{C}^{n \times 1}$, el producto de Kronecker $u \otimes v$ resulta en un vector columna en $\mathbb{C}^{mn \times 1}$.

Formalmente, si $\ket{u} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_m \end{bmatrix}$ y $\ket{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$, entonces el producto de Kronecker $u \otimes v$ es:
$$
\ket{u} \otimes \ket{v} = \begin{bmatrix} u_1\ket{v} \\ u_2\ket{v} \\ \vdots \\ u_m\ket{v} \end{bmatrix} = \begin{bmatrix} u_1v_1 \\ u_1v_2 \\ \vdots \\ u_1v_n \\ u_2v_1 \\ \vdots \\ u_2 v_n \\ \vdots \\ u_m v_1 \\ \vdots \\ u_mv_n \end{bmatrix}
$$
%%Notacion de los elementos de matriz%%

#por-revisar 