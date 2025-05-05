Una _matriz simétrica_ es una [[Matrices|matriz]] cuadrada $A \in \mathbb{F}^{n \times n}$ tal que:
$$
A^T = A,
$$
es decir, la matriz es igual a su [[Matrices#Operaciones con matrices|transpuesta]].

Esto implica que los elementos en posición simétrica respecto a la diagonal principal son iguales: $a_{ij} = a_{ji}$ para todo $i, j$.

### Propiedades
- La suma de dos matrices simétricas es simétrica.
- Todo escalar por una matriz simétrica sigue siendo simétrica.
- $A^T = A$ si y solo si $\langle A\mathbf{v}, \mathbf{w} \rangle = \langle \mathbf{v}, A\mathbf{w} \rangle$ con respecto al [[Producto interno|producto interno canónico]].
- Toda matriz cuadrada $B$ puede escribirse como suma de una matriz simétrica y una antisimétrica:
  $$
  B = \frac{1}{2}(B + B^T) + \frac{1}{2}(B - B^T)
  $$

### Diagonalización
Si $\mathbb{F} = \mathbb{R}$, entonces toda matriz simétrica es [[Diagonalización|diagonalizable]] por una [[Matrices ortogonales|matriz ortogonal]]:
$$
A = Q D Q^T,
$$
donde $D$ es diagonal y $Q$ es ortogonal.

#algebra-lineal 