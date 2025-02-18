La _notación bra-ket_, también conocida como _notación de Dirac_, es una notación estándar que simplifica de manera elegante los conceptos de vectores, vectores duales y productos internos (entre otros elementos) dentro del marco de la mecánica cuántica:
En nuestro caso, limitamos su uso a espacios de dimensión finita.

Considere un [[espacio vectorial]] de dimensión finita $V$ sobre el campo $\mathbb{C}$, con [[producto interno]] $\langle \cdot | \cdot \rangle : V \times V \rightarrow \mathbb{C}$.

1. Un "ket" $|\psi\rangle$, representa un vector en el espacio $V$ como vector columna: $$\ket{\psi} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix}$$donde $a_1, a_2, \ldots, a_n$ son las componentes del vector en alguna base de $V$.
2. **Bra**: Un "bra" $\langle\phi|$, es el [[Espacio dual|dual]] de un ket, i.e. su  [[Operaciones con matrices|conjugado transpuesto]]. Explícitamente, si el ket correspondiente es $\ket{\phi}$, su bra se escribe: $$\langle\phi| = (|\phi\rangle)^\dagger = \begin{bmatrix} b_1^* & b_2^* & \ldots & b_n^* \end{bmatrix}$$
	donde $b_1^*, b_2^*, \ldots, b_n^*$ son los complejos conjugados de las componentes de $\ket{\phi}$.
    
3. **Producto Bra-Ket**: El producto de un bra y un ket, denotado por $\langle\phi|\psi\rangle$, es el producto interno en el espacio. Si $\ket{\psi}$ y $\ket{\phi}$ son vectores en $V$, entonces: $$\langle\phi|\psi\rangle = \sum_{i=1}^{n} b_i^* a_i$$
    donde $\ket{\psi} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix}$ y $|\phi\rangle = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix}$.
    Observe que esta definición es meramente una notación para el producto interno estándar en $\mathbb{C}^n$.

A veces utilizamos la notación $(\cdot , \cdot ) : V \times V \rightarrow \mathbb{C}$ para denotar al producto interno y hacer la notación mas clara cuando hay otros elementos presentes. En este caso, a menos que se haga distinción explicita con otro producto,
$$
(\ket{v},\ket{w})\equiv\braket{v|w}
$$


%%4. **Operadores en Notación Bra-Ket**: Un operador lineal $\hat{A}$ actuando sobre un ket $|\psi\rangle$ se escribe como $\hat{A}|\psi\rangle$. El elemento de matriz de $\hat{A}$ entre los estados $\langle\phi|$ y $|\psi\rangle$ se denota como $\langle\phi|\hat{A}|\psi\rangle$.%%