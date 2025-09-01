Sea $X$ un conjunto y sea $(G,\circ)$ un [Grupo](Grupo.md). 
Una _acción de grupo izquierda_ es una operación $\phi: G\times X \rightarrow X$, 
$$
g\ast x := \phi(g,x)\in X
$$
tal que, $\forall g,h\in G$, $\forall x\in X$:
$$
\begin{align}
&i)\hspace{12pt} g\ast(h\ast x) = (g\circ h)\ast x \\
&ii)\hspace{32pt} e\ast x = x
\end{align}
$$
Una _acción de grupo derecha_ es un mapeo $\phi: X\times G \rightarrow X$, 
$$
x\ast g := \phi(x,g)\in X
$$
tal que, $\forall g,h\in G$, $\forall x\in X$:
$$
\begin{align}
&i)\hspace{12pt} (x\ast g)\ast h = x \ast (g\circ h) \\
&ii)\hspace{32pt} x\ast e = x
\end{align}
$$