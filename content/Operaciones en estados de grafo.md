Dado un [[estado de grafo]] $\ket{G}$ correspondiente a $G = (V,E)$, se pueden realizar las siguientes operaciones sobre el estado $\ket{G}$, correspondientes con operaciones sobre el grafo $G$ (up to local corrections):

- Vertex deletion. Se puede remover un vértice al aplicar una [[Medición de un qubit sobre la base computacional|medición sobre la base computacional]]. Todas las aristas relacionadas con este vértice son removidos también.
- Local complementation. Dado un vértice $a\in V$ la complementación local invierte el [[subgrafo]] inducido por la [[Vecindad y grado de un vértice (Grafos)|vecindad]] $N_a$. Esto puede realizarse al aplicar la operación $U_a^τ := e^{-i\frac{\pi}{4}X_a}\otimes_{b\in N_a} e^{i\frac{\pi}{4}Z_b}$ sobre $\ket{G}$. [^1]
- Edge addition/deletion. 
[^1]: Distributing Graph States Over Arbitrary Quantum Networks - Meignant et al. 