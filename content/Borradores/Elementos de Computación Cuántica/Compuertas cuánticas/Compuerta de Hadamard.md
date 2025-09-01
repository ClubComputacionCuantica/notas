La _compuerta de Hadamard_, denotada como $H$, es una [compuerta cuántica](Compuertas%20cuánticas.md) que actúa sobre un solo [Qubit](../../Elementos%20de%20Información%20Cuántica/Qubit.md). Se define en el [espacio de Hilbert](../../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) de dos dimensiones.
### Definición operativa
La acción de la compuerta de Hadamard sobre la base estándar $\{\ket{0}, \ket{1}\}$ está dada por:
$$
H\ket{0} = \frac{1}{\sqrt{2}} (\ket{0} + \ket{1}), \qquad
H\ket{1} = \frac{1}{\sqrt{2}} (\ket{0} - \ket{1})
$$
### Representación matricial
En [forma matricial](../../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Representación%20de%20operadores%20lineales%20con%20matrices.md), la compuerta de Hadamard se representa como:
$$
H = \frac{1}{\sqrt{2}}
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$
### Propiedades
- Cumple $H^2 = I$, es decir, es su propio inverso.
- Tiene eigenvalores $+1$ y $-1$, con eigenvectores correspondientes que pueden encontrarse resolviendo la ecuación $H\ket{v} = \lambda\ket{v}$.

#computacion-cuantica 
