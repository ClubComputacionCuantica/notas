Un ejemplo simple pero importante de [medición](../Elementos%20de%20Mecánica%20Cuántica/Postulado%203'.%20Mediciones.md) es la de un [Qubit](Qubit.md) en la [Base computacional](Base%20computacional.md). Esta es una medición sobre un solo qubit, con dos posibles resultados definidos por los dos operadores de medición $M_0 = \ket{0}\bra{0}$, $M_1 = \ket{1}\bra{1}$. En [forma matricial](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Representación%20de%20operadores%20lineales%20con%20matrices.md), 
$$
M_0 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}; \hspace{12pt} M_1 = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \begin{pmatrix} 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
$$
Observe que ambos $M_m$ son [proyectores](proyectores), i.e. $M_m^2=M_m$ y $M_m^\dagger = M_m$. Ademas, de la [Relación de completez](../../Elementos%20de%20Álgebra%20Lineal/Bra-Kets/Relación%20de%20completez.md), siendo $\{\ket{0},\ket{1}\}$ una base ortonormal, se tiene $I \equiv \ket{0}\bra{0} + \ket{1}\bra{1}$. Luego se cumple la [ecuación de completez](../Elementos%20de%20Mecánica%20Cuántica/Postulado%203'.%20Mediciones.md): $I=M_0^\dagger M_0 + M_1^\dagger M_1$.
Supóngase que el estado a medirse es $\ket{\psi}=a\ket{0}+b\ket{1}$, luego, la probabilidad de obtener el resultado $0$ en la medición es
$$
p(0)=\bra{\psi}M_0^\dagger M_0\ket{\psi} = \bra{\psi}M_0\ket{\psi} = |a|^2
$$
Similarmente,
$$
p(1)=\bra{\psi}M_1^\dagger M_1\ket{\psi} = \bra{\psi}M_1\ket{\psi} = |b|^2
$$
Luego, el estado del sistema después de la medición en los dos casos es
$$
\frac{M_0 \ket{\psi}}{|a|} = \frac{a}{|a|}\ket{0}\hspace{12pt}\text{y}\hspace{12pt}
\frac{M_1 \ket{\psi}}{|b|} = \frac{b}{|b|}\ket{\psi}
$$
Dado que estos factores de [Fase](Fase) ($\frac{a}{|a|}$ y $\frac{b}{|b|}$) tienen módulo 1, los estados post-medición, son efectivamente $\ket{0}$ y $\ket{1}$.

%%Straight from Nielsen-Chuang%%

#straight-from-N-C