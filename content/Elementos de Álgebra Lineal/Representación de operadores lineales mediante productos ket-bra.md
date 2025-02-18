Sea $A:V \rightarrow W$ un [[Operadores lineales|operador lineal]], donde $V,W$ [[Espacio de Hilbert|espacios de Hilbert]] con respectivas [[Base y dimensión|bases]] [[Ortogonalidad y Ortonormalidad|ortonormales]] $\{\ket{v_i}\}_{i=1}^{n}$ para $V$ y $\{\ket{w_j}\}_{j=1}^{m}$ para $W$. Observe que $A=I_W A I_V$, donde $I_V$, $I_W$ representan [[Operador identidad|operadores identidad]]. Usando la [[Relación de completez]], para cada $\ket{v}\in V$ se tiene
$$
A \ket{v}= (I_W A I_V)\ket{v}= \left(\sum_{j}\ket{w_j}\bra{w_j}\right) A \left(\sum_{i}\ket{v_i}\bra{v_i}\right)\ket{v}
$$$$
= \left(\sum_{j}\ket{w_j}\bra{w_j}\right)  \left(\sum_{i}\langle v_i | v \rangle A\ket{v_i}\right) = \sum_{j,i}\langle{v_i}|v\rangle\bra{w_j}A\ket{v_i}\ket{w_j}
$$
$$
=\left(\sum_{i,j}\bra{w_j}A\ket{v_i}\ket{w_j}\bra{v_i}\right)\ket{v}
$$
Es decir,
$$
A\equiv\sum_{i,j}\bra{w_j}A\ket{v_i}\ket{w_j}\bra{v_i}
$$