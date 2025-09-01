Sea $A: V \rightarrow W$ un [operador lineal](../Operadores%20lineales/Operadores%20lineales.md), donde $V$ y $W$ son [espacios de Hilbert](../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) con respectivas [bases](../Fundamentos/Base%20y%20dimensión.md) [ortonormales](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) $\{\ket{v_i}\}_{i=1}^{n}$ para $V$ y $\{\ket{w_j}\}_{j=1}^{m}$ para $W$.

Recordemos que los operadores identidad $I_V$ e $I_W$ pueden escribirse como:
$$
I_V = \sum_i \ket{v_i}\bra{v_i}, \quad I_W = \sum_j \ket{w_j}\bra{w_j}
$$
por la [Relación de completez](Relación%20de%20completez.md) en cada espacio.

Entonces, para cualquier $\ket{v} \in V$:
$$
A \ket{v} = (I_W A I_V) \ket{v} = \left( \sum_j \ket{w_j} \bra{w_j} \right) A \left( \sum_i \ket{v_i} \bra{v_i} \right) \ket{v}
$$
$$
= \left( \sum_j \ket{w_j} \bra{w_j} \right) \left( \sum_i \langle v_i | v \rangle A \ket{v_i} \right)
= \sum_{i,j} \langle v_i | v \rangle \bra{w_j} A \ket{v_i} \ket{w_j}
$$
$$
= \left( \sum_{i,j} \bra{w_j} A \ket{v_i} \ket{w_j} \bra{v_i} \right) \ket{v}
$$

Por lo tanto, se concluye que el operador $A$ puede escribirse como:
$$
A = \sum_{i,j} \bra{w_j} A \ket{v_i} \ket{w_j} \bra{v_i}
$$

Esta expresión se conoce como la _representación ket-bra_ del operador $A$.

#algebra-lineal 