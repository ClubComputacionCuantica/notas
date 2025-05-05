La *entropía de von Neumann* es una medida de la incertidumbre cuántica asociada a un estado descrito por un [[Operadores de densidad|operador de densidad]] $\rho$ en un [[espacio de Hilbert]] $\mathcal{H}$. Se define como:
$$
S(\rho) = -\mathrm{Tr}(\rho \log \rho),
$$
donde $\log \rho$ es el logaritmo matricial de $\rho$ y la [[Traza de un operador lineal|traza]] se toma sobre todo el espacio de Hilbert.

Esta definición es una generalización cuántica de la [[entropía de Shannon]] y cumple propiedades análogas:
## Propiedades
- $S(\rho) = 0$ si y solo si $\rho$ describe un estado puro.
- $S(\rho)$ es máxima cuando $\rho$ es el estado completamente mixto, es decir, $\rho = I/d$, donde $d$ es la dimensión de $\mathcal{H}$.
- Es invariante bajo transformaciones unitarias: $S(U \rho U^\dagger) = S(\rho)$.
- Es subaditiva: para sistemas compuestos $AB$, se cumple:
$$
S(\rho_{AB}) \leq S(\rho_A) + S(\rho_B).
$$

Cuando $\rho$ se expresa en su forma diagonal mediante su [[Teorema espectral|descomposición espectral]]:
$$
\rho = \sum_i \lambda_i \ket{i}\bra{i},
$$
donde $\lambda_i$ son los [[Eigenvalores y eigenvectores|eigenvalores]] de $\rho$ y $\ket{i}$ sus eigenvectores ortonormales, entonces:
$$
S(\rho) = -\sum_i \lambda_i \log \lambda_i.
$$

Esta expresión deja ver que la entropía de von Neumann depende solo del espectro de la matriz densidad y mide cuán "mezclado" está el estado cuántico.

#informacion-cuantica