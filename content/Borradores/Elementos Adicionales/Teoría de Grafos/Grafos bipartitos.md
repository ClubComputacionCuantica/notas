Un _grafo bipartito_ es un [Grafo](Grafo.md) $G = (V, E)$ donde el conjunto de vértices $V$ se puede dividir en dos conjuntos disjuntos $V_1$ y $V_2$ de tal manera que cada arista en $E$ conecta un vértice en $V_1$ con un vértice en $V_2$ de modo que no existen aristas que conecten vértices dentro del mismo conjunto $V_1$ o $V_2$. Formalmente, para toda arista $\{u, v\} \in E$, se cumple que si $u \in V_1$ entonces $v \in V_2$.

En particular, los grafos bipartitos son [bicoloreables](Coloreabilidad%20de%20grafos.md).

Se verifica que un grafo es bipartito si y solo si no tiene [ciclos](Ciclos%20en%20un%20grafo.md) de longitud impar. #MISSING-PROOF 