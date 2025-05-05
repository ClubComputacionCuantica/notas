Sea $A: V \rightarrow V$ un [[Operadores normales|operador normal]] sobre un [[espacio de Hilbert]] $V$ de dimensión finita.

El _teorema espectral_ afirma que existe una [[Base y dimensión|base ortonormal]] $\{\ket{a}\}$ de $V$ formada por [[Eigenvalores y eigenvectores|eigenvectores]] de $A$, tal que $A$ se puede expresar como:
$$
A = \sum_a a \ket{a}\bra{a},
$$
donde $a$ recorre el conjunto de [[Eigenvalores y eigenvectores|eigenvalores]] de $A$. Esta expresión se conoce como la _descomposición espectral_ de $A$.

### Resultados
1. $A$ es [[Diagonalización|diagonalizable]] mediante una base ortonormal.
2. El operador $A$ actúa multiplicando por $a$ en la dirección de cada $\ket{a}$:
   $$A\ket{a} = a\ket{a}$$
3. La [[Funciones de operadores|evaluación funcional]] $f(A)$ está bien definida por:
   $$f(A) = \sum_a f(a) \ket{a} \bra{a}$$
4. Si $A$ es [[Operadores Hermitianos|Hermitiano]], los autovalores $a$ son reales.

### Observación
La descomposición espectral garantiza que cualquier operador normal puede representarse como suma ponderada de [[Proyector ortogonal|proyecciones ortogonales]].

#algebra-lineal 