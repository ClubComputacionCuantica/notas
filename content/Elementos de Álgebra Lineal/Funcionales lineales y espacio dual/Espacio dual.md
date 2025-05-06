Sea $V$ un [[Espacio vectorial]] sobre un campo $\mathbb{F}$. El _espacio dual_ de $V$, denotado por $V^*$, es el conjunto de todas las funciones lineales $f: V \to \mathbb{F}$, llamadas [[Funcional lineal|funcionales lineales]].

El conjunto $V^*$ es un [[Espacio vectorial]] bajo las operaciones definidas punto a punto:

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

### Dual de un vector columna

Cuando $V = \mathbb{C}^n$, cada vector puede representarse como una matriz columna:
$$
\mathbf{v} = \begin{bmatrix} v_1 \\ \vdots \\ v_n \end{bmatrix}.
$$
En este contexto, un funcional lineal $f \in V^*$ es una aplicación lineal $f: V \to \mathbb{C}$. [[Teorema de representación de Riesz|Toda tal aplicación puede representarse como un producto matricial]]:
$$
f(\mathbf{w}) = \mathbf{v}^\dagger \mathbf{w},
$$
donde $\mathbf{v}^\dagger$ es el [[Matrices#Operaciones con matrices|transpuesto conjugado]] del vector $\mathbf{v}$. Esto define una función lineal, pues:

- Es lineal:  
   $$
   \mathbf{v}^\dagger (a \mathbf{w}_1 + b \mathbf{w}_2) = a\, \mathbf{v}^\dagger \mathbf{w}_1 + b\, \mathbf{v}^\dagger \mathbf{w}_2.
   $$

- Su codominio es $\mathbb{C}$: el producto de un vector fila $1 \times n$ con un vector columna $n \times 1$ es un escalar.

#algebra-lineal 