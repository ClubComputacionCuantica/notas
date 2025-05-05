Una _matriz ortogonal_ es una matriz cuadrada $Q \in \mathbb{R}^{n \times n}$ que satisface:
$$
Q^T Q = Q Q^T = I,
$$
donde $Q^T$ es la transpuesta de $Q$, e $I$ es la [[matriz identidad]] de orden $n$.

Esto equivale a decir que las columnas (y filas) de $Q$ forman un conjunto [[Ortogonalidad y Ortonormalidad|ortonormal]] respecto al [[Producto interno|producto escalar estándar]].

### Propiedades
- $Q^{-1} = Q^T$
- $\det(Q) = \pm 1$
- La multiplicación por una matriz ortogonal preserva normas y ángulos: si $\mathbf{v} \in \mathbb{R}^n$, entonces:
  $$
  \|Q\mathbf{v}\| = \|\mathbf{v}\|,
  $$
  y el producto punto se conserva: $\langle Q\mathbf{u}, Q\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle$.

### Interpretación geométrica
Las matrices ortogonales representan rotaciones (si $\det(Q) = 1$) o reflexiones (si $\det(Q) = -1$) en el espacio euclidiano $\mathbb{R}^n$.

#algebra-lineal 