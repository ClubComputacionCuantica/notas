Los _operadores de Pauli_ son un conjunto de cuatro matrices representados comúnmente por $\sigma_0$, $\sigma_x$, $\sigma_y$, y $\sigma_z$, y se definen de la siguiente manera:
$$
\sigma_0 = I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \hspace{8pt}
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \hspace{8pt} \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \hspace{8pt} \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.
$$
Cada uno de estos operadores actúa sobre los estados cuánticos de dos niveles ([qubits](../Elementos%20de%20Información%20Cuántica/Qubit.md)), transformándolos de acuerdo a las propiedades específicas del espín en las direcciones $x$, $y$ y $z$, respectivamente. Además, satisfacen las siguientes relaciones de conmutación y anti-conmutación:

$$[\sigma_i, \sigma_j] = 2i \epsilon_{ijk} \sigma_k; \hspace{12pt} \{\sigma_i, \sigma_j\}= 2\delta_{ij}I,$$

donde $[\cdot,\cdot]$ denota el [Conmutador](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Conmutador.md), $\{\cdot,\cdot\}$ el [anticonmutador](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Anticonmutador.md), $\epsilon_{ijk}$ es el [Símbolo de Levi-Civita](../Elementos%20Adicionales/Símbolo%20de%20Levi-Civita.md), $\delta_{ij}$ es la delta de Kronecker, e $I$ es la matriz identidad de $2 \times 2$. #por-revisar 

Los [eigenvalores](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de cada operador de Pauli son $\pm 1$.

Los operadores de Pauli forman una [base](../../Elementos%20de%20Álgebra%20Lineal/Fundamentos/Base%20y%20dimensión.md) [ortogonal](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) para el espacio de operadores Hermitianos con respecto al [producto interno de Hilbert-Schmidt](../../Elementos%20de%20Álgebra%20Lineal/Formas%20multilineales/Producto%20interno%20de%20Hilbert-Schmidt.md). #pendiente 

Los operadores de Pauli son [unitarios](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Operadores%20unitarios.md) y [Hermitianos](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Operadores%20Hermitianos.md). %%Proof?%%

#pendiente  #mecanica-cuantica 