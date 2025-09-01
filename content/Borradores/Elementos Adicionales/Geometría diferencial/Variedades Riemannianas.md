Una _variedad Riemanniana_ es una [variedad diferenciable](Variedad%20diferenciable.md) $M$ junto con un [tensor](../../../Elementos%20de%20Álgebra%20Lineal/Formas%20multilineales/Tensor.md) métrico definido positivo $g$, llamado _métrica Riemanniana_, que en cada punto $p \in M$ asigna un producto interno $g_p$ sobre el [espacio tangente](Espacio%20tangente) $T_pM$ de modo que:

- Para cada par de campos vectoriales $X, Y$ sobre $M$, la aplicación
$$
p \mapsto g_p(X_p, Y_p)
$$
es una función suave sobre $M$.

Formalmente, una variedad Riemanniana es el par $(M, g)$ donde:
- $M$ es una [variedad diferenciable](Variedad%20diferenciable.md) de dimensión $n$.
- $g$ es una [sección](Campo%20tensorial) suave del fibrado de 2-tensores simétricos $(T^*M \otimes T^*M)$ tal que $g_p$ es un producto interno para cada $p \in M$.

### Propiedades

- La métrica Riemanniana permite definir la [longitud de curvas](Longitud%20de%20curvas), [ángulos](Ángulo%20entre%20vectores), [normas](norma%20de%20vectores), y [distancias](Distancia%20entre%20puntos) dentro de la variedad.

- Induce una estructura [métrica](../Espacio%20métrico.md) local sobre $M$, y se puede definir la [geometría intrínseca](Geodésica) de $M$.

- La métrica también permite definir el [conexión de Levi-Civita](Conexión%20de%20Levi-Civita) y el [tensor de curvatura](Tensor%20de%20curvatura) asociado.

### Ejemplos

1. El espacio euclídeo $\mathbb{R}^n$ con el producto escalar estándar:
$$
g_p(u, v) = u \cdot v
$$
es una variedad Riemanniana trivial.

2. La esfera $S^n$ con la métrica inducida de $\mathbb{R}^{n+1}$.

3. Toda [superficie](Superficie%20diferenciable) regular en $\mathbb{R}^3$ hereda una métrica Riemanniana natural.

#geometría-diferencial
