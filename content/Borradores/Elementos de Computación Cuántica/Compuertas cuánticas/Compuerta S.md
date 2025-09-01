La _compuerta S_, también conocida como _compuerta de fase_, es una [compuerta cuántica](Compuertas%20cuánticas.md) de un solo [qubit](../../Elementos%20de%20Información%20Cuántica/Qubit.md) que aplica una rotación de fase de $\frac{\pi}{2}$ (90 grados) al estado $\ket{1}$, dejando invariante el estado $\ket{0}$.

### Definición operativa
$$
S\ket{0} = \ket{0}, \qquad
S\ket{1} = i\ket{1}
$$

### Representación matricial
En la base computacional $\{\ket{0}, \ket{1}\}$:
$$
S =
\begin{pmatrix}
1 & 0 \\
0 & i
\end{pmatrix}
$$

### Propiedades
- No es hermitiana, pero su [adjunto](../../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Adjunto%20de%20un%20operador.md) es la compuerta $S^\dagger$ o $S^{-1}$:
$$
S^\dagger =
\begin{pmatrix}
1 & 0 \\
0 & -i
\end{pmatrix}
$$
- Satisface $S^2 = Z$, donde $Z$ es la [compuerta Pauli-Z](compuerta%20Pauli-Z).

Es parte del conjunto de [Compuertas de Clifford](Compuertas%20de%20Clifford.md).