Una _matriz unitaria_ es una [matriz](Matrices.md) cuadrada $U \in \mathbb{C}^{n \times n}$ que satisface:
$$
U^{\dagger} U = U U^{\dagger} = I,
$$
donde $U^{\dagger}$ es la [](Matrices.md#Operaciones%20con%20matrices|conjugada%20transpuesta) de $U$, e $I$ es la [Matriz identidad](Matriz%20identidad.md) de orden $n$.

Las matrices unitarias son la generalización compleja de las [Matrices ortogonales](Matrices%20ortogonales.md), y preservan la [norma euclidiana compleja](../Producto%20interno%20y%20norma/norma%20inducida%20por%20el%20producto%20interno.md).
### Propiedades
- $U^{-1} = U^{\dagger}$
- $\|U\mathbf{v}\| = \|\mathbf{v}\|$ para todo $\mathbf{v} \in \mathbb{C}^n$
- $\langle U\mathbf{u}, U\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle$
- $\det(U)$ es un número complejo de módulo 1
### Interpretación geométrica
Las matrices unitarias representan rotaciones (y reflexiones) en espacios vectoriales complejos y en mecánica cuántica describen la [evolución de estados cuánticos](../../Borradores/Elementos%20de%20Mecánica%20Cuántica/Postulado%204.%20Evolución%20temporal%20de%20un%20sistema%20cuántico.md).

#algebra-lineal 