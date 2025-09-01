Una _matriz_ $A$ de tamaño $m \times n$ sobre un campo $\mathbb{F}$ es una disposición rectangular de elementos de $\mathbb{F}$, con $m$ filas y $n$ columnas. Se representa como:

$$
\begin{bmatrix} 
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn} 
\end{bmatrix}
$$

donde $a_{ij} \in \mathbb{F}$ es el elemento en la fila $i$ y columna $j$.

### Operaciones con matrices

1. **Suma de matrices**:
   Dadas $A, B \in \mathbb{F}^{m \times n}$, su suma es:
   $$
   (A + B)_{ij} = a_{ij} + b_{ij}
   $$

2. **Multiplicación por un escalar**:
   Dado $b \in \mathbb{F}$ y $A \in \mathbb{F}^{m \times n}$:
   $$
   (bA)_{ij} = b \cdot a_{ij}
   $$
3. **Producto de matrices**:
   Si $A$ es de tamaño $m \times n$ y $B$ de tamaño $n \times p$, entonces $C = AB$ es una matriz de tamaño $m \times p$ dada por:
   $$
   c_{ij} = \sum_{k=1}^n a_{ik} b_{kj}
   $$

4. **Transposición**:
   Dada una matriz $A \in \mathbb{F}^{m \times n}$, su transpuesta $A^T \in \mathbb{F}^{n \times m}$ está dada por:
   $$
   (A^T)_{ij} = a_{ji}
   $$
5. **Conjugada transpuesta (o adjunta)**:
   Si $A \in \mathbb{C}^{m \times n}$, su conjugada transpuesta se denota por $A^{\dagger}$ y se define como:
   $$
   A^{\dagger} = (\overline{A})^T
   $$
   Esto es, se aplica primero la transposición y luego la conjugación compleja:
   $$
   (A^{\dagger})_{ij} = \overline{a_{ji}}
   $$
### Estructura algebraica
- El conjunto de todas las matrices $m \times n$ con entradas en $\mathbb{F}$, denotado $\mathbb{F}^{m \times n}$, forma un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) sobre $\mathbb{F}$ bajo las operaciones de suma y producto por escalar.

#algebra-lineal 