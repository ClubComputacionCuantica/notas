Sea $V$ un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) sobre un campo $\mathbb{F}$ con [dimensión](../Fundamentos/Base%20y%20dimensión.md) finita $n$, y sea $W$ un [subespacio](../Fundamentos/Subespacios.md) de $V$ de dimensión $k$. Supongamos que existe una [base](../Fundamentos/Base%20y%20dimensión.md) [ortonormal](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) $\{\ket{1}, \ket{2}, ..., \ket{n}\}$ de $V$ tal que los primeros $k$ vectores $\{\ket{1}, ..., \ket{k}\}$ forman una base ortonormal de $W$.

Un _proyector ortogonal_ $P: V \rightarrow V$ es un [operador lineal](Operadores%20lineales.md) que cumple:
1. **Idempotencia:** $P^2 = P$.
2. **[Hermiticidad](Operadores%20Hermitianos.md):** $P = P^\dagger$.

El operador $P$ proyecta ortogonalmente sobre $W$, es decir, para todo $\ket{v} \in V$, se tiene $P\ket{v} \in W$, y $\ket{v} - P\ket{v} \in W^\perp$.

En términos de la base ortonormal anterior, el proyector puede escribirse como:
$$
P = \sum_{i=1}^{k} \ket{i}\bra{i},
$$
donde $\bra{i}$ es el vector dual correspondiente a $\ket{i}$, con $\braket{i|j} = \delta_{ij}$.

Es común referirse al _espacio de $P$_ como el subespacio sobre el cual proyecta, en este caso $W$.

También se define el _complemento ortogonal del proyector_ $P$ como el operador:
$$
Q = I - P,
$$
el cual es también un proyector ortogonal sobre el [complemento ortogonal](../Producto%20interno%20y%20norma/Ortogonalidad/Complemento%20ortogonal.md) $W^\perp = \operatorname{span}\{\ket{k+1}, ..., \ket{n}\}$.

### Resultados
- Los [eigenvalores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de un proyector ortogonal son necesariamente $0$ o $1$.
- Si $P$ y $Q = I - P$ son proyectores ortogonales, entonces $PQ = QP = 0$ y $P + Q = I$.

#algebra-lineal 