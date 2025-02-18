Los _operadores de Pauli_ son un conjunto de cuatro matrices representados comúnmente por $\sigma_0$, $\sigma_x$, $\sigma_y$, y $\sigma_z$, y se definen de la siguiente manera:
$$
\sigma_0 = I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \hspace{8pt}
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \hspace{8pt} \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \hspace{8pt} \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.
$$
Cada uno de estos operadores actúa sobre los estados cuánticos de dos niveles ([[Qubit|qubits]]), transformándolos de acuerdo a las propiedades específicas del espín en las direcciones $x$, $y$ y $z$, respectivamente. Además, satisfacen las siguientes relaciones de conmutación y anti-conmutación:

$$[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k; \hspace{12pt} \{\sigma_i, \sigma_j\}= 2\delta_{ij}I,$$

donde $[\cdot,\cdot]$ denota el [[conmutador]], $\{\cdot,\cdot\}$ el [[Anticonmutador de dos operadores lineales|anticonmutador]], $\epsilon_{ijk}$ es el [[Símbolo de Levi-Civita]], $\delta_{ij}$ es la delta de Kronecker, e $I$ es la matriz identidad de $2 \times 2$. #por-revisar 

Los [[Eigenvalores y eigenvectores|eigenvalores]] de cada operador de Pauli son $\pm 1$.

Los operadores de Pauli forman una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortogonal]] para el espacio de operadores Hermitianos con respecto al [[Producto interno de Hilbert-Schmidt]]. #pendiente 

Los operadores de Pauli son [[Operadores unitarios|unitarios]] y [[Operadores Hermitianos|Hermitianos]]. #MISSING-PROOF 

%%Por revisar%%