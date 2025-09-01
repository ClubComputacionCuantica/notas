Un _espacio normado_ es un [espacio vectorial](../../Elementos%20de%20Álgebra%20Lineal/Fundamentos/Espacio%20vectorial.md) $V$ sobre un campo $\mathbb{F}$ (típicamente $\mathbb{R}$ o $\mathbb{C}$), dotado de una [norma](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/norma.md)
$$
\|\cdot\| : V \rightarrow \mathbb{R}.
$$
### Ejemplos comunes
- $\mathbb{R}^n$ o $\mathbb{C}^n$ con la norma euclidiana:
  $$
  \|x\|_2 = \left(\sum_{i=1}^n |x_i|^2\right)^{1/2}
  $$
- El espacio $\ell^p$ con:
  $$
  \|x\|_p = \left(\sum_{i=1}^\infty |x_i|^p\right)^{1/p}, \quad 1 \leq p < \infty
  $$

### Relación con métricas
Todo espacio normado [induce una métrica](Métrica%20inducida%20por%20la%20norma.md) $\mathrm{d}(u, v) = \|u - v\|.$

#analisis-funcional