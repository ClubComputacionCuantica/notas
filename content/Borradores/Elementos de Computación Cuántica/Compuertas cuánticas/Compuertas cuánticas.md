Las _compuertas cuánticas_ son [[Operadores unitarios]] que actúan sobre [[Postulado 1. El estado de un sistema|estados cuánticos]] de uno o más [[Qubit]]. Estas compuertas son análogas a las [[Compuertas lógicas en computación clásica]], pero operan sobre qubits en lugar de bits clásicos. 

Una compuerta cuántica $U$ actúa sobre un estado cuántico $\ket{\psi}$ produciendo un nuevo estado cuántico $\ket{\psi'}$ de la siguiente manera:
$$
\ket{\psi'} = U\ket{\psi}
$$

Para que una operación sea una compuerta cuántica válida, $U$ debe ser un [[Operadores unitarios|operador unitario]], esta propiedad asegura la reversibilidad de las operaciones cuánticas y la conservación de la probabilidad total.

Ejemplos de compuertas cuánticas incluyen:

- **[[Compuerta de Hadamard]]**: Crea superposiciones de estados, actuando sobre un solo qubit. Transforma los estados base $\ket{0}$ y $\ket{1}$ en estados de superposición.
$$
H = \frac{1}{\sqrt{2}}
\begin{pmatrix}
1 & 1 \\
1 & -1
\end{pmatrix}
$$
- **Compuertas de Pauli (X, Y, Z)**: Representan rotaciones de $\pi$ radianes alrededor de los ejes x, y, z en la esfera de Bloch, respectivamente. La compuerta $X$ es también conocida como NOT cuántica.
$$
X = 
\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}, \quad
Y = 
\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}, \quad
Z = 
\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
$$

- **Compuerta CNOT (Controlled-NOT)**: Una compuerta de dos qubits que realiza una operación NOT sobre el segundo qubit (target) solo si el primer qubit (control) está en el estado $\ket{1}$.

Estas compuertas son fundamentales para la realización de algoritmos cuánticos y la manipulación de información en el ámbito de la computación cuántica.
