El [[Producto de operadores lineales]] es consistente con el producto de sus [[Representación de operadores lineales con matrices|representaciones matriciales]] en el sentido de que si tenemos dos [[Operadores lineales]] $A: V \rightarrow W$ y $B: W \rightarrow U$, con sus respectivas representaciones matriciales $A$ y $B$ respecto a bases elegidas para $V$, $W$, y $U$, entonces la representación matricial del operador compuesto $BA: V \rightarrow U$ es el producto de matrices $BA$.

La consistencia entre el producto de operadores lineales y el producto de sus representaciones matriciales se basa en la estructura algebraica de las transformaciones lineales y cómo estas se manifiestan en las operaciones entre matrices. Cuando tenemos dos operadores lineales, $A: V \rightarrow W$ y $B: W \rightarrow Z$, donde $V$, $W$, y $Z$ son espacios vectoriales sobre el mismo campo $\mathbb{F}$, y estas transformaciones están representadas por matrices $[A]$ y $[B]$ en bases dadas para $V$, $W$, y $Z$, entonces el operador compuesto $BA$ que mapea $V$ a $Z$ se puede representar por el producto matricial $[B][A]$.

Sea $\{\ket{v_1}, \ldots, \ket{v_n}\}$ una base de $V$, $\{\ket{w_1}, \ldots, \ket{w_m}\}$ una base de $W$, y $\{\ket{z_1}, \ldots, \ket{z_l}\}$ una base de $Z$. La matriz $[A]$ tiene dimensiones $m \times n$ y la matriz $[B]$ tiene dimensiones $l \times m$. El producto matricial $[B][A]$ produce una matriz de $l \times n$, que corresponde a las dimensiones de salida de $B$ y de entrada de $A$.

El proceso de multiplicación de matrices refleja la composición de las acciones de $A$ y $B$ sobre los vectores base. Para cada vector base $\ket{v_j}$ en $V$, la transformación $A$ produce un vector en $W$, que puede expresarse como una combinación lineal de los vectores base de $W$. Luego, al aplicar $B$ sobre este resultado, obtenemos un vector en $Z$, que a su vez se expresa como una combinación lineal de los vectores base de $Z$.

Formalmente, el elemento $(i, j)$ de la matriz producto $[B][A]$ se calcula sumando los productos de los correspondientes elementos de la fila $i$ de $[B]$ y la columna $j$ de $[A]$, es decir,

$$([B][A])_{ij} = \sum_{k=1}^{m} b_{ik}a_{kj},$$

donde $b_{ik}$ son las entradas de $[B]$ y $a_{kj}$ son las entradas de $[A]$. Esta operación matricial captura la esencia de cómo se compone la acción de $B$ después de $A$ sobre cualquier vector $\ket{v} \in V$, proyectando así la estructura de la composición de operadores lineales en el álgebra de matrices.

#por-revisar 