Sea $A: V \rightarrow W$ un [operador lineal](Operadores%20lineales.md) entre dos [espacios vectoriales](../Fundamentos/Espacio%20vectorial.md) $V$ y $W$ de [dimensiones](../Fundamentos/Base%20y%20dimensión.md) finitas $n$ y $m$ respectivamente, sobre un mismo campo $\mathbb{F}$.

El operador $A$ puede representarse mediante una [matriz](../Matrices/Matrices.md) de tamaño $m \times n$, una vez se han fijado bases en $V$ y $W$. Sean $\{\ket{v_1}, \ldots, \ket{v_n}\}$ una base de $V$ y $\{\ket{w_1}, \ldots, \ket{w_m}\}$ una base de $W$. Entonces, para cada $j$ (con $1 \leq j \leq n$), se escribe:
$$
A(\ket{v_j}) = a_{1j}\ket{w_1} + a_{2j}\ket{w_2} + \cdots + a_{mj}\ket{w_m},
$$
donde los coeficientes $a_{ij} \in \mathbb{F}$ son los componentes de la imagen de $\ket{v_j}$ en la base de $W$.

La matriz asociada a $A$ queda entonces definida como:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$
En esta notación, el operador y su matriz se denotan con la misma letra $A$.

Dada esta matriz, se puede calcular la imagen de un vector $\ket{v} \in V$, expresado en coordenadas respecto a la base, usando el producto matricial:
$$
A\ket{v}_{\text{base}} = [A] \cdot [\ket{v}]_{\text{base}}
$$

### Espacios de Hilbert
Si $V$ y $W$ son [espacios de Hilbert](../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) y se eligen [bases](../Fundamentos/Base%20y%20dimensión.md)[ortonormales](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md), la representación matricial puede obtenerse usando productos internos:
$$
A_{ji} = \langle w_j | A | v_i \rangle
$$
La matriz completa tiene la forma:
$$
\begin{pmatrix}
\langle w_1 | A | v_1 \rangle & \langle w_1 | A | v_2 \rangle & \cdots & \langle w_1 | A | v_n \rangle \\
\langle w_2 | A | v_1 \rangle & \langle w_2 | A | v_2 \rangle & \cdots & \langle w_2 | A | v_n \rangle \\
\vdots & \vdots & \ddots & \vdots \\
\langle w_m | A | v_1 \rangle & \langle w_m | A | v_2 \rangle & \cdots & \langle w_m | A | v_n \rangle
\end{pmatrix}
$$
#algebra-lineal 