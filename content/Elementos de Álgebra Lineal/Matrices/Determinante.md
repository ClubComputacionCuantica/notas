Sea $A$ una [[Matrices|matriz]] cuadrada de orden $n$, es decir, $A \in \mathbb{F}^{n \times n}$, donde $\mathbb{F}$ es un campo. El _determinante_ de $A$, denotado $\det(A)$ o $|A|$, es una [[función determinante]] que devuelve un escalar asociado a $A$ que refleja propiedades fundamentales como la [[Matrices invertibles|invertibilidad]], el volumen transformado, y el cambio de orientación en transformaciones lineales.

### Definición
Para $n = 2$, si
$$
A = \begin{pmatrix}
a & b \\
c & d
\end{pmatrix},
$$
entonces:
$$
\det(A) = ad - bc
$$

Para $n = 3$,
$$
\det(A) = aei+bfg+cdh−ceg−bdi−afh
$$
si $A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}$.

En general, para $n \geq 1$, el determinante se define recursivamente mediante cofactores:
$$
\det(A) = \sum_{j=1}^{n} (-1)^{1+j} a_{1j} \det(A_{1j})
$$
donde $A_{1j}$ es la submatriz que se obtiene eliminando la fila 1 y la columna $j$.

### Propiedades
1. $\det(I_n) = 1$.
2. $\det(AB) = \det(A)\det(B)$.
3. $\det(A^T) = \det(A)$.
4. $\det(A) = 0$ si y solo si $A$ es [[Matrices invertibles#Matrices singulares|singular]].
5. Si $A$ es [[Matrices triangulares|triangular]], su determinante es el producto de sus elementos diagonales.
6. $\det(A^{-1}) = 1/\det(A)$, si $A$ es invertible.

### Interpretación geométrica
El determinante de una matriz representa el *factor de escala* del volumen (área en $\mathbb{R}^2$, volumen en $\mathbb{R}^3$) bajo la transformación lineal inducida por la matriz. Un determinante negativo implica un cambio de orientación.

**Ejemplo**: Sea $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. Entonces:
$$
\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2
$$

#algebra-lineal 