Sea $V$ un [[espacio vectorial]] de [[Base y dimensión|dimensión]] $n$ sobre un campo $\mathbb{F}$, y sean $\mathcal{B} = \{ \mathbf{v}_1, \ldots, \mathbf{v}_n \}$ y $\mathcal{B}' = \{ \mathbf{w}_1, \ldots, \mathbf{w}_n \}$ dos [[Base y dimensión|bases]] de $V$. Es posible convertir las coordenadas de un vector en una base $\mathcal{B}$ a sus coordenadas en otra base $\mathcal{B}'$.
### Matriz de cambio de base
Existe una [[Matrices|matriz invertible]] $P$ tal que, para cualquier vector $\mathbf{v} \in V$ con coordenadas $[v]_{\mathcal{B}}$ en la base $\mathcal{B}$ y $[v]_{\mathcal{B}'}$ en la base $\mathcal{B}'$, se cumple:
$$
[v]_{\mathcal{B}'} = P [v]_{\mathcal{B}}
$$
donde $P$ es la _matriz de cambio de base de_ $\mathcal{B}$ _a_ $\mathcal{B}'$.

**Construcción de $P$**:
Si escribimos los vectores de la nueva base $\mathcal{B}'$ como combinaciones lineales de los de $\mathcal{B}$:
$$
\mathbf{w}_j = \sum_{i=1}^n p_{ij} \mathbf{v}_i
$$
entonces las columnas de $P$ son los vectores $[\mathbf{w}_j]_{\mathcal{B}}$.

### Propiedades
1. La matriz $P$ es invertible.
2. $P^{-1}$ es la matriz de cambio de base de $\mathcal{B}'$ a $\mathcal{B}$.
3. Si $A$ es la [[Operadores lineales#Representación matricial|matriz]] de un operador lineal $T$ en la base $\mathcal{B}$, y $A'$ su matriz en la base $\mathcal{B}'$, entonces:$$
   A' = P A P^{-1}
   $$

### Ejemplo
Sea $V = \mathbb{R}^2$, con bases
$$
\mathcal{B} = \left\{ 
\begin{pmatrix}
1\\0
\end{pmatrix},
\begin{pmatrix}
0\\1
\end{pmatrix}
\right\}, \quad
\mathcal{B}' = \left\{ 
\begin{pmatrix}
1\\1
\end{pmatrix},
\begin{pmatrix}
1\\-1
\end{pmatrix}
\right\}
$$
Entonces la matriz de cambio de base de $\mathcal{B}$ a $\mathcal{B}'$ es:
$$
P = 
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$

#algebra-lineal 