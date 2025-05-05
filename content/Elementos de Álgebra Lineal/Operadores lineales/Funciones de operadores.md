Dada una función $f: \mathbb{C} \rightarrow \mathbb{C}$ y un [[Operadores normales|operador normal]] $A$ sobre un [[espacio de Hilbert]] de dimensión finita, es posible definir la evaluación de la función $f$ sobre el operador $A$.

Supongamos que $A$ admite una [[Teorema espectral|descomposición espectral]]:
$$
A = \sum_a a \ket{a}\bra{a},
$$
donde $\{\ket{a}\}$ es una [[Base y dimensión|base ortonormal]] de [[Eigenvalores y eigenvectores|eigenvectores]] de $A$, y los $a$ son los [[Eigenvalores y eigenvectores|eigenvalores]] correspondientes.

Entonces se define:
$$
f(A) = \sum_a f(a)\ket{a}\bra{a}
$$

Esta construcción se conoce como la _evaluación funcional_ de $f$ en $A$.
### Unicidad
Esta definición de $f(A)$ está bien definida y es única: si $A$ es diagonalizable mediante una base ortonormal (como ocurre con operadores normales), entonces cualquier función $f$ definida sobre el [[Espectro de un operador lineal|espectro]] de $A$ induce un operador que conmuta con $A$ y comparte sus [[Eigenvalores y eigenvectores|eigenvectores]], donde cada eigenvalor $a$ es reemplazado por $f(a)$.

#algebra-lineal 