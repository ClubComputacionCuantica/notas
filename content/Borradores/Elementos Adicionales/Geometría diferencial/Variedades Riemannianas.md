Una _variedad Riemanniana_ es una [[Variedad diferenciable|variedad diferenciable]] $M$ junto con un [[Tensor|tensor]] métrico definido positivo $g$, llamado _métrica Riemanniana_, que en cada punto $p \in M$ asigna un producto interno $g_p$ sobre el [[Espacio tangente|espacio tangente]] $T_pM$ de modo que:

- Para cada par de campos vectoriales $X, Y$ sobre $M$, la aplicación
$$
p \mapsto g_p(X_p, Y_p)
$$
es una función suave sobre $M$.

Formalmente, una variedad Riemanniana es el par $(M, g)$ donde:
- $M$ es una [[Variedad diferenciable|variedad diferenciable]] de dimensión $n$.
- $g$ es una [[Campo tensorial|sección]] suave del fibrado de 2-tensores simétricos $(T^*M \otimes T^*M)$ tal que $g_p$ es un producto interno para cada $p \in M$.

### Propiedades

- La métrica Riemanniana permite definir la [[Longitud de curvas|longitud de curvas]], [[Ángulo entre vectores|ángulos]], [[Norma de vectores|normas]], y [[Distancia entre puntos|distancias]] dentro de la variedad.

- Induce una estructura [[Espacio métrico|métrica]] local sobre $M$, y se puede definir la [[Geodésica|geometría intrínseca]] de $M$.

- La métrica también permite definir el [[Conexión de Levi-Civita|conexión de Levi-Civita]] y el [[Tensor de curvatura|tensor de curvatura]] asociado.

### Ejemplos

1. El espacio euclídeo $\mathbb{R}^n$ con el producto escalar estándar:
$$
g_p(u, v) = u \cdot v
$$
es una variedad Riemanniana trivial.

2. La esfera $S^n$ con la métrica inducida de $\mathbb{R}^{n+1}$.

3. Toda [[Superficie diferenciable|superficie]] regular en $\mathbb{R}^3$ hereda una métrica Riemanniana natural.

#geometría-diferencial
