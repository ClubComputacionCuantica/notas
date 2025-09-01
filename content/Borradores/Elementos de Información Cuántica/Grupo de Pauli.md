El _grupo de Pauli en_ $1$ _qubit_ denotado por $\mathcal{P}$, es un [Grupo](../Elementos%20Adicionales/Teoria%20de%20Grupos/Grupo.md) que consta de las 16 matrices formadas por el producto de los elementos del conjunto de factores de fase ${\pm 1, \pm i}$ y el conjunto de [matrices de Pauli](../Elementos%20de%20Mecánica%20Cuántica/Operadores%20de%20Pauli.md) $\{\sigma_0, \sigma_x, \sigma_y, \sigma_z\}$. 
En un ligero abuso de notación, se dice que el grupo de Pauli es el [grupo generado](../Elementos%20Adicionales/Teoria%20de%20Grupos/Conjunto%20generador%20de%20un%20grupo.md)
$$
\mathcal{P} \coloneqq \langle \{\pm 1, \pm i\} \times \{\sigma_0, \sigma_x, \sigma_y, \sigma_z\} \rangle\equiv \{ ±σ_0​,±iσ_0​,±σ_x​,±iσ_x​,±σ_y​,±iσ_y​,±σ_z​,±iσ_z​ \}.
$$

El _grupo de Pauli en_ $n$ _qubits_, $\mathcal{P}_n$ es el grupo generado por los operadores de $\mathcal{P}_1$ aplicados a cada uno de los $n$ qubits en el [espacio de Hilbert](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) $(\mathbb{C}^2)^{\otimes n}$, esto es,
$$
\mathcal{P}_n = \langle W_1 \otimes \dots \otimes  W_n | W_i \in \mathcal{P}\rangle.
$$
Equivalentemente podemos representar
$$
\mathcal{P}_n = \{ e^{i\theta\pi/2}\sigma_{j_1}\otimes\dots\sigma_{j_n}|\theta=0,1,2,3, j_k=0,1,2,3\}.
$$
El [](../Elementos%20Adicionales/Teoria%20de%20Grupos/Grupo.md#orden|orden) de $\mathcal{P}_n$ es $4 \cdot 4^n$, puesto que cualquier factor escalar $\pm 1, \pm i$ en un producto tensorial puede ser movido de posición.