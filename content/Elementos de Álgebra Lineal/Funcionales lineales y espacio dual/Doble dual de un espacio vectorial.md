El _doble dual_ de un [[espacio vectorial]] $V$, denotado como $V^{**}$, se define como el [[Espacio dual]] del dual de $V$, i.e. $V^{**}\coloneqq(V^*)^*$. Cada elemento de $V^{**}$, por lo tanto, es una función que toma como entrada un funcional lineal en $V^*$ y devuelve un escalar en $\mathbb{F}$. 

Para cada $\mathbf{v} \in V$, existe una correspondencia natural en $V^{**}$ definida por la evaluación $\phi_{\mathbf{v}}: V^* \rightarrow \mathbb{F}$, donde $\phi_{\mathbf{v}}(f) = f(\mathbf{v})$ para todo $f \in V^*$. En el caso de que $V$ sea un espacio vectorial de dimensión finita, esta correspondencia establece un [[Isomorfismo de espacios vectoriales|isomorfismo]] entre $V$ y $V^{**}$. Con mayor precision, 
$$
\begin{array}{c}{\Phi:V\rightarrow V^{**}}\\ \hspace{12pt} \mathbf{v} \mapsto \phi_\mathbf{v}\end{array}
$$
es un isomorfismo de espacios vectoriales.

%%Para demostrar que la correspondencia natural $\phi: V \rightarrow V^{**}$, definida por $\phi(\vec{v})(f) = f(\vec{v})$ para todo $f \in V^*$, es un isomorfismo, necesitamos mostrar que $\phi$ es lineal, inyectiva y sobreyectiva.

\textbf{Linealidad}

Para demostrar la linealidad, consideremos dos vectores $\vec{u}, \vec{v} \in V$ y dos escalares $\alpha, \beta \in \mathbb{F}$. Necesitamos demostrar que $\phi(\alpha\vec{u} + \beta\vec{v}) = \alpha\phi(\vec{u}) + \beta\phi(\vec{v})$. Esto significa que para todo $f \in V^*$, se debe cumplir que:

$$
\phi(\alpha\vec{u} + \beta\vec{v})(f) = (\alpha\phi(\vec{u}) + \beta\phi(\vec{v}))(f)
$$

Por la definición de $\phi$ y la linealidad de $f$, tenemos:

$$
\phi(\alpha\vec{u} + \beta\vec{v})(f) = f(\alpha\vec{u} + \beta\vec{v}) = \alpha f(\vec{u}) + \beta f(\vec{v}) = \alpha\phi(\vec{u})(f) + \beta\phi(\vec{v})(f)
$$

Esto demuestra la linealidad de $\phi$.

\textbf{Inyectividad}

Para demostrar que $\phi$ es inyectiva, supongamos que $\phi(\vec{u}) = \phi(\vec{v})$. Necesitamos demostrar que $\vec{u} = \vec{v}$. La igualdad $\phi(\vec{u}) = \phi(\vec{v})$ implica que para todo $f \in V^*$, se tiene que $f(\vec{u}) = f(\vec{v})$. Si $\vec{u} \neq \vec{v}$, entonces existe al menos un funcional lineal $f \in V^*$ tal que $f(\vec{u} - \vec{v}) \neq 0$ debido a la propiedad de separación de los funcionales lineales. Esto contradice la suposición inicial, por lo tanto, $\vec{u} = \vec{v}$, lo que demuestra que $\phi$ es inyectiva.

\textbf{Sobreyectividad}

Para demostrar la sobreyectividad, necesitamos mostrar que para cada $\Psi \in V^{**}$, existe un $\vec{v} \in V$ tal que $\phi(\vec{v}) = \Psi$. Dado $\Psi \in V^{**}$, definimos un $\vec{v} \in V$ tal que para todo $f \in V^*$, $\Psi(f) = f(\vec{v})$. La existencia de tal $\vec{v}$ se garantiza por la definición de los funcionales lineales y la estructura de $V$. Por lo tanto, $\phi(\vec{v})(f) = f(\vec{v}) = \Psi(f)$ para todo $f \in V^*$, lo que demuestra que $\phi$ es sobreyectiva.

Dado que $\phi$ es lineal, inyectiva y sobreyectiva, $\phi$ es un isomorfismo de $V$ a $V^{**}$.
%% #por-revisar 