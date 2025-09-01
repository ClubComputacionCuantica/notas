El proceso de _Ortogonalización de Gram-Schmidt_ es un método algorítmico que permite transformar cualquier [conjunto de vectores linealmente independientes](Combinaciones%20lineales%20e%20independencia%20lineal.md) en un conjunto [ortogonal](Ortogonalidad%20y%20Ortonormalidad.md) (u ortonormal si se normalizan los vectores resultantes) en el mismo [espacio vectorial](Espacio%20vectorial.md).

Sea $V$ un espacio vectorial sobre $\mathbb{R}$ o $\mathbb{C}$, y sea $\langle \cdot | \cdot \rangle$ un [producto interno](../Producto%20interno.md) en $V$. Supongamos que $\{\ket{v_1}, \ket{v_2}, \ldots, \ket{v_n}\}$ es un conjunto de vectores linealmente independientes en $V$.

### Paso 1: Inicialización
Tomamos $\ket{v_1}$ y lo normalizamos (si se desea ortonormalidad):
$$
\ket{u_1} = \frac{\ket{v_1}}{\|\ket{v_1}\|}, \quad \text{donde } \|\ket{v_1}\| = \sqrt{\langle v_1 | v_1 \rangle}
$$

### Paso 2: Ortogonalización recursiva
Para cada $k = 2, \ldots, n$, realizamos:
- Restamos de $\ket{v_k}$ sus componentes proyectadas sobre los vectores $\ket{u_1}, \ldots, \ket{u_{k-1}}$:
$$
\ket{w_k} = \ket{v_k} - \sum_{j=1}^{k-1} \frac{\langle u_j | v_k \rangle}{\langle u_j | u_j \rangle} \ket{u_j}
$$
- Si se desea ortonormalidad, normalizamos:
$$
\ket{u_k} = \frac{\ket{w_k}}{\|\ket{w_k}\|}, \quad \text{donde } \|\ket{w_k}\| = \sqrt{\langle w_k | w_k \rangle}
$$

### Resultado
El conjunto $\{\ket{u_1}, \ket{u_2}, \ldots, \ket{u_n}\}$ es ortogonal (u ortonormal) y genera el mismo [subespacio](Subespacio%20generado%20por%20un%20conjunto%20de%20vectores.md) que el conjunto original. Además, para $i \neq j$, se tiene:
$$
\langle u_i | u_j \rangle = 0, \quad \text{y si ortonormal: } \|\ket{u_i}\| = 1
$$

#algebra-lineal 