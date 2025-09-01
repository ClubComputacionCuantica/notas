La *entropía de von Neumann* es una medida de la incertidumbre cuántica asociada a un estado descrito por un [operador de densidad](Operadores%20de%20densidad.md) $\rho$ en un [espacio de Hilbert](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) $\mathcal{H}$. Se define como:
$$
S(\rho) = -\mathrm{Tr}(\rho \log \rho),
$$
donde $\log \rho$ es el logaritmo matricial de $\rho$ y la [traza](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Traza%20de%20un%20operador%20lineal.md) se toma sobre todo el espacio de Hilbert.

Esta definición es una generalización cuántica de la [entropía de Shannon](../Elementos%20de%20Información%20Clásica/Entropía%20de%20Shannon.md) y cumple propiedades análogas:
## Propiedades
- $S(\rho) = 0$ si y solo si $\rho$ describe un estado puro.
- $S(\rho)$ es máxima cuando $\rho$ es el estado completamente mixto, es decir, $\rho = I/d$, donde $d$ es la dimensión de $\mathcal{H}$.
- Es invariante bajo transformaciones unitarias: $S(U \rho U^\dagger) = S(\rho)$.
- Es subaditiva: para sistemas compuestos $AB$, se cumple:
$$
S(\rho_{AB}) \leq S(\rho_A) + S(\rho_B).
$$

Cuando $\rho$ se expresa en su forma diagonal mediante su [descomposición espectral](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Teorema%20Espectral.md):
$$
\rho = \sum_i \lambda_i \ket{i}\bra{i},
$$
donde $\lambda_i$ son los [eigenvalores](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de $\rho$ y $\ket{i}$ sus eigenvectores ortonormales, entonces:
$$
S(\rho) = -\sum_i \lambda_i \log \lambda_i.
$$

Esta expresión deja ver que la entropía de von Neumann depende solo del espectro de la matriz densidad y mide cuán "mezclado" está el estado cuántico.

#informacion-cuantica