El _espectro_ de un [[Operadores lineales|operador lineal]] $A: V \rightarrow V$, donde $V$ es un [[Espacio vectorial]] sobre un campo $\mathbb{F}$, se refiere al conjunto de todos los [[Eigenvalores y eigenvectores|eigenvalores]] de $A$. Dentro de este contexto, se pueden distinguir dos tipos de espectros basados en la [[Multiplicidad]] de los eigenvalores: degenerado y no degenerado.

%%
### Espectro Degenerado
Un espectro se considera degenerado si al menos uno de los eigenvalores de $A$ tiene una multiplicidad geométrica mayor que uno.
En términos físicos, la degeneración indica que hay más de un eigenvector linealmente independiente asociado a un mismo eigenvalor. Esto significa que el eigenespacio correspondiente a $\lambda$, denotado por $E_{\lambda}$, tiene una dimensión mayor que uno.

### Espectro No Degenerado
Por contraste, un espectro se considera no degenerado si todos los eigenvalores de $A$ son distintos, lo que implica que cada uno tiene multiplicidad uno. En este caso, para cada eigenvalor $\lambda$, existe exactamente un eigenvector linealmente independiente (hasta un factor escalar) asociado a él, y el eigenespacio $E_{\lambda}$ correspondiente a cada $\lambda$ es unidimensional.
%%

###

Se dice que un eigenvalor es _degenerado_ si tiene asociados dos o más eigenvectores linealmente independientes. De hecho, se dice que un eigenvalor es _$m$-degenerado_ si el [[Eigenvalores y eigenvectores#Eigenespacio|eigenespacio]] correspondiente a este eigenvalor tiene [[Base y dimensión|dimensión]] $m$.

Teorema: Se verifica que cualquier combinación lineal de eigenestados degenerados (con el mismo eigenvalor) es también un eigenestado del eigenvalor correspondiente.
Demostración:
Considere un operador lineal $A$ y dos eigenestados degenerados, $\ket{u}$ y $\ket{v}$, asociados al mismo eigenvalor $\lambda$. Esto significa que:
$$
A\ket{u} = \lambda\ket{u} \hspace{8pt} \text{y} \hspace{8pt} A\ket{v} = \lambda\ket{v}.
$$
Entonces, sea $\ket{w}$ una combinación lineal arbitraria de estos eigenestados, digamos, $\ket{w} = c_1\ket{u} + c_2\ket{v}$. Luego
$$\begin{align}
A\ket{w} &= A(c_1\ket{u} + c_2\ket{v}) \\
         &= c_1A\ket{u} + c_2A\ket{v} \\
         &= c_1\lambda\ket{u} + c_2\lambda\ket{v} \\
         &= \lambda(c_1\ket{u} + c_2\ket{v}) \\
         &= \lambda\ket{w} \hspace{46pt}\blacksquare
\end{align}
$$

%%Posiblemente prescindimos de los conceptos de multiplicidad algebraica/geométrica%%

#por-revisar 