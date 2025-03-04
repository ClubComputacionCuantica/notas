Sea $V$ un [[espacio vectorial]] sobre un campo $\mathbb{F}$ con [[Base y dimensión|dimensión]] finita $n$, y sea $W$ un [[Subespacios|subespacio]] de $V$ de dimensión $k$. Consideremos una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] $\{\ket{1}, \ket{2}, ..., \ket{n}\}$ de $V$, de tal manera que los primeros $k$ vectores $\{\ket{1}, \ket{2}, ..., \ket{k}\}$ forman una base para $W$. 

Un _proyector_ $P : V \rightarrow V$ es un [[Operadores lineales|operador lineal]] que satisface las siguientes propiedades:
1. **Idempotencia:** $P^2 = P$.
2. **[[Operadores Hermitianos|Hermiticidad]]:** $P = P^\dagger$.

El proyector $P$ asociado al subespacio $W$ se define de tal manera que, para todo vector $\ket{v} \in V$, la imagen $P\ket{v}$ es la proyección ortogonal de $\ket{v}$ sobre $W$. En términos de la base ortonormal, el proyector $P$ se puede expresar como
$$
P = \sum_{i=1}^{k} \ket{i}\bra{i},
$$
donde $\bra{i}$ es el vector dual de $\ket{i}$ en el espacio dual $V^*$, cumpliendo con la relación $\braket{i|j} = \delta_{ij}$, donde $\delta_{ij}$ es la delta de Kronecker.

Es común hablar de "el espacio vectorial $P$", para hablar de el subespacio sobre el cual $P$ es un proyector (en este caso $W$).

Asimismo, podemos hablar de el _complemento ortogonal de $P$_, por definición, el operador $Q \equiv I - P$. Se verifica, de hecho, que $Q$ es un proyector sobre el [[Subespacio generado por un conjunto de vectores|espacio generado]] por  $\{\ket{k+1}, \ket{k+2}, ..., \ket{n}\}$, el cual, es de hecho, el [[complemento ortogonal]] (en el sentido más general), del espacio $P$.

#### Resultados básicos
1. Los [[Eigenvalores y eigenvectores|eigenvalores]] de un proyector son necesariamente 0 o 1. %%PROOF%% %%Nielsen Chuang%%
2. 
#por-revisar 