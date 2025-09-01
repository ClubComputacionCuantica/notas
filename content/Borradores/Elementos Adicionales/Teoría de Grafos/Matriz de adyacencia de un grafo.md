La _matriz de adyacencia_ de un [Grafo](Grafo.md) $G = (V, E)$ con $V = \{v_1, v_2, \ldots, v_N\}$ es una [matriz](../../../Elementos%20de%20Álgebra%20Lineal/Matrices/Matrices.md) $\Gamma \in \mathbb{R}^{N \times N}$ donde cada elemento $[\Gamma]_{ij}$ se define como:
$$
[\Gamma]_{ij} = \begin{cases} 
1 & \text{si } \{v_i, v_j\} \in E, \\
0 & \text{en caso contrario.}
\end{cases}
$$
Observe que la matriz de adyacencia es [simétrica](../../../Elementos%20de%20Álgebra%20Lineal/Matrices/Matrices%20simétricas.md) para grafos _no dirigidos_.

En el caso de [Grafos ponderados](Grafos%20ponderados.md), la matriz de adyacencia especifica el peso de la arista, i.e. 
$$
[\Gamma]_{ij} = \begin{cases} 
\phi(\{v_i, v_j\}) & \text{si } \{v_i, v_j\} \in E, \\
0 & \text{en caso contrario.}
\end{cases}
$$
donde $\phi: E \rightarrow \mathbb{R}$ es la función de peso.

#notación-elemento-de-matriz