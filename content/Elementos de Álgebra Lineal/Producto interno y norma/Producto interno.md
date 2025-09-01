El _producto interno_, en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ sobre $\mathbb{R}$ o $\mathbb{C}$, se define como una operación binaria $\langle \cdot | \cdot \rangle : V \times V \rightarrow \mathbb{F}$ (que toma dos vectores y devuelve un escalar), satisfaciendo las siguientes propiedades para todos $\mathbf{u},\mathbf{v},\mathbf{w} \in V$:

1. **Conjugada simétrica**: $\langle \mathbf{u} | \mathbf{v} \rangle = \langle \mathbf{v} | \mathbf{u} \rangle ^*$.
2. **Linealidad en el segundo argumento**[^1]: $\langle \mathbf{w} | a\mathbf{u} + b\mathbf{v} \rangle = a\langle \mathbf{w} | \mathbf{u} \rangle + b\langle \mathbf{w} | \mathbf{v} \rangle$ para todos los escalares complejos $a, b$.
3. **Definida positiva**: $\langle \mathbf{u} | \mathbf{u} \rangle \geq 0$ y $\langle \mathbf{u} | \mathbf{u} \rangle = 0$ si y solo si $\mathbf{u} = \mathbf{0}$.
## Resultados

- **Linealidad conjugada en el primer argumento**:
$$\langle a\mathbf{u} + b\mathbf{v} | \mathbf{w} \rangle = a^*\langle \mathbf{u} | \mathbf{w} \rangle + b^*\langle \mathbf{v} | \mathbf{w} \rangle$$
- **[Desigualdad de Cauchy-Schwarz](Desigualdad%20de%20Cauchy-Schwarz.md)**: $|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \|\mathbf{v}\|$, donde $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle}$ ([norma inducida por el producto interno](norma%20inducida%20por%20el%20producto%20interno.md)).
 
- **$\langle \mathbf{v} | \mathbf{u} \rangle = \langle \mathbf{v} | \mathbf{w} \rangle, \forall \mathbf{v} \in V \Rightarrow \mathbf{u} = \mathbf{w}$**.
## producto interno en Cn
El producto interno en nuestro caso corresponde al *producto interno usual* en $\mathbb{C}^n$: $$
\langle \mathbf{u} | \mathbf{v} \rangle = \sum_{i=1}^{n} u_i^* v_i = \begin{pmatrix} u_1^* & u_2^* & \cdots & u_n^* \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}
$$para $\mathbf{u}=\begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{pmatrix}$ y $\mathbf{v}=\begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$, donde $v_i^*$ representa el conjugado complejo de $v_i$.

[^1]: La propiedad de linealidad en el segundo argumento es una convención particular en la mecánica cuántica, donde se utiliza la notación bra-ket. Esta convención difiere de la definición estándar en matemáticas puras, donde la linealidad se define en el primer argumento.

#algebra-lineal 