Una _base_ de un [[espacio vectorial]] $V$ sobre un campo $\mathbb{F}$ es un conjunto de vectores en $V$, linealmente independientes y que generan a $V$. Formalmente, un conjunto $\mathcal{B} = \{\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_n}\}$ es una base de $V$ si y solo si:

1. $\mathcal{B}$ es [[Combinaciones lineales e independencia lineal|linealmente independiente]]. 
    
2. $span\{\mathcal{B}\}=V$, esto es, cada vector en $V$ puede ser expresado como una combinación lineal de los vectores en $\mathcal{B}$: para todo $\mathbf{u} \in V$, existen escalares $b_1, b_2, \ldots, b_n \in \mathbb{F}$ tal que $\mathbf{u} = b_1\mathbf{v_1} + b_2\mathbf{v_2} + \ldots + b_n\mathbf{v_n}$.

Es fácil verificar que si $\mathcal{B}_1$ y $\mathcal{B}_2$ son bases de $V$, entonces $|\mathcal{B}_1|=|\mathcal{B}_2|$ (i.e. $\mathcal{B}_1$ y $\mathcal{B}_2$ tienen el mismo número de elementos). Esto motiva la siguiente definición. 

La _dimensión_ de un espacio vectorial $V$, denotada por $\dim(V)$, se define como el número de vectores en una base de $V$. Para un espacio vectorial finito, la dimensión es un entero no negativo que representa el _mínimo_ de vectores linealmente independientes necesarios para generar $V$.

En nuestro estudio nos limitamos a espacios vectoriales con dimensión finita.

1. **Teorema de la Existencia de Bases**: Todo espacio vectorial $V$ sobre un campo $\mathbb{F}$ tiene al menos una base.  %%Source?%%
    
2. **Teorema de la Unicidad de la Dimensión**: Todas las bases de un espacio vectorial $V$ tienen el mismo número de elementos. Este número, conocido como la dimensión de $V$, denotada $\dim(V)$, es una característica bien definida del espacio.
    
3. **Teorema de Intercambio de Steinitz**: Si un espacio vectorial $V$ tiene una base consistente en $n$ vectores y si ${\ket{u_1}, \ket{u_2}, \ldots, \ket{u_m}}$ es un conjunto linealmente independiente de vectores en $V$, entonces $m \leq n$. Además, es posible reemplazar $m$ vectores en la base de $V$ por los vectores $\ket{u_1}, \ket{u_2}, \ldots, \ket{u_m}$, obteniendo una nueva base de $V$.
    
4. **Teorema de la Dimensión para Subespacios**: Si $W$ es un subespacio de un espacio vectorial $V$, entonces $\dim(W) \leq \dim(V)$. Si $W$ es finito-dimensional, entonces existe un subespacio $U$ de $V$ tal que $V$ es la suma directa de $W$ y $U$, es decir, $V = W \oplus U$, y $\dim(V) = \dim(W) + \dim(U)$.
    
5. **Teorema del Complemento**: Para cada subespacio $W$ de un espacio vectorial $V$, existe al menos un subespacio complementario $U$ tal que $V$ es la suma directa de $W$ y $U$, es decir, $V = W \oplus U$.
#por-revisar 