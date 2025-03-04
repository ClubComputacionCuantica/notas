El _producto interno_, en un [[espacio vectorial]] $V$ sobre $\mathbb{R}$ o $\mathbb{C}$, se define como una operación binaria $\langle \cdot | \cdot \rangle : V \times V \rightarrow \mathbb{F}$ que toma dos vectores y devuelve un escalar, satisfaciendo los siguientes axiomas para todos $\mathbf{u},\mathbf{v},\mathbf{w} \in V$:

1. **Conjugada simétrica**: $\langle \mathbf{u} | \mathbf{v} \rangle = \langle \mathbf{v} | \mathbf{u} \rangle ^*$.
2. **Linealidad en el segundo argumento**: $\langle \mathbf{w} | a\mathbf{u} + b\mathbf{v} \rangle = a\langle \mathbf{w} | \mathbf{u} \rangle + b\langle \mathbf{w} | \mathbf{v} \rangle$ para todos los escalares complejos $a, b$. %%La propiedad de linealidad en el segundo argumento es una convención particular en la mecánica cuántica, donde se utiliza la notación bra-ket. Esta convención difiere de la definición estándar en matemáticas puras, donde la linealidad se define en el primer argumento.%%
3. **Positivo definido**: $\langle \mathbf{u} | \mathbf{u} \rangle \geq 0$ y $\langle \mathbf{u} | \mathbf{u} \rangle = 0$ si y solo si $\mathbf{u} = \mathbf{0}$.

El producto interno en nuestro caso corresponde al producto interno usual en $\mathbb{C}^n$: $$
\langle \mathbf{u} | \mathbf{v} \rangle = \sum_{i=1}^{n} u_i^* v_i = \begin{pmatrix} u_1^* & u_2^* & \cdots & u_n^* \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}
$$para $\mathbf{u}=\begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{pmatrix}$ y $\mathbf{v}=\begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$.
$v_i^*$ representa el conjugado complejo de $v_i$.

#pregunta ¿extendemos la definición con [[Formas sesquilineales|formas sesquilineales]]?