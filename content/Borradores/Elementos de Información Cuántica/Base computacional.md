La _base computacional_ se refiere a la [base](../../Elementos%20de%20Álgebra%20Lineal/Fundamentos/Base%20y%20dimensión.md) [ortonormal](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) para el [espacio de Hilbert](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) $\mathcal{H} = \mathbb{C}^2$, $\{\ket{0}, \ket{1}\}$, donde:
$$
\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \hspace{16pt} \text{y} \hspace{16pt} \ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$
### Observaciones
* Los vectores $\ket{0}$ y $\ket{1}$ son los [eigenvectores](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) del [operador de Pauli](../Elementos%20de%20Mecánica%20Cuántica/Operadores%20de%20Pauli.md) $\sigma_z$ con eigenvalores $+1$ y $-1$, respectivamente.

Para un sistema de dos qubits, la base computacional es una base ortonormal para el espacio de Hilbert correspondiente, $\mathcal{H} = \mathbb{C}^2 \otimes \mathbb{C}^2$, y se define por el conjunto $\{\ket{00}, \ket{01}, \ket{10}, \ket{11}\}$, donde:

- $\ket{00} = \ket{0} \otimes \ket{0} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$,
- $\ket{01} = \ket{0} \otimes \ket{1} = \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix}$,
- $\ket{10} = \ket{1} \otimes \ket{0} = \begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix}$,
- $\ket{11} = \ket{1} \otimes \ket{1} = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix}$.

Para un sistema de $n$ qubits se define por el conjunto $\{\ket{j}\}_{j=0}^{2^n-1}$, donde cada $\ket{j}$ corresponde a un estado en representación binaria de $j$, y $\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

#computacion-cuantica