Una _forma sesquilineal_ es una generalización del concepto de [forma bilineal](Formas%20multilineales.md) para espacios vectoriales complejos. Es una aplicación que es conjugado‑lineal en el primer argumento y lineal en el segundo.

Sea $V$ un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) complejo. Una aplicación:
$$
\varphi: V \times V \to \mathbb{C}
$$
es una forma sesquilineal si cumple:

- Para todo $\mathbf{u}\in V$, la función $\varphi(\cdot,\mathbf{u})$ es **conjugado‑lineal**:
$$
\varphi(a\mathbf{v}_1 + b\mathbf{v}_2,\;\mathbf{u})
= \overline{a}\,\varphi(\mathbf{v}_1,\mathbf{u})
+ \overline{b}\,\varphi(\mathbf{v}_2,\mathbf{u})
$$
- Para todo $\mathbf{v}\in V$, la función $\varphi(\mathbf{v},\cdot)$ es **lineal**:
$$
\varphi\bigl(\mathbf{v},\;a\mathbf{u}_1 + b\mathbf{u}_2\bigr)
= a\,\varphi(\mathbf{v},\mathbf{u}_1)
+ b\,\varphi(\mathbf{v},\mathbf{u}_2)
$$

### Ejemplo
El [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) usual en $\mathbb{C}^n$ es una forma sesquilineal:
$$
\langle \mathbf{v}, \mathbf{w} \rangle
= \sum_{i=1}^n \overline{v_i}\,w_i
$$

#algebra-lineal 