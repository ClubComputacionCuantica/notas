Los *estados de grafo* son una subclase de [[Estados multipartitos|estados cuánticos multipartitos]] que se asocian y representan con un [[grafo]] $G=(V,E)$.

#OQN Los estados de grafo pueden ser descritos al aplicar una compuerta [[Controlled-Z|Z-controlada]], $CZ = diag(1,1,1,-1)$ entre cualesquiera dos qubits que están conectados por un vértice en $E$. Además, preparamos todos los qubits en $V$ en el estado $\ket{+}$. Entonces, el estado de grafo es
$$
|G\rangle = \prod_{(i, j) \in E} CZ_{ij} \left(\bigotimes_{v \in V} |+\rangle_v\right)
$$
Equivalentemente, el estado de grafo $\ket{G}$ se define como el único [[Eigenvalores y eigenvectores|eigenestado]] con eigenvalor +1 de los [[Establizador|estabilizadores]]
$$
K_a = \sigma_x^{(a)} \prod_{(a,b)\in E}\sigma_z^{(b)}
$$
para todo $a\in V$.

Entanglement in Graph States and its Applications:
	https://arxiv.org/abs/quant-ph/0602096

Multiparty entanglement in graph states:
	https://journals.aps.org/pra/abstract/10.1103/PhysRevA.69.062311

#graph-local-clifford graph states have been used in multipartite purification schemes[^1] and a measurement-based computational model has been designed which uses a particular graph state, namely the cluster state, as a universal resource for quantum computation[^2]

#graph-local-clifford : Graphical description of the action of local Clifford transformations on graph states M. Van den Nest, J. Dehaene, B. De Moor

#pendiente 

[^1]: Multiparticle entanglement purification for graph states - W. Dür, H. Aschauer, H.J. Briegel
[^2]: Measurement-based quantum computation with cluster states - R. Raussendorf, D.E. Browne, H.J. Briegel