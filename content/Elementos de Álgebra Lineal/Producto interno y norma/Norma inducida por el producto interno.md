La _norma inducida por el producto interno_ de un vector $\mathbf{u}$ en un [[espacio vectorial]] $V$ sobre $\mathbb{R}$ o $\mathbb{C}$ se define como la raíz cuadrada del producto interno del vector consigo mismo, es decir:

$$\| \mathbf{v} \| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$$

## Resultados
Se verifican $\forall\hspace{4pt}\mathbf{u}, \mathbf{v} \in V$:
- **Regla del paralelogramo**: 
$$\| \mathbf{u} + \mathbf{v} \|^2 + \| \mathbf{u} - \mathbf{v} \|^2 = 2\| \mathbf{u} \|^2 + 2\| \mathbf{v} \|^2
	$$
- **[[Desigualdad de Cauchy-Schwarz]]**: $|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \|\mathbf{v}\|$.
 
- **Identidad de polarización**: Para un espacio vectorial sobre $\mathbb{C}$:  $$\langle \mathbf{u} | \mathbf{v} \rangle = \frac{1}{4} \left( \| \mathbf{u} + \mathbf{v} \|^2 - \| \mathbf{u} - \mathbf{v} \|^2 + i\| \mathbf{u} + i\mathbf{v} \|^2 - i\| \mathbf{u} - i\mathbf{v} \|^2 \right)$$
#algebra-lineal #analisis-funcional