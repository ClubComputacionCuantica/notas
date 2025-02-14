Observe que el producto interno es _lineal conjugado_ en la primera entrada.

Sea $V$ un espacio vectorial sobre $\mathbb{F}$ (con $\mathbb{F}=$ $\mathbb{R}$ o $\mathbb{C}$) con [[producto interno]] $\langle \cdot | \cdot \rangle : V \times V \rightarrow \mathbb{F}$, y sean $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w} \in V$ y $c \in \mathbb{F}$:

1. **Linealidad conjugada en el primer argumento**:
$$\langle a\mathbf{u} + b\mathbf{v} | \mathbf{w} \rangle = a^*\langle \mathbf{u} | \mathbf{w} \rangle + b^*\langle \mathbf{v} | \mathbf{w} \rangle$$
2. **[[Desigualdad de Cauchy-Schwarz]]**: $|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \|\mathbf{v}\|$, donde $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle}$ es la [[norma inducida por el producto interno]].
 
3. **$\langle \mathbf{v} | \mathbf{u} \rangle = \langle \mathbf{v} | \mathbf{w} \rangle, \forall \mathbf{v} \in V \Rightarrow \mathbf{u} = \mathbf{w}$**: 
	(Observe que $\langle \mathbf{v} | \mathbf{u} - \mathbf{w} \rangle = 0$ para todo $\mathbf{v} \in V$, implica $\mathbf{u} - \mathbf{w} = 0$.)