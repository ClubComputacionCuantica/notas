Un [operador lineal](Operadores%20lineales.md) $A : V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ sobre $\mathbb{R}$ o $\mathbb{C}$, equipado con un [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md), se dice que es _positivo_ si para todo vector $\ket{v} \in V$, se cumple que $(\ket{v},A\ket{v})$ es real y no negativo:
$$
\braket{v|A|v} \equiv (\ket{v}, A\ket{v}) \geq 0.
$$

Además, $A$ se dice _estrictamente positivo_ o _positivo definido_ si:
$$
(\ket{v}, A\ket{v}) > 0 \quad \text{para todo } \ket{v} \neq 0.
$$

Alternativamente, se dice que $A \in \mathcal{L}(V)$ es _semidefinido positivo_ si existe un operador $S \in \mathcal{L}(V)$ tal que
$$
A = S^\dagger S,
$$
donde $S^\dagger$ es el [adjunto](Adjunto%20de%20un%20operador.md) de $S$.

Al conjunto de operadores semidefinidos positivos sobre $V$ se le denota por:
$$
Pos(V)
$$

### Resultados

1. Todo operador positivo es [Hermitiano](Operadores%20Hermitianos.md).

2. Para cualquier operador $A$, el operador $A^\dagger A$ es positivo:
$$
\braket{v|A^\dagger A|v} = \|A\ket{v}\|^2 \geq 0.
$$

3. Los eigenvalores de un operador positivo son reales y no negativos. Si es estrictamente positivo, todos los eigenvalores son estrictamente positivos.

4. Si $A$ es positivo, entonces existe otro operador Hermitiano $B$ tal que $A = B^2$. En espacios de Hilbert se habla de la raíz cuadrada positiva de $A$.

### Observaciones
- La condición $A = S^\dagger S$ proporciona una caracterización constructiva de positividad.

#algebra-lineal 

