Sea $X$ un conjunto finito de $n$ elementos. Una _permutación_ de $X$ es una biyección $\sigma: X \rightarrow X$. 
El conjunto de todas las permutaciones de $X$ se denota por $S_n$, conocido como el _[[grupo]] simétrico_ de grado $n$.
$$
\sigma \in S_n \iff \sigma: X \rightarrow X \text{ es biyectiva}
$$
### Ejemplo
Sea $X = \{1, 2, 3\}$. Entonces una permutación posible es:
$$
\sigma = 
\begin{pmatrix}
1 & 2 & 3 \\
2 & 3 & 1
\end{pmatrix}
$$
## Propiedades
- La composición de dos permutaciones es otra permutación.
- Toda permutación tiene una permutación inversa: $\sigma^{-1} \in S_n$.
- $S_n$ es un grupo bajo la composición de funciones.
- El número total de permutaciones de $n$ elementos es $n!$

### Notación
Las permutaciones usualmente se representan como
- Forma de dos líneas: 
$$
\sigma = 
\begin{pmatrix}
1 & 2 & 3 \\
3 & 1 & 2
\end{pmatrix}
$$
- Forma cíclica: $\sigma = (1\ 3\ 2)$.

Amas indican que $1 \mapsto 3$, $3 \mapsto 2$, y $2 \mapsto 1$.

## Resultados
- Toda permutación $\sigma \in S_n$ puede expresarse como producto de transposiciones (ciclos de longitud 2).

 #matematicas-discretas