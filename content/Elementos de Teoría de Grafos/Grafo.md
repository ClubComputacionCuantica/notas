Un grafo $G$ se define como un par ordenado $G = (V, E)$ donde

- $V$ es un conjunto finito de puntos llamados _vértices_ o _nodos_, y
- $E$ es un conjunto de pares no ordenados de elementos distintos de $V$ cuyos elementos son llamados _aristas_ o _enlaces_.

Se dice que dos vertices $u,v\in V$ son _adyacentes_ si $\{u,v\}\in E$.

Un grafo _simple_ se refiere a un grafo que no tiene _bucles_, i.e. aristas adyacentes a sí mismas, ni aristas multiples, i.e. no hay más de una arista que conecte el mismo par de vértices.

Dado que hay $\binom{N}{2} = \frac{N(N-1)}{2}$ pares únicos de vértices en un conjunto de $N$ vértices $V$, y cada par puede tener una arista o no, hay $2^{\binom{N}{2}}$ configuraciones posibles. I.e. el _número de grafos simples distintos_ para $V$ es
$$
2^\binom{N}{2}
$$
#pendiente