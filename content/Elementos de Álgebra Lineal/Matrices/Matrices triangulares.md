Una [matriz](Matrices.md) cuadrada $A \in \mathbb{F}^{n \times n}$ se dice que es _triangular_ si todos los elementos por encima o por debajo de la diagonal principal son cero.
### Matriz triangular superior
Una matriz $A = [a_{ij}]$ es _triangular superior_ si:
$$
a_{ij} = 0 \quad \text{para } i > j
$$
Es decir, todos los elementos debajo de la diagonal son cero.

### Matriz triangular inferior
Una matriz $A = [a_{ij}]$ es _triangular inferior_ si:
$$
a_{ij} = 0 \quad \text{para } i < j
$$
Es decir, todos los elementos por encima de la diagonal son cero.

## Propiedades
- La suma o producto de dos matrices triangulares superiores (o inferiores) es también triangular superior (o inferior).
- El determinante de una matriz triangular es el producto de los elementos de su diagonal:
$$
\det(A) = \prod_{i=1}^n a_{ii}
$$
- Una matriz triangular es [invertible](Matrices%20invertibles.md) si y solo si todos los elementos en su diagonal son distintos de cero.

#algebra-lineal 