La _compuerta CNOT_ (del inglés Controlled-NOT) es una [compuerta cuántica](Compuertas%20cuánticas.md) de dos [qubits](../../Elementos%20de%20Información%20Cuántica/Qubit.md) que aplica una operación NOT (o Pauli-X) sobre el segundo qubit (llamado *qubit objetivo*), si y solo si el primer qubit (el *qubit de control*) está en el estado $\ket{1}$.
### Definición operativa
Actúa sobre las bases computacionales $\{\ket{00}, \ket{01}, \ket{10}, \ket{11}\}$ de la siguiente manera:
$$
\begin{aligned}
\text{CNOT}\ket{00} &= \ket{00}, \\
\text{CNOT}\ket{01} &= \ket{01}, \\
\text{CNOT}\ket{10} &= \ket{11}, \\
\text{CNOT}\ket{11} &= \ket{10}.
\end{aligned}
$$

### Representación matricial
La matriz de la compuerta CNOT en base computacional es:
$$
\text{CNOT} =
\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{pmatrix}.
$$

### Propiedades
- Se puede expresar como una operación controlada: $\text{CNOT} = \ket{0}\bra{0} \otimes I + \ket{1}\bra{1} \otimes X$.
### Relaciones de conmutación
[^referencia]La compuerta CNOT tiene relaciones de conmutación importantes con los operadores de Pauli:
$$
\begin{aligned}
CNOT_{c\rightarrow t} X_c &= (X_c \otimes X_t) CNOT_{s\rightarrow t}\\

CNOT_{c\rightarrow t} Z_c &= Z_c CNOT_{c\rightarrow t}\\

CNOT_{c\rightarrow t} X_t &= X_t CNOT_{c\rightarrow t}\\

CNOT_{c\rightarrow t} Z_t &= (Z_c \otimes Z_t) CNOT_{c\rightarrow t}\\
\end{aligned}
$$
La segunda ecuación implica que todos los estabilizadores del vecindario de $c$ permanecen invariantes, ya que $Z_c$ conmuta con la CNOT.

[^referencia]: Pirker