Sea $V$ un [[Espacio vectorial]] sobre un campo $\mathbb{F}$ y sean $\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_n} \in V$. 
Una _combinación lineal_ de los vectores $\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_n}$ es cualquier vector $\mathbf{u} \in V$ que se puede escribir como:
$$
\mathbf{u} = a_1\mathbf{v_1} + a_2\mathbf{v_2} + \ldots + a_n\mathbf{v_n}
$$
donde $a_1, a_2, \ldots, a_n \in \mathbb{F}$ son escalares.

Decimos que el conjunto $\{\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_n}\}$ es _linealmente independiente_ si la única combinación lineal que da como resultado el vector cero es la trivial:
$$
a_1\mathbf{v_1} + a_2\mathbf{v_2} + \ldots + a_n\mathbf{v_n} = \mathbf{0} \implies a_1 = a_2 = \ldots = a_n = 0
$$
En caso contrario, el conjunto es _linealmente dependiente_.

**Observación**: Si $\mathcal{A} = \{\mathbf{v_1}, \ldots, \mathbf{v_n}\}$ es un conjunto linealmente independiente, entonces ningún vector $\mathbf{v_i} \in \mathcal{A}$ puede escribirse como combinación lineal de los otros vectores del conjunto:
$$
\mathbf{v_i} \neq a_1\mathbf{v_1} + \ldots + a_{i-1}\mathbf{v_{i-1}} + a_{i+1}\mathbf{v_{i+1}} + \ldots + a_n\mathbf{v_n}
$$
para ningunos escalares $a_j \in \mathbb{F}$.

Equivalente a decir: la representación
$$
\mathbf{v_i} = a_1\mathbf{v_1} + \ldots + a_n\mathbf{v_n}
$$
es única, con $a_j = 0$ para todo $j \neq i$ y $a_i = 1$.

#algebra-lineal 