Un [operador lineal](Operadores%20lineales.md) $A: V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ sobre un campo $\mathbb{F}$ se dice que es _diagonal_ si existe una [base](../Fundamentos/Base%20y%20dimensión.md) $\{\ket{e_i}\}_{i=1}^n$ de $V$ tal que cada $\ket{e_i}$ es un [eigenvector](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de $A$.

En otras palabras, $A$ es diagonal si actúa de forma escalar sobre los vectores de una base del espacio:
$$
A\ket{e_i} = \lambda_i \ket{e_i}, \quad \text{para todo } i = 1, \ldots, n.
$$

En este caso, la [matriz](Representación%20de%20operadores%20lineales%20con%20matrices.md) de $A$ respecto a la base ordenada de eigenvectores es de la forma:
$$
A = \begin{pmatrix} 
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n 
\end{pmatrix}
$$
donde $\lambda_i$ es el eigenvalor asociado al eigenvector $\ket{e_i}$.

Los operadores diagonales son un caso particular de operadores [diagonalizables](Diagonalización.md).

#algebra-lineal 