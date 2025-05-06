Sea $V$ un [[Espacio vectorial]] de [[Base y dimensión|dimensión finita]] sobre $\mathbb{F}$, equipado con un [[producto interno]] $(\cdot, \cdot): V \times V \to \mathbb{F}$. Dado un [[Operadores lineales|operador lineal]] $A: V \to V$, existe un único operador $A^{\dagger} : V \to V$ tal que
$$
(\ket{v}, A\ket{w}) = (A^{\dagger} \ket{v}, \ket{w})
$$
para todo $\ket{v}, \ket{w} \in V$. Este operador se llama el _adjunto_ o _conjugado Hermitiano_ de $A$.
### Representación matricial del adjunto
En cualquier [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para $V$, la [[Representación de operadores lineales con matrices|matriz que representa]] a $A^{\dagger}$ es la [[Matrices#Operaciones con matrices|conjugada transpuesta]] de la matriz que representa a $A$:
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