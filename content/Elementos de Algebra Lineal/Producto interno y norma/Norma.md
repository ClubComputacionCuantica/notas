Una _norma_ en un espacio vectorial $V$ sobre un campo $\mathbb{F}$ es una función $\| \cdot \| : V \rightarrow \mathbb{R}$ que asigna a cada vector $\mathbf{v} \in V$ un número real no negativo $\| \mathbf{v} \|$, y que satisface las siguientes propiedades:

1. **No negatividad**: Para todo $\mathbf{v} \in V$, se cumple que $\| \mathbf{v} \| \geq 0$. Además, $\| \mathbf{v} \| = 0$ si y solo si $\mathbf{v} = \mathbf{0}$, donde $\mathbf{0}$ es el vector cero en $V$.
    
2. **Homogeneidad escalar**: Para todo escalar $a \in \mathbb{F}$ y todo vector $\mathbf{v} \in V$, se cumple que $\| a \mathbf{v} \| = |a| \| \mathbf{v} \|$. Aquí, $|a|$ denota el valor absoluto de $a$ si $\mathbb{F} = \mathbb{R}$, o el módulo de $a$ si $\mathbb{F} = \mathbb{C}$.
    
3. **Desigualdad triangular**: Para cualesquiera vectores $\mathbf{u}, \mathbf{v} \in V$, se cumple que $\| \mathbf{u} + \mathbf{v} \| \leq \| \mathbf{u} \| + \| \mathbf{v} \|$.

Una norma en un espacio vectorial proporciona una noción de longitud para los vectores en tal espacio.