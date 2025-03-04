Un [[Operadores lineales|operador lineal]] $A: V \rightarrow V$ en un [[espacio vectorial]] $V$ sobre un campo $\mathbb{F}$ se dice que es _diagonal_ si existe una [[Base y dimensión|base]] $\{\ket{e_i}\}_{i=1}^n$ de $V$ tal que cada $\ket{e_i}$ es un [[Eigenvalores y eigenvectores|eigenvector]] de $A$.
Si $A$ es diagonal entonces la [[Representación de operadores lineales con matrices|representación matricial]] de $A$ con respecto una [[Base ordenada]] de eigenvectores de $A$, es de la forma
$$
A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \\ \end{pmatrix}
$$
donde $\lambda_i$ es el correspondiente eigenvalor de $\ket{e_i}$. 
I.e.
$$
A\ket{e_i} = \lambda_i\ket{e_i}
$$
para todo $i = 1, \ldots, n$.
#por-revisar #pendiente 