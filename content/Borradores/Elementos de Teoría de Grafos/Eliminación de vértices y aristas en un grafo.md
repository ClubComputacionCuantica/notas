La _eliminación de un vértice $v$_ en un [[grafo]] $G = (V, E)$, resulta en un nuevo grafo $G' = (V', E')$, denotado por $G\setminus v$, tal que

- $V' = V \setminus \{v\}$,
- $E' = \{e \in E : v \notin e\}$.

Para un subconjunto de vertices $U\subset V$, la _eliminación de $U$ del grafo $G$_ corresponde con eliminar cada vértice $u\in U$. I.e. resulta en un nuevo grafo $G' = (V', E')$, denotado como $G \setminus U$, donde:

- $V' = V \setminus U$,
- $E' = \{e \in E : e \cap U = \emptyset\}$.

Adicionalmente, en un ligero abuso de notación, dado un subconjunto de aristas $F \subset E$, denotamos por $G \setminus F$ el grafo resultante de _eliminar las aristas_ en $F$ de $G$. Así, el grafo resultante $G' = (V', E')$ se define por:

- $V' = V$,
- $E' = E \setminus F$.