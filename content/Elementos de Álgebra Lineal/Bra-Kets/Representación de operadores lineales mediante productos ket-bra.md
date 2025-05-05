Sea $A: V \rightarrow W$ un [[Operadores lineales|operador lineal]], donde $V$ y $W$ son [[Espacio de Hilbert|espacios de Hilbert]] con respectivas [[Base y dimensión|bases]] [[Ortogonalidad y Ortonormalidad|ortonormales]] $\{\ket{v_i}\}_{i=1}^{n}$ para $V$ y $\{\ket{w_j}\}_{j=1}^{m}$ para $W$.

Recordemos que los operadores identidad $I_V$ e $I_W$ pueden escribirse como:
$$
I_V = \sum_i \ket{v_i}\bra{v_i}, \quad I_W = \sum_j \ket{w_j}\bra{w_j}
$$
por la [[relación de completez]] en cada espacio.

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