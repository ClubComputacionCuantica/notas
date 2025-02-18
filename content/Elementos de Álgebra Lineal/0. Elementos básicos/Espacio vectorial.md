Un _espacio vectorial_ $V$ sobre un campo $\mathbb{F}$ es un conjunto equipado con dos operaciones llamadas _suma de vectores_ y _multiplicación por escalares_, asociadas a todos los elementos $\mathbf{u} \in V$, llamados _vectores_ y todos los elementos $a \in \mathbb{F}$, llamados _escalares_ y que satisfacen los siguientes axiomas:

1. **Clausura bajo la suma de vectores**: Si $\mathbf{u}, \mathbf{v} \in V$, entonces $\mathbf{u} + \mathbf{v} \in V$.
2. **Conmutatividad de la suma de vectores**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ para todos $\mathbf{u}, \mathbf{v} \in V$.
3. **Asociatividad de la suma de vectores**: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$ para todos $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$.
4. **Elemento neutro de la suma de vectores**: Existe un elemento $\mathbf{0} \in V$ tal que $\mathbf{u} + \mathbf{0} = \mathbf{u}$ para todo $\mathbf{u} \in V$.
5. **Inverso aditivo de vectores**: Para cada $\mathbf{u} \in V$, existe un elemento $-\mathbf{u} \in V$ tal que $\mathbf{u} + (-\mathbf{u}) = \mathbf{0}$.
6. **Clausura bajo la multiplicación por escalares**: Si $a \in \mathbb{F}$ y $\mathbf{v} \in V$, entonces $a\mathbf{v} \in V$.
7. **Asociatividad de la multiplicación por escalares**: $a(b\mathbf{v}) = (ab)\mathbf{v}$ para todos $\mathbf{v} \in V$, $a, b \in \mathbb{F}$.
8. **Elemento neutro de la multiplicación por escalares**: $1\mathbf{v} = \mathbf{v}$ para todo $\mathbf{v} \in V$, donde 1 es el elemento neutro multiplicativo en $\mathbb{F}$.
9. **Distributividad de escalares respecto a la suma de vectores**: $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$ para todos $\mathbf{u}, \mathbf{v} \in V$, $a \in \mathbb{F}$.
10. **Distributividad de vectores respecto a la suma de escalares**: $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$ para todos $\mathbf{v} \in V$, $a, b \in \mathbb{F}$.

Formalmente, la suma de vectores es una función $+: V \times V \rightarrow V$ que toma dos vectores $\mathbf{u}, \mathbf{v} \in V$ y asigna un tercer vector en $V$, denotado por $\mathbf{u} + \mathbf{v}$. 
Y el producto por escalar es una función $\cdot: \mathbb{F} \times V \rightarrow V$ que toma un escalar $a \in \mathbb{F}$ y un vector $\mathbf{v} \in V$, y asigna un tercer vector en $V$, denotado por $a\mathbf{v}$.

En nuestro estudio en general asumimos $\mathbb{F} = \mathbb{C}.$
