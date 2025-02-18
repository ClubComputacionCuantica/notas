Sean $\ket{\psi} \in \mathcal{H}$ y $\bra{\phi} \in \mathcal{H}^*$, donde $\mathcal{H}$ es un [[espacio de Hilbert]] y $\mathcal{H}^*$ su [[Espacio dual|dual]]. El _producto ket-bra_, denotado $\ket{\psi}\bra{\phi}$ es un [[Operadores lineales|operador lineal]] $\ket{\psi}\bra{\phi}: \mathcal{H} \rightarrow \mathcal{H}$ definido por
$$
\ket{\psi}\bra{\phi}(\ket{\chi}) = \ket{\psi}\langle \phi | \chi \rangle = \langle\phi|\chi\rangle\ket{\psi},
$$
para cualquier vector $\ket{\chi} \in \mathcal{H}$.

Donde $\langle\phi|\chi\rangle$ es el producto interno en $\mathcal{H}$, resultando en un escalar. Este escalar multiplica al vector $\ket{\psi}$, dando lugar a otro vector en $\mathcal{H}$.

Se verifica que, para cualquier vector $\ket{v} \in \mathcal{H}$,  el operador $\ket{v}\bra{v}$ es [[Operadores Hermitianos|Hermitiano]]. I.e. su [[Adjunto de un operador|adjunto]] es el mismo operador $\ket{v}\bra{v}$.

Considerando la [[Espacio de operadores lineales|estructura de espacio vectorial]] de $\mathcal{L}(\mathcal{H},\mathcal{H})$, podemos tomar combinaciones lineales de operadores ket-bra en la forma obvia, concretamente   , 
$$
\sum_{i} a_{i} \ket{\psi_{i}}\bra{\phi_{i}}(\ket{\chi}) = \sum_{i} a_{i} \ket{\psi_{i}} \langle \phi_{i} | \chi \rangle = \sum_{i} a_{i} \langle \phi_{i} | \chi \rangle \ket{\psi_{i}}
$$
para $a_i \in \mathbb{F}$, $\ket{\chi} \in \mathcal{H}$.

Observe que si $\{\ket{i}\}_{i=1}^{n}$ es una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] en un espacio de Hilbert, entonces la [[Representación de operadores lineales con matrices|representación matricial]] del operador $\ket{i}\bra{j}$ es de la forma
$$
\begin{pmatrix}
0 & \cdots & 0 & 0 & 0 & \cdots& 0 \\
\vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \cdots & 0 & 1_{i,j} & 0 & \cdots & 0 \\
\vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \cdots & 0 & 0 & 0 & \cdots  & 0 \\
\end{pmatrix}
$$
Lo cual es consistente con el [[Operaciones con matrices|producto de matrices]] 
$$
\ket{i}\bra{j}=
\begin{pmatrix}
0 \\
\vdots \\
0 \\
1_i \\
0 \\
\vdots \\
0
\end{pmatrix}
\begin{pmatrix}
0 & \cdots & 0 & 1_j & 0 & \cdots & 0
\end{pmatrix}
$$
Por otro lado, podemos hablar del [[Adjunto de un operador|adjunto]] del operador $\ket{\psi}\bra{\phi}$. De hecho, se verifica que
$$
(\ket{\psi}\bra{\phi})^\dagger = \ket{\phi}\bra{\psi}
$$