Un [[Operadores lineales|operador lineal]] $A: V \rightarrow V$ en un [[Espacio vectorial|espacio vectorial]] $V$ sobre un campo $\mathbb{F}$ se dice que es _diagonal_ si existe una [[Base y dimensión|base]] $\{\ket{e_i}\}_{i=1}^n$ de $V$ tal que cada $\ket{e_i}$ es un [[Eigenvalores y eigenvectores|eigenvector]] de $A$.

En otras palabras, $A$ es diagonal si actúa de forma escalar sobre los vectores de una base del espacio:
$$
A\ket{e_i} = \lambda_i \ket{e_i}, \quad \text{para todo } i = 1, \ldots, n.
$$

En este caso, la [[Representación de operadores lineales con matrices|matriz]] de $A$ respecto a la base ordenada de eigenvectores es de la forma:
$$
A = \begin{pmatrix} 
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n 
\end{pmatrix}
$$
donde $\lambda_i$ es el eigenvalor asociado al eigenvector $\ket{e_i}$.

Los operadores diagonales son un caso particular de operadores [[Diagonalización|diagonalizables]].

#algebra-lineal 