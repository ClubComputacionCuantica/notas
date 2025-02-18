La _base computacional_ se refiere a la [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para el [[espacio de Hilbert]] $\mathcal{H} = \mathbb{C}^2$, $\{\ket{0}, \ket{1}\}$, donde:
$$
\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \hspace{16pt} \text{y} \hspace{16pt} \ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}.
$$
#### Observaciones
* Los vectores $\ket{0}$ y $\ket{1}$ son los [[Eigenvalores y eigenvectores|eigenvectores]] del [[Operadores de Pauli|operador de Pauli]] $\sigma_z$ con eigenvalores $+1$ y $-1$, respectivamente.

Para un sistema de dos qubits, la base computacional es una base ortonormal para el espacio de Hilbert correspondiente, $\mathcal{H} = \mathbb{C}^2 \otimes \mathbb{C}^2$, y se define por el conjunto ${\ket{00}, \ket{01}, \ket{10}, \ket{11}}$, donde:

- $\ket{00} = \ket{0} \otimes \ket{0} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix}$,
- $\ket{01} = \ket{0} \otimes \ket{1} = \begin{pmatrix} 0 \\ 1 \\ 0 \\ 0 \end{pmatrix}$,
- $\ket{10} = \ket{1} \otimes \ket{0} = \begin{pmatrix} 0 \\ 0 \\ 1 \\ 0 \end{pmatrix}$,
- $\ket{11} = \ket{1} \otimes \ket{1} = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 1 \end{pmatrix}$.

Para un sistema de $n$ qubits se define por el conjunto ${\ket{j}}_{j=0}^{2^n-1}$, donde cada $\ket{j}$ corresponde a un estado en representación binaria de $j$, y $\ket{0} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\ket{1} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.