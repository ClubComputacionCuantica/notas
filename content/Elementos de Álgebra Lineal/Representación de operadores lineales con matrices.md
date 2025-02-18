Un [[Operadores lineales|operador lineal]] $A: V \rightarrow W$ entre dos [[Espacio vectorial|espacios vectoriales]] $V$ y $W$ de dimensiones finitas $n$ y $m$, respectivamente, sobre el mismo campo $\mathbb{F}$, puede ser representado por una [[Matrices|matriz]] con entradas $a_{ij}$ respecto a [[Base y dimensión|bases]] fijas de $V$ y $W$. Sean $\{\ket{v_1}, \ket{v_2}, \ldots, \ket{v_n}\}$ una base de $V$ y $\{\ket{w_1}, \ket{w_2}, \ldots, \ket{w_m}\}$ una base de $W$. La [[Matrices|matriz]] asociada al operador lineal $A$, tiene dimensiones $m \times n$ y sus entradas $a_{ij}$ se definen de la siguiente manera:

Para cada $j$ (con $1 \leq j \leq n$), aplicamos $A$ al $j$-ésimo vector de la base de $V$, es decir, $A\ket{v_j}$. Este vector resultante se puede expresar como una combinación lineal de los vectores de la base de $W$:

$$A(\ket{v_j}) = a_{1j}\ket{w_1} + a_{2j}\ket{w_2} + \cdots + a_{mj}\ket{w_m},$$

donde $a_{ij} \in \mathbb{F}$ son los coeficientes de esta combinación lineal. Por tanto, la columna $j$-ésima de la matriz de $A$ contiene los coeficientes $a_{1j}, a_{2j}, \ldots, a_{mj}$ que representan la imagen de $\ket{v_j}$ bajo el operador, expresada en la base de $W$.

Así, la matriz completa queda definida como:
$$A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}.$$
Observe que usamos la misma notación para hablar tanto del operador, como de la matriz $A$.

Esta matriz $A$ permite calcular la imagen bajo el operador $A$, de cualquier vector $\ket{v} \in V$, expresado en la base de $V$, al realizar el producto de matrices entre $A$ y el vector de coordenadas de $\ket{v}$ en la misma base.

En nuestro contexto, las representaciones matriciales se hacen con respecto a [[Base y dimensión|bases]] [[Ortogonalidad y Ortonormalidad|ortonormales]] en [[Espacio de Hilbert|espacios de Hilbert]]. 

Sea $A:V\rightarrow W$, un operador lineal, y sean $\{v_i\}_{i=1}^n$ y $\{w_j\}_{j=1}^m$ respectivamente bases ortonormales para $V$ y $W$, espacios de Hilbert*. Considerando los [[Producto Ket-Bra|productos ket-bra]] y [[Representación de operadores lineales mediante productos ket-bra|su uso en la representación de operadores]], se tiene, adicionalmente, la representación matricial
$$
\begin{pmatrix}
\langle w_1 | A | v_1 \rangle & \langle w_1 | A | v_2 \rangle & \cdots & \langle w_1 | A | v_n \rangle \\
\langle w_2 | A | v_1 \rangle & \langle w_2 | A | v_2 \rangle & \cdots & \langle w_2 | A | v_n \rangle \\
\vdots & \vdots & \ddots & \vdots \\
\langle w_m | A | v_1 \rangle & \langle w_m | A | v_2 \rangle & \cdots & \langle w_m | A | v_n \rangle
\end{pmatrix}
$$
De hecho debe ocurrir que $\bra{w_j}A\ket{v_i} \equiv a_{ji}$ cuando $a_{ji}$ es el correspondiente coeficiente a la transformación sobre las mismas bases $\{v_i\}_{i=1}^n$ y $\{w_j\}_{j=1}^m$. %%POR REVISAR%%

\*_observe que puede omitirse parte de la estructura de Hilbert_

