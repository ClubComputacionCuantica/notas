La _notación bra-ket_, también conocida como _notación de Dirac_, es una forma elegante y compacta de representar [vectores](../Fundamentos/Espacio%20vectorial.md), [vectores duales](../Funcionales%20lineales%20y%20espacio%20dual/Espacio%20dual.md), y [productos internos](../Producto%20interno%20y%20norma/Producto%20interno.md) en mecánica cuántica. 
En este contexto, trabajamos con espacios de dimensión finita.

Sea $V = \mathbb{C}^n$, el [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) complejo de [dimensión](../Fundamentos/Base%20y%20dimensión.md) $n$, dotado con el [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) canónico:
$$
\langle \cdot | \cdot \rangle : \mathbb{C}^n \times \mathbb{C}^n \to \mathbb{C}.
$$
1. **Ket**: Un ket $|\psi\rangle$ representa un vector en $V$:
   $$
   \ket{\psi} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix}
   $$
   donde $a_1, \dots, a_n \in \mathbb{C}$ son las componentes del vector.

2. **Bra**: Un bra $\langle \phi|$ es el [dual](../Funcionales%20lineales%20y%20espacio%20dual/Espacio%20dual.md) de un ket. Es decir:
   $$
   \langle \phi| = (\ket{\phi})^{\dagger} = \begin{bmatrix} b_1^* & b_2^* & \ldots & b_n^* \end{bmatrix}
   $$
   donde $\ket{\phi} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix}$ y $^*$ denota conjugación compleja.

3. **Producto Bra-Ket**: El producto interno de $\ket{\psi}$ y $\ket{\phi}$ se denota $\langle \phi | \psi \rangle$ y es:
   $$
   \langle \phi | \psi \rangle = \sum_{i=1}^{n} b_i^* a_i
   $$
   Es decir, corresponde al producto interno usual en $\mathbb{C}^n$.

#mecanica-cuantica #algebra-lineal 