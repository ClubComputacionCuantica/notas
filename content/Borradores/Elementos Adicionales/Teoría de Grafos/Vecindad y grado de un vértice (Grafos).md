La _vecindad_ de un vértice $v$ en un [Grafo](Grafo.md) $G = (V, E)$, denotada como $N_v$, se define como el conjunto de todos los vértices en $V$ que son adyacentes a $v$:
$$
N_v = \{u \in V : \{u, v\} \in E\}.
$$

Dado $v$, al numero $|N_v|$ se le conoce como el _grado_ de $v$ y se denota por $\deg(v)$. 
Es decir,
$$
\deg(v) = |N_v|.
$$

Si $\deg(v)=0$, se dice que $v$ es un vértice _aislado_. 