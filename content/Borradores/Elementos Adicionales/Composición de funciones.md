Sean $f: A \to B$ y $g: B \to C$ dos funciones. La _composición_ de $f$ y $g$ es la función:
$$
(g \circ f): A \to C, \quad (g \circ f)(x) := g(f(x))
$$
Es decir, primero se aplica $f$ a la entrada $x$, y luego se aplica $g$ al resultado.
### Propiedades
- **Asociatividad**: Si $h: C \to D$ es otra función, entonces:$$
  h \circ (g \circ f) = (h \circ g) \circ f
  $$
- **Identidad**: Para toda función $f: A \to B$, se tiene:
  $$
  \mathrm{id}_B \circ f = f = f \circ \mathrm{id}_A
  $$
  donde $\mathrm{id}_X$ es la función identidad sobre el conjunto $X$.

#fundamentos 