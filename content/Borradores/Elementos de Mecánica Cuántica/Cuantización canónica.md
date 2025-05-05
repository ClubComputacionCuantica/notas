La *cuantización canónica* es un procedimiento para construir una teoría cuántica a partir de un sistema clásico hamiltoniano. En esta formulación, se promueven los observables clásicos a operadores lineales en un [[espacio de Hilbert]], de modo que las relaciones de [[corchetes de Poisson]] se transforman (aproximadamente) en conmutadores de operadores.

Sea $(M, \omega)$ el [[espacio de fases clásico]], (típicamente $M = \mathbb{R}^{2n}$), con la [[forma simpléctica canónica]]:
$$
\omega = \sum_{i=1}^n dq^i \wedge dp_i,
$$
donde $(q^i, p_i)$ son las [[coordenadas canónicas]]. Sean $f, g \in C^\infty(M)$ [[observables clásicos canónicamente conjugados]].

La cuantización canónica se realiza en tres pasos principales:

- **Construcción del espacio de Hilbert**:
    Se asocia al sistema clásico un espacio de Hilbert complejo $\mathcal{H}$, típicamente $\mathcal{H} = L^2(\mathbb{R}^n)$, el [[espacio de funciones cuadrado-integrables]].
    
- **Mapeo de cuantización**
    Se define un mapeo
    $$
    Q: C^\infty(M) \to \mathrm{Op}(\mathcal{H}),
    $$
    donde $\mathrm{Op}(\mathcal{H})$ denota el conjunto de operadores (posiblemente no acotados) simétricos o autoadjuntos sobre $\mathcal{H}$. Este mapa debe satisfacer las siguientes propiedades para las coordenadas canónicas:
    $$
    \begin{align*}
        Q(q^i) &= \hat{q}^i, \quad Q(p_i) = \hat{p}_i, \\
        [\hat{q}^i, \hat{p}_j] &= i\hbar \delta^i_j \mathbb{I},
    \end{align*}
    $$
    y, más generalmente (cuando está bien definido),
    $$
    Q(\{f, g\}) \approx \frac{1}{i\hbar} [Q(f), Q(g)],
	$$
    donde$\{f, g\}$ es el [[corchete de Poisson]]. %%Ref?%% 

- **Evolución temporal**
    El hamiltoniano clásico $H(q, p)$ se cuantiza como el operador autoadjunto $\hat{H} = Q(H)$. La evolución del sistema cuántico está dada por la [[Ecuación de Schrödinger]].
#### Notas
- Debido al [[teorema de Groenewold–Van Hove]], no existe un mapa de cuantización que preserve exactamente toda la estructura del álgebra de Poisson para todos los observables. En consecuencia, la cuantización canónica proporciona solo una correspondencia aproximada para clases limitadas de funciones. %%Ref?%%

- Aunque este procedimiento funciona bien para muchos sistemas físicos, su generalización a espacios de fases curvos o a teorías de campo requiere otros enfoques, como la cuantización geométrica o la cuantización por deformación.

#mecanica-cuantica 