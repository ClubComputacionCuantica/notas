Sea $V$ un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) sobre un campo $\mathbb{F}$. El _doble dual_ de $V$, denotado como $V^{**}$, se define como el [dual](Espacio%20dual.md) del espacio dual $V^*$:
$$
V^{**} := (V^*)^*.
$$

Cada elemento de $V^{**}$ es una aplicación lineal $\Psi: V^* \to \mathbb{F}$.

Existe una correspondencia natural entre vectores $\mathbf{v} \in V$ y funcionales del doble dual, definida por:
$$
\Phi: V \longrightarrow V^{**}, \quad \mathbf{v} \mapsto \phi_{\mathbf{v}},
$$
donde $\phi_{\mathbf{v}}(f) = f(\mathbf{v})$ para todo $f \in V^*$.

Esta correspondencia se conoce como el *morfo dual canónico*.

### Propiedades

- **Linealidad**: Si $\alpha, \beta \in \mathbb{F}$ y $\mathbf{u}, \mathbf{v} \in V$, entonces:
$$
\phi_{\alpha \mathbf{u} + \beta \mathbf{v}}(f) = f(\alpha \mathbf{u} + \beta \mathbf{v}) = \alpha f(\mathbf{u}) + \beta f(\mathbf{v}) = \alpha \phi_{\mathbf{u}}(f) + \beta \phi_{\mathbf{v}}(f)
$$ 
para todo $f \in V^*$.

- **Inyectividad**: Si $\phi_{\mathbf{u}} = \phi_{\mathbf{v}}$, entonces $f(\mathbf{u}) = f(\mathbf{v})$ para todo $f \in V^*$. Esto implica $\mathbf{u} = \mathbf{v}$, ya que los funcionales lineales separan puntos.

- **Suprayectividad** (dimensión finita): Si $\dim V < \infty$, entonces para todo $\Psi \in V^{**}$ existe $\mathbf{v} \in V$ tal que $\Psi(f) = f(\mathbf{v})$ para todo $f \in V^*$. Así, $\Phi$ es sobreyectiva y por tanto un isomorfismo.

#algebra-lineal 