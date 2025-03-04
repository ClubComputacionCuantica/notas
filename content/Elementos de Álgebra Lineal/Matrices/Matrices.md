Una matriz $A$ de tamaño $m \times n$ sobre un campo $\mathbb{F}$ es una disposición rectangular de elementos de $\mathbb{F}$, con $m$ filas y $n$ columnas. Comúnmente se representa como:

$$\begin{bmatrix} 
a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} 
\end{bmatrix}$$

donde $a_{ij} \in \mathbb{F}$ es el elemento de la $i$-ésima fila y la $j$-ésima columna.

Se pueden definir las siguientes operaciones con matrices:

1. **Suma de Matrices**: Dadas dos matrices $A$ y $B$ de la misma dimensión $m \times n$, su suma, $C = A + B$, es una matriz de dimensión $m \times n$ donde cada elemento $c_{ij}$ se calcula como $c_{ij} = a_{ij} + b_{ij}$.
    
2. **Producto por un Escalar**: Dada una matriz $A$ de dimensión $m \times n$ y un escalar $b \in \mathbb{F}$, el producto $b A$ es una matriz de dimensión $m \times n$ donde cada elemento $(b A)_{ij}$ es $b a_{ij}$.

Resulta que el conjunto de todas las matrices de tamaño $m \times n$ con entradas en el campo de los números complejos $\mathbb{C}$, denotado como $\mathbb{C}^{m \times n}$, forma un [[espacio vectorial]] sobre $\mathbb{C}$ con las operaciones de suma y producto por escalar mencionadas.