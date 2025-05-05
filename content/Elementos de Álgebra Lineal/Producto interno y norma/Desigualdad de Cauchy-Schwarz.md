Sea $V$ un [[espacio vectorial]] sobre el campo $\mathbb{R}$ o $\mathbb{C}$, equipado con un producto interno $\langle \cdot | \cdot \rangle$. Para cualesquiera dos vectores $\mathbf{u}, \mathbf{v} \in V$, la *desigualdad de Cauchy-Schwarz* se expresa como:
$$
|\langle \mathbf{u} | \mathbf{v} \rangle| \leq \|\mathbf{u}\| \cdot \|\mathbf{v}\|,
$$
donde $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u} | \mathbf{u} \rangle}$ y $\|\mathbf{v}\| = \sqrt{\langle \mathbf{v} | \mathbf{v} \rangle}$ son las normas de $\mathbf{u}$ y $\mathbf{v}$, respectivamente, inducidas por el producto interno.

Esta desigualdad implica que el producto interno entre dos vectores no puede exceder el producto de sus normas. 
### Igualdad
Se tiene igualdad si y solo si $\mathbf{u}$ y $\mathbf{v}$ son linealmente dependientes, es decir, si uno es múltiplo escalar del otro.

### Interpretación geométrica
Esta desigualdad permite definir el ángulo entre vectores vía:
$$
\cos \theta = \frac{\Re(\langle \mathbf{u} | \mathbf{v} \rangle)}{\|\mathbf{u}\|\|\mathbf{v}\|},
$$
siempre que $\mathbf{u}, \mathbf{v} \neq 0$.

#algebra-lineal 