Una _función biyectiva_ o _biyección_ es una función $f: A \to B$ entre dos conjuntos que es a la vez:

1. **Inyectiva** (o uno a uno):
   $$
   f(x_1) = f(x_2) \Rightarrow x_1 = x_2
   $$
   para todo $x_1, x_2 \in A$.

2. **Suprayectiva**:
   $$
   \text{Para todo } y \in B, \text{existe } x \in A \text{ tal que } f(x) = y.
   $$

Por tanto, una función biyectiva establece una correspondencia uno a uno y sobre entre los elementos de $A$ y $B$.

### Propiedades
- Una función $f$ es biyectiva si y solo si posee una función inversa $f^{-1}: B \to A$ tal que:
- $$
  f^{-1}(f(x)) = x \text{ para todo } x \in A, \quad f(f^{-1}(y)) = y \text{ para todo } y \in B.
  $$
- Si $f: A \to B$ y $g: B \to C$ son biyectivas, entonces la composición $g \circ f: A \to C$ también es biyectiva.

### Ejemplo
- La función $f: \mathbb{R} \to \mathbb{R}$ dada por $f(x) = x + 3$ es biyectiva.

#fundamentos
