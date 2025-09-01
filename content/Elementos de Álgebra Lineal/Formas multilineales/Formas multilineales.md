Una _forma multilineal_ es una función que toma varios vectores de uno o más [espacios vectoriales](../Fundamentos/Espacio%20vectorial.md) y devuelve un escalar, siendo lineal en cada uno de sus argumentos por separado.

Sea $V_1, \dots, V_k$ espacios vectoriales sobre un mismo campo $\mathbb{F}$, una aplicación:
$$
\varphi: V_1 \times V_2 \times \cdots \times V_k \to \mathbb{F}
$$
es una _forma $k$-lineal_ (o $k$-*forma multilineal*) si es lineal en cada variable cuando las demás se fijan.

Es decir, para cada $i = 1, \dots, k$ y para todos $\mathbf{v}_j \in V_j$ (con $j \neq i$), la aplicación:
$$
\varphi_i: V_i \to \mathbb{F}, \quad \mathbf{v}_i \mapsto \varphi(\mathbf{v}_1, \dots, \mathbf{v}_i, \dots, \mathbf{v}_k)
$$
es lineal.

### Ejemplos
- Un [Funcional lineal](../Funcionales%20lineales%20y%20espacio%20dual/Funcional%20lineal.md) es una 1-forma multilineal.
- El [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) en un espacio vectorial complejo es una forma bilineal conjugada (semilineal en un argumento, lineal en el otro).
- El [Determinante](../Matrices/Determinante.md) es una forma multilineal alternante sobre los vectores columna de una matriz cuadrada.

#algebra-lineal 