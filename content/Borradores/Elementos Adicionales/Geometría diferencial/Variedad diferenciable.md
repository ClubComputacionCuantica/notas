Una _variedad diferenciable_ es un [[Espacio topológico|espacio topológico]] $M$ que localmente se parece al espacio euclídeo $\mathbb{R}^n$, y donde las transiciones entre coordenadas son funciones diferenciables. Más precisamente, una variedad diferenciable de dimensión $n$ es un par $(M, \mathcal{A})$ donde:

- $M$ es un [[Espacio topológico|espacio topológico]] de Hausdorff y [[Segundo axiomático numerable|segundo axiomático numerable]],
- $\mathcal{A}$ es un [[Atlas diferenciable|atlas diferenciable]]: una colección de pares $(U_i, \varphi_i)$ llamados _cartas_, donde:
  - $U_i \subset M$ es abierto,
  - $\varphi_i : U_i \to \varphi_i(U_i) \subset \mathbb{R}^n$ es un homeomorfismo,
  - Las funciones de transición $\varphi_j \circ \varphi_i^{-1}$ son funciones diferenciables (clase $\mathcal{C}^k$, usualmente $k = \infty$).

Cada punto $p \in M$ tiene una vecindad $U$ tal que existe una carta $(U, \varphi)$ con coordenadas locales $(x^1, \dots, x^n)$, es decir:
$$
\varphi(p) = (x^1(p), \dots, x^n(p)) \in \mathbb{R}^n.
$$

### Estructura
- Si todas las funciones de transición son $\mathcal{C}^\infty$, se dice que $M$ es una *variedad suave*.
- Si son $\mathcal{C}^\omega$, es una *variedad analítica real*.
- Si $M$ tiene estructura compleja, se habla de una *variedad compleja*.

### Ejemplos
1. $\mathbb{R}^n$ con la identidad como carta global.
2. La esfera $S^n$ con cartas dadas por proyección estereográfica.
3. El toro $\mathbb{T}^2 = \mathbb{R}^2/\mathbb{Z}^2$ con coordenadas periódicas.

#geometría-diferencial