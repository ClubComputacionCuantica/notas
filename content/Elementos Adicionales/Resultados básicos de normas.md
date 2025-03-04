Sea $V$ un espacio vectorial sobre $\mathbb{F}$ (con $\mathbb{F} = \mathbb{R}$ o $\mathbb{C}$) con norma $\| \cdot \| : V \rightarrow \mathbb{R}$.

1. $\| \cdot \|$ induce una [[Espacio métrico|métrica]] $d: V \times V \rightarrow \mathbb{R}$ en $V$ definida por:
$$
d(\ket{u}, \ket{v}) = \|\ket{u} - \ket{v}\|
$$

Si $V$ está dotado con un producto interno y $\| \cdot \| : V \rightarrow \mathbb{R}$ es su [[Norma inducida por el producto interno|norma inducida]].

1. **Regla del paralelogramo**: Se verifica para todos $\mathbf{u}, \mathbf{v} \in V$
$$\| \mathbf{u} + \mathbf{v} \|^2 + \| \mathbf{u} - \mathbf{v} \|^2 = 2\| \mathbf{u} \|^2 + 2\| \mathbf{v} \|^2
	$$
1. **[[Desigualdad de Cauchy-Schwarz]]**: $|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \|\mathbf{v}\|$, donde $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle}$ es la [[Norma inducida por el producto interno]].
 
3. **Identidad de polarización**: Para un espacio vectorial sobre $\mathbb{C}$:  $$\langle \mathbf{u} | \mathbf{v} \rangle = \frac{1}{4} \left( \| \mathbf{u} + \mathbf{v} \|^2 - \| \mathbf{u} - \mathbf{v} \|^2 + i\| \mathbf{u} + i\mathbf{v} \|^2 - i\| \mathbf{u} - i\mathbf{v} \|^2 \right)$$