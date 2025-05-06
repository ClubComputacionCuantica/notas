Sea $V$ un [[Espacio vectorial]] sobre un campo $\mathbb{F}$, y sean $U, W \subseteq V$ subespacios. Se dice que $V$ es la _suma directa_ de $U$ y $W$, y se escribe:
$$
V = U \oplus W,
$$
si se cumplen las siguientes condiciones:

1. Todo vector $\ket{v} \in V$ se puede escribir de forma única como:
$$
\ket{v} = \ket{u} + \ket{w}, \quad \text{con } \ket{u} \in U, \; \ket{w} \in W.
$$
2. La intersección es trivial:
$$
U \cap W = \{0\}
$$

Esto garantiza que $U + W = V$ y que la descomposición es única. La suma directa se puede generalizar a más de dos subespacios.

### Resultados
- Si $V$ está dotado de un [[producto interno]] $U$ es un [[subespacio cerrado]] y $W = U^\perp$ es su [[complemento ortogonal]], entonces
$$
V = U \oplus U^\perp.
$$

#algebra-lineal 