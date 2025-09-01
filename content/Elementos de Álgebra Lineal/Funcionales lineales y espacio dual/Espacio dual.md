Sea $V$ un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) sobre un campo $\mathbb{F}$. El _espacio dual_ de $V$, denotado por $V^*$, es el conjunto de todas las funciones lineales $f: V \to \mathbb{F}$, llamadas [funcionales lineales](Funcional%20lineal.md).

El conjunto $V^*$ es un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) bajo las operaciones definidas punto a punto:

- Suma: $\ (f + g)(\mathbf{v}) := f(\mathbf{v}) + g(\mathbf{v})$,
- Producto por escalar: $\ (a f)(\mathbf{v}) := a \cdot f(\mathbf{v})$,

para todo $f, g \in V^*$, $a \in \mathbb{F}$ y $\mathbf{v} \in V$.

### Dimensión del espacio dual
Si $V$ es de dimensión finita, entonces $\dim V^* = \dim V$.

Dada una [base](../Fundamentos/Base%20y%20dimensión.md) $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ de $V$, existe una base $\{f^1, \dots, f^n\}$ de $V^*$, la *base dual*, tal que:
$$
f^i(\mathbf{v}_j) = \delta^i_j,
$$
donde $\delta^i_j$ es la [Delta de Kronecker](../../Borradores/Elementos%20Adicionales/Delta%20de%20Kronecker.md).

### Dual de un vector columna

Cuando $V = \mathbb{C}^n$, cada vector puede representarse como una matriz columna:
$$
\mathbf{v} = \begin{bmatrix} v_1 \\ \vdots \\ v_n \end{bmatrix}.
$$
En este contexto, un funcional lineal $f \in V^*$ es una aplicación lineal $f: V \to \mathbb{C}$. [Toda tal aplicación puede representarse como un producto matricial](Teorema%20de%20representación%20de%20Riesz.md):
$$
f(\mathbf{w}) = \mathbf{v}^\dagger \mathbf{w},
$$
donde $\mathbf{v}^\dagger$ es el [](../Matrices/Matrices.md#Operaciones%20con%20matrices|transpuesto%20conjugado) del vector $\mathbf{v}$. Esto define una función lineal, pues:

- Es lineal:  
   $$
   \mathbf{v}^\dagger (a \mathbf{w}_1 + b \mathbf{w}_2) = a\, \mathbf{v}^\dagger \mathbf{w}_1 + b\, \mathbf{v}^\dagger \mathbf{w}_2.
   $$

- Su codominio es $\mathbb{C}$: el producto de un vector fila $1 \times n$ con un vector columna $n \times 1$ es un escalar.

#algebra-lineal 