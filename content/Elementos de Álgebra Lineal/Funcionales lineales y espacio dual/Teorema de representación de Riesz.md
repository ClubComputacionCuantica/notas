Sea $V$ un [espacio de Hilbert](../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) complejo con [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) $\langle \cdot | \cdot \rangle:V\times V \rightarrow \mathbb{C}$. El *teorema de representación de Riesz* establece que todo [Funcional lineal](Funcional%20lineal.md) continuo $f: V \to \mathbb{C}$ puede representarse como un producto interno con un vector fijo de $V$.

Formalmente:
	Para todo $f \in V^*$ existe un único vector $\mathbf{v}_f \in V$ tal que 
$$
f(\mathbf{w}) = \langle \mathbf{v}_f, \mathbf{w} \rangle \quad \text{para todo } \mathbf{w} \in V.
$$
Además, la aplicación $f \mapsto \mathbf{v}_f$ es lineal y define un [isomorfismo](../Fundamentos/Isomorfismo%20de%20espacios%20vectoriales.md) anti-lineal entre $V^*$ y $V$:
$$
V^* \cong V.
$$
### Resultados

Todo funcional lineal continuo sobre un espacio de Hilbert complejo es de la forma:
$$
f(\mathbf{w}) = \langle \mathbf{v}, \mathbf{w} \rangle,
$$
para un único $\mathbf{v} \in V$.

#algebra-lineal  #analisis-funcional 