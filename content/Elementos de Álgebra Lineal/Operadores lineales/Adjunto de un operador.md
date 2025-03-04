Sea $V$ un [[espacio vectorial]] de [[Base y dimensión|dimensión finita]] con producto interno $( \cdot , \cdot ) : V \times V \rightarrow \mathbb{F}$. Dado un [[Operadores lineales|operador lineal]] $A : V \rightarrow V$, existe un único operador $A^\dagger : V \rightarrow V$ tal que
$$
(\ket{v},A\ket{w})=(A^\dagger \ket{v},\ket{w})
$$
para todo $\ket{v}, \ket{w} \in V$.
Al operador $A^\dagger$ se le conoce como el _adjunto_ o _conjugado Hermitiano_ del operador $A$.

Por convención, el adjunto de un vector $\ket{v} \in V$, se define como 
$$
\ket{v}^\dagger \equiv \bra{v}
$$
#### Representación matricial del adjunto
Resulta que, en cualquier [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para $V$, la [[Representación de operadores lineales con matrices|matriz que representa]] a $A^\dagger$ es la [[Operaciones con matrices|conjugada transpuesta]] de la matriz que representa a $A$.

### Propiedades básicas
Para cualesquiera operadores $A,B:V \rightarrow V$, y cualesquiera vectores $\ket{v}, \ket{w} \in V$, se tiene 
1. $$(A^\dagger)^\dagger=A$$
2. $$(AB)^\dagger=B^\dagger A^\dagger$$
3. $$(A\ket{v})^\dagger=\bra{v}A^\dagger$$
4. %%PROOF?%% $$(\ket{w}\bra{v})^\dagger=\ket{v}\bra{w}$$
5. Para cualesquiera operadores $A_i : V \rightarrow V$, y cualesquiera escalares $a_i \in \mathbb{F}$, $$\left(\sum_{i} a_i A_i\right)^\dagger = \sum_{i} a_{i}^* A_{i}^\dagger.$$
#por-revisar 