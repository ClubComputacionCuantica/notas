Sea $V$ un [[espacio vectorial]] sobre un campo $\mathbb{F}$. El _espacio dual_ de $V$, denotado por $V^*$, es el conjunto de todas las funciones lineales $f: V \to \mathbb{F}$, llamadas [[Funcional lineal|funcionales lineales]].

El conjunto $V^*$ es un [[espacio vectorial]] bajo las operaciones definidas punto a punto:

- Suma: $\ (f + g)(\mathbf{v}) := f(\mathbf{v}) + g(\mathbf{v})$,
- Producto por escalar: $\ (a f)(\mathbf{v}) := a \cdot f(\mathbf{v})$,

para todo $f, g \in V^*$, $a \in \mathbb{F}$ y $\mathbf{v} \in V$.

### Dimensión del espacio dual
Si $V$ es de dimensión finita, entonces $\dim V^* = \dim V$.

Dada una [[Base y dimensión|base]] $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ de $V$, existe una base $\{f^1, \dots, f^n\}$ de $V^*$, la *base dual*, tal que:
$$
f^i(\mathbf{v}_j) = \delta^i_j,
$$
donde $\delta^i_j$ es la [[delta de Kronecker]].

#algebra-lineal 