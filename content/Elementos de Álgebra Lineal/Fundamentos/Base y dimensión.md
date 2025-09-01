## Base de un espacio vectorial
Una _base_ de un [espacio vectorial](Espacio%20vectorial.md) $V$ sobre un campo $\mathbb{F}$ es un conjunto de vectores en $V$, [linealmente independientes](Combinaciones%20lineales%20e%20independencia%20lineal.md) y que [generan](Subespacio%20generado%20por%20un%20conjunto%20de%20vectores.md) a $V$. 

Formalmente, un conjunto $\mathcal{B} = \{\mathbf{v_1}, \mathbf{v_2}, \ldots, \mathbf{v_n}\}$ es una base de $V$ si y solo si:

1. $\mathcal{B}$ es [linealmente independiente](Combinaciones%20lineales%20e%20independencia%20lineal.md). 
    
2. $span\{\mathcal{B}\}=V$, esto es, cada vector en $V$ puede ser expresado como una combinación lineal de los vectores en $\mathcal{B}$: para todo $\mathbf{u} \in V$, existen escalares $b_1, b_2, \ldots, b_n \in \mathbb{F}$ tal que $\mathbf{u} = b_1\mathbf{v_1} + b_2\mathbf{v_2} + \ldots + b_n\mathbf{v_n}$.

Se verifica que si $\mathcal{B}_1$ y $\mathcal{B}_2$ son bases de $V$, entonces $|\mathcal{B}_1|=|\mathcal{B}_2|$ (i.e. $\mathcal{B}_1$ y $\mathcal{B}_2$ tienen el mismo número de elementos). Esto motiva la siguiente definición. 
## Dimensión de un espacio vectorial
La _dimensión_ de un espacio vectorial $V$, denotada por $\dim(V)$, se define como el número de vectores en una base de $V$. Para un espacio vectorial finito, la dimensión es un entero no negativo que representa el _mínimo_ de vectores linealmente independientes necesarios para generar $V$.

En nuestro estudio nos limitamos a espacios vectoriales con dimensión finita.

- Todo espacio vectorial $V$ sobre un campo $\mathbb{F}$ tiene al menos una base.
    
- Si un espacio vectorial $V$ tiene una base consistente en $n$ vectores y si ${\ket{u_1}, \ket{u_2}, \ldots, \ket{u_m}}$ es un conjunto linealmente independiente de vectores en $V$, entonces $m \leq n$. Además, es posible reemplazar $m$ vectores en la base de $V$ por los vectores $\ket{u_1}, \ket{u_2}, \ldots, \ket{u_m}$, obteniendo una nueva base de $V$.
    
- Si $W$ es un subespacio de $V$ con dimensión finita, entonces existe un subespacio $U$ de $V$ tal que $V = W \oplus U$ ([suma directa](Suma%20directa%20de%20subespacios.md)), y $\dim(V) = \dim(W) + \dim(U)$.

#algebra-lineal 