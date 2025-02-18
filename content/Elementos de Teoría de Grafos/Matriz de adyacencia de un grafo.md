La _matriz de adyacencia_ de un [[grafo]] $G = (V, E)$ con $V = \{v_1, v_2, \ldots, v_N\}$ es una [[Matrices|matriz]] $\Gamma \in \mathbb{R}^{N \times N}$ donde cada elemento $[\Gamma]_{ij}$ se define como:
$$
[\Gamma]_{ij} = \begin{cases} 
1 & \text{si } \{v_i, v_j\} \in E, \\
0 & \text{en caso contrario.}
\end{cases}
$$
Observe que la matriz de adyacencia es [[Matrices simétricas|simétrica]] para grafos _no dirigidos_.

En el caso de [[grafos ponderados]], la matriz de adyacencia especifica el peso de la arista, i.e. 
$$
[\Gamma]_{ij} = \begin{cases} 
\phi(\{v_i, v_j\}) & \text{si } \{v_i, v_j\} \in E, \\
0 & \text{en caso contrario.}
\end{cases}
$$
donde $\phi: E \rightarrow \mathbb{R}$ es la función de peso.

#notación-elemento-de-matriz