El Teorema Espectral proporciona una caracterización fundamental de operadores lineales en espacios vectoriales con producto interno, especialmente en el contexto de operadores autoadjuntos (Hermitianos en el campo de los números complejos $\mathbb{C}$ o simétricos en el campo de los números reales $\mathbb{R}$). La declaración del teorema varía ligeramente dependiendo del contexto (espacios de dimensión finita vs. espacios de Hilbert de dimensión infinita), pero aquí se presenta una versión general aplicable a espacios de dimensión finita.

Para un operador lineal $A : V \rightarrow V$ en un espacio vectorial $V$ sobre el campo $\mathbb{C}$ o $\mathbb{R}$, equipado con un producto interno, y asumiendo que $A$ es autoadjunto (Hermitiano o simétrico, respectivamente), el Teorema Espectral establece que:

1. **Diagonalización**: Existe una base ortonormal de $V$ consistente enteramente de eigenvectores de $A$.
2. **Eigenvalores Reales**: Todos los eigenvalores de $A$ son reales.
3. **Descomposición Espectral**: El operador $A$ puede ser expresado como una combinación lineal de proyectores ortogonales sobre estos eigenvectores, es decir,
   $$
   A = \sum_{i=1}^{n} \lambda_i \ket{v_i}\bra{v_i},
   $$
   donde $\{\ket{v_i}\}_{i=1}^{n}$ es la base ortonormal de eigenvectores de $A$, $\{\lambda_i\}_{i=1}^{n}$ son los correspondientes eigenvalores reales, y $\ket{v_i}\bra{v_i}$ denota el operador proyector sobre el eigenvector $\ket{v_i}$.


#por-revisar

#pendiente 