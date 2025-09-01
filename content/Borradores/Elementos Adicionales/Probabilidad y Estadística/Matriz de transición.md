La _matriz de transición_ de una [cadena de Markov](Cadenas%20de%20Markov.md) describe las probabilidades de pasar de un estado a otro en un paso de tiempo. Formalmente, se define como sigue:

Sea $\{X_n\}_{n \in \mathbb{N}}$ una cadena de Markov con un conjunto finito de estados $S = \{s_1, s_2, \ldots, s_n\}$. La matriz de transición $P$ es una [matriz](../../../Elementos%20de%20Álgebra%20Lineal/Matrices/Matrices.md) cuadrada de $n \times n$ donde cada elemento $[P_{ij}]$ representa la probabilidad de transición del estado $i$ al estado $j$ en un solo paso de tiempo. Esto es:
$$
[P_{ij}] = P(X_{n+1} = j | X_n = i),
$$
donde $P(X_{n+1} = j | X_n = i)$ es la [Probabilidad condicional](Probabilidad%20condicional.md) de moverse al estado $j$ dado que la cadena está actualmente en el estado $i$.

La matriz de transición satisface que cada
- $P_{ij} \geq 0$ para todo $i, j$.
- Cada fila de la matriz suma 1, $\sum_{j=1}^{n} P_{ij} = 1$ para todo $i$. (La suma de las probabilidades de transición desde cualquier estado hacia todos los posibles estados siguientes es 1).