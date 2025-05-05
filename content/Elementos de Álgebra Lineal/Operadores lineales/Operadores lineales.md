Un _operador lineal_ entre dos [[espacio vectorial|espacios vectoriales]] $V$ y $W$ sobre el mismo campo $\mathbb{F}$ es una función $A: V \rightarrow W$ que satisface las siguientes dos propiedades para todos los vectores $\ket{u}, \ket{v} \in V$ y para todo escalar $a \in \mathbb{F}$:

1. **Aditividad**: $A(\ket{u} + \ket{v}) = A(\ket{u}) + A(\ket{v})$.
2. **Homogeneidad**: $A(a\ket{u}) = a A(\ket{u})$.

Usualmente escribimos $A\ket{u}$ para denotar $A(\ket{u})$.
A menudo se usa la notación "techo", e.g. $\hat{A}$ para denotar a un operador.

Nótese que no se hace distinción entre operadores y *transformaciones lineales*.
### Los operadores lineales quedan completamente determinados por su acción sobre una base
Sea $\{\ket{v_1}, \ket{v_2}, \ldots, \ket{v_n}\}$ una base de $V$. Entonces, para cualquier $\ket{v} \in V$:
$$
\ket{v} = a_1\ket{v_1} + a_2\ket{v_2} + \cdots + a_n\ket{v_n}, \quad a_i \in \mathbb{F}
$$
Y por linealidad:
$$
A(\ket{v}) = a_1 A\ket{v_1} + a_2 A\ket{v_2} + \cdots + a_n A\ket{v_n}
$$
Es decir, conocer $A\ket{v_i}$ para cada $\ket{v_i}$ en la base de $V$ determina completamente el operador $A$.

## Estructura algebraica
El conjunto $\mathcal{L}(V, W)$ se define como el conjunto de todos los [[operadores lineales]] de $V$ en $W$. Este conjunto posee una estructura de [[espacio vectorial]] sobre $\mathbb{F}$ bajo las siguientes operaciones:

1. **Suma de operadores**:
$$
(A + B)\ket{u} = A\ket{u} + B\ket{u} \quad \text{para todo } \ket{u} \in V
$$
para cualesquiera $A, B \in \mathcal{L}(V, W)$.

2. **Multiplicación por escalares**:
$$
(aA)\ket{u} = a(A\ket{u}) \quad \text{para todo } \ket{u} \in V, \ a \in \mathbb{F}
$$

Además, si $V = W$, el conjunto $\mathcal{L}(V, V)$ puede dotarse de una estructura de [[Álgebra|álgebra asociativa]] sobre $\mathbb{F}$, usando la composición de operadores:
## Producto de operadores lineales
Sea $A: V \rightarrow W$ y $B: W \rightarrow U$ dos [[operadores lineales]], donde $V$, $W$ y $U$ son [[Espacio vectorial|espacios vectoriales]] sobre un mismo campo $\mathbb{F}$. El _producto_ o _composición_ de $A$ y $B$ es el operador:
$$
BA: V \rightarrow U
$$
definido por:
$$
(BA)(\mathbf{v}) = B(A(\mathbf{v}))
$$
para todo $\mathbf{v} \in V$.

Esto corresponde a la [[composición de funciones]], aplicada al contexto de operadores lineales.

### Propiedades
- **Linealidad**: Si $A$ y $B$ son lineales, entonces $BA$ también lo es.

- **Asociatividad**: Si $C: U \rightarrow Y$ es otro operador lineal, entonces:
$$
C(BA) = (CB)A
$$
- **Conmutatividad**: En general, $AB \neq BA$.

### Representación matricial
El producto de operadores lineales es consistente con el producto de sus [[Representación de operadores lineales con matrices|representaciones matriciales]]. Si $[A]$ es una matriz de tamaño $m \times n$ y $[B]$ de tamaño $l \times m$, entonces la matriz del operador compuesto $BA: V \rightarrow U$ es la matriz producto:
$$
[BA]_{ij} = \sum_{k=1}^m b_{ik} a_{kj}
$$
lo cual refleja que:
$$
(BA)(\ket{v_j}) = B(A(\ket{v_j}))
$$

#algebra-lineal 