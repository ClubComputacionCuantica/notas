Sea $V$ un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) de [dimensión finita](../Fundamentos/Base%20y%20dimensión.md) sobre $\mathbb{F}$, equipado con un [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) $(\cdot, \cdot): V \times V \to \mathbb{F}$. Dado un [operador lineal](Operadores%20lineales.md) $A: V \to V$, existe un único operador $A^{\dagger} : V \to V$ tal que
$$
(\ket{v}, A\ket{w}) = (A^{\dagger} \ket{v}, \ket{w})
$$
para todo $\ket{v}, \ket{w} \in V$. Este operador se llama el _adjunto_ o _conjugado Hermitiano_ de $A$.
### Representación matricial del adjunto
En cualquier [base](../Fundamentos/Base%20y%20dimensión.md) [ortonormal](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) para $V$, la [matriz que representa](Representación%20de%20operadores%20lineales%20con%20matrices.md) a $A^{\dagger}$ es la [](../Matrices/Matrices.md#Operaciones%20con%20matrices|conjugada%20transpuesta) de la matriz que representa a $A$:
$$
A^{\dagger} = (\overline{A})^T
$$
### Propiedades
Sean $A, B: V \to V$ operadores lineales, $\ket{v}, \ket{w} \in V$ vectores, y $a_i \in \mathbb{F}$ escalares:
1. $\left(A^{\dagger}\right)^{\dagger} = A$
2. $(AB)^{\dagger} = B^{\dagger} A^{\dagger}$
3. $(A\ket{v})^{\dagger} = \bra{v} A^{\dagger}$
4. $(\ket{w}\bra{v})^{\dagger} = \ket{v}\bra{w}$
5. $\left(\sum_i a_i A_i\right)^{\dagger} = \sum_i \overline{a_i} A_i^{\dagger}$

#algebra-lineal 