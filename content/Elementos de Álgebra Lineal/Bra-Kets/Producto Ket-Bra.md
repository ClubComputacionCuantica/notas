Sean $\ket{\psi} \in \mathcal{H}$ y $\bra{\phi} \in \mathcal{H}^*$, donde $\mathcal{H}$ es un [[espacio de Hilbert]] y $\mathcal{H}^*$ su [[Espacio dual|dual]]. El _producto ket-bra_, denotado $\ket{\psi}\bra{\phi}$ es un [[Operadores lineales|operador lineal]] $$\ket{\psi}\bra{\phi}: \mathcal{H} \rightarrow \mathcal{H}$$ definido por
$$
\ket{\psi}\bra{\phi}(\ket{\chi}) = \ket{\psi}\langle \phi | \chi \rangle = \langle\phi|\chi\rangle\ket{\psi},
$$
para cualquier vector $\ket{\chi} \in \mathcal{H}$.

Se verifica que, para cualquier vector $\ket v\in\mathcal H$, el operador $\ket v\bra v$ es [[Operadores Hermitianos|Hermitiano]], pues:
$$
(\ket v\bra v)^\dagger=\ket v\bra v.
$$
Más generalmente, el [[Adjunto de un operador|adjunto]] satisface:
$$
(\ket\psi\bra\phi)^\dagger=\ket\phi\bra\psi.
$$

Este operador tiene rango 1 y su [[Traza de un operador lineal|traza]] vale:
$$
Tr(\ket\psi\bra\phi)=\langle\phi|\psi\rangle.
$$
Si $\ket v$ está normalizado ($\langle v|v\rangle=1$), entonces:
$$
P=\ket v\bra v
$$
es un proyector ortogonal, con $P^2=P$ y $P^\dagger=P$.

Dados dos ket–bras, su producto es
$$
(\ket\psi\bra\phi)(\ket\alpha\bra\beta)
=\ket\psi\,\langle\phi|\alpha\rangle\,\bra\beta
=\langle\phi|\alpha\rangle\,\ket\psi\bra\beta.
$$

Los operadores $\{\ket i\bra j\}$ forman una base de $\mathcal L(\mathcal H)$ (ortonormal con el [[producto interno de Hilbert-Schmidt]]) y proporcionan la [[relación de completez]]:
$$
\sum_i\ket i\bra i=I.
$$

Considerando la [[Operadores lineales#Estructura algebraica|estructura de espacio vectorial]] de $\mathcal L(\mathcal H,\mathcal H)$, se pueden tomar combinaciones lineales de ket–bras:
$$
\sum_i a_i \ket{\psi_i}\bra{\phi_i}(\ket{\chi})
=\sum_i a_i \ket{\psi_i}\langle\phi_i|\chi\rangle,
$$
para escalares $a_i\in\mathbb F$ y todo $\ket{\chi}\in\mathcal H$.

Si $\{\ket i\}_{i=1}^n$ es una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] de $\mathcal H$, la [[Representación de operadores lineales con matrices|matriz]] de $\ket i\bra j$ tiene un 1 en la posición $(i,j)$ y 0 en las demás, consistente con el [[Matrices#Operaciones con matrices|producto de matrices]]:
$$
\ket i\bra j
=\begin{pmatrix}0\\\vdots\\1_i\\\vdots\\0\end{pmatrix}
\begin{pmatrix}0 & \cdots & 1_j & \cdots & 0\end{pmatrix}.
$$

Este formalismo permite expresar otros objetos en mecánica cuántica, como la [[Operadores de densidad|matriz densidad]] de un estado puro:
$$
\rho=\ket\psi\bra\psi,
$$
y la expansión de un operador general $A\in\mathcal L(\mathcal H)$:
$$
A=\sum_{i,j}a_{ij}\ket i\bra j,\quad a_{ij}=\bra iA\ket j.
$$

#algebra-lineal 