El _grupo de Clifford_, denotado por $\mathcal{C}$, es el grupo de [Operadores unitarios](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Operadores%20unitarios.md) que normalizan al [Grupo de Pauli](Grupo%20de%20Pauli.md), es decir, aquellos operadores que, bajo conjugación, transforman elementos del grupo de Pauli en otros elementos del mismo grupo. En otras palabras, si $C \in \mathcal{C}$ y $P \in \mathcal{P}$, entonces se cumple que 
$$
C P C^\dagger \in \mathcal{P}.
$$
En el caso de $1$ qubit, el grupo de Clifford es el [grupo generado](../Elementos%20Adicionales/Teoria%20de%20Grupos/Conjunto%20generador%20de%20un%20grupo.md) por los operadores de Pauli ${\sigma_x, \sigma_y, \sigma_z}$, junto con la compuertas de [Hadamard](../Elementos%20de%20Computación%20Cuántica/Compuertas%20cuánticas/Compuerta%20de%20Hadamard.md) ($H$) y la [compuerta de fase S](../Elementos%20de%20Computación%20Cuántica/Compuertas%20cuánticas/Compuerta%20S.md) ($S$); con las operaciones de producto y composición de operadores. Formalmente:
$$
\mathcal{C} \coloneqq \langle H, S, \sigma_x, \sigma_z \rangle.
$$

El _grupo de Clifford en_ $n$ _qubits_ se define como
$$
\mathcal{C}_n = \{V\in U_{2^n}|V\mathcal{P}_n V^{\dagger}=\mathcal{P}_n\}.
$$
El orden de $\mathcal{C}_n$ es $2^{n^2+2n+3}\prod_{j=1}^{n}(4^j-1)$[^1]

En algunos casos se define al grupo de Clifford como el [grupo cociente](grupo%20cociente) $C_n/U(1)$ #pendiente

#wikipedia Example:
In the case of a single qubit, each element in the single-qubit Clifford group $\mathbf{C}_1/U(1)$ can be expressed as a matrix product $\mathbf{A}\mathbf{B}$, where $\mathbf{A}\in\{I,H,S,HS,SH,HSH\}$ and $\mathbf{B}=\{I,X,Y,Z\}$. Here H is the Hadamard gate and S the S phase gate.

#graph-local-clifford (a quotient group of) the Clifford group has been used to construct performant mixed-state entanglement distillation protocols [^2]

#QEC

[^1]:https://arxiv.org/abs/quant-ph/9608006
[^2]: Local Permutations of Products of Bell States and Entanglement Distillation - Dehaene, Van den Nest, De Moor