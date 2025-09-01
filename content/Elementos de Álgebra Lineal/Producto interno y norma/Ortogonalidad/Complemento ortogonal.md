Sea $V$ un [espacio vectorial](Espacio%20vectorial.md) con [producto interno](../Producto%20interno.md) definido, y sea $W \subseteq V$ un subespacio. El _complemento ortogonal_ de $W$, denotado por $W^\perp$, se define como:
$$
W^\perp = \{ \ket{v} \in V : \langle v | w \rangle = 0 \text{ para todo } \ket{w} \in W \}
$$

Es decir, $W^\perp$ es el conjunto de todos los vectores en $V$ que son [ortogonales](Ortogonalidad%20y%20Ortonormalidad.md) a cada vector de $W$.

### Propiedades
1. $W^\perp$ es un subespacio de $V$.
2. $(W^\perp)^\perp$ contiene a $W$, y si $W$ es cerrado en la métrica inducida por el producto interno (por ejemplo, en un [espacio de Hilbert](Espacio%20de%20Hilbert.md)), entonces:
$$
(W^\perp)^\perp = W
$$
3. Si $V$ es un [espacio de Hilbert](Espacio%20de%20Hilbert.md) y $W$ es un [subespacio cerrado](Subespacio%20cerrado.md), entonces se tiene la [descomposición directa](Suma%20directa%20de%20subespacios.md):
$$
V = W \oplus W^\perp
$$

### Interpretación
El complemento ortogonal permite descomponer cualquier vector $\ket{v} \in V$ como:
$$
\ket{v} = \ket{w} + \ket{w^\perp}, \quad \text{con } \ket{w} \in W, \; \ket{w^\perp} \in W^\perp
$$

#algebra-lineal 