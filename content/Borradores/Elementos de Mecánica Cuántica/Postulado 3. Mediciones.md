Los resultados posibles de la medición de una variable dinámica son los [eigenvalores](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) del [correspondiente operador Hermitiano](Postulado%202.%20Representación%20de%20observables%20cuánticos.md). 
Si el resultado de la medición de un observable $A$, con correspondiente operador $\hat{A}$, sobre un estado $\ket{\psi(t)}$ es $a_n$, entonces el estado del sistema inmediatamente después de la medición cambia al estado $\ket{\psi_n}$, el eigenvector de $\hat{A}$ con correspondiente eigenvalor $a_n$.
### Regla de Born
La probabilidad de obtener el resultado $a_n$ al medir el observable $A$ de un sistema en el estado $\ket{\psi}$ está dada por
$$
Pr(a_n) = \frac{|\hspace{-1.7pt}\braket{\psi_n|\psi}|^2}{\braket{\psi|\psi}} = |\hspace{-1.7pt}\braket{\psi_n|\psi}|^2,
$$
si el eigenvalor $a_n$ es [no degenerado](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Espectro%20de%20un%20operador%20lineal.md). En el caso en el que el vector es $m$-degenerado, la probabilidad de obtener $a_n$ en una medición de $A$ está dada por 
$$
Pr(a_n) = \frac{\sum_{j=1}^{m}{|\hspace{-1.7pt}\braket{\psi_n^{j}|\psi}|^2}}{\braket{\psi|\psi}}=\sum_{j=1}^{m}{|\hspace{-1.7pt}\braket{\psi_n^{j}|\psi}|^2},
$$
donde $\ket{\psi_n^{j}}$ representa el $j$-ésimo eigenvector linealmente independiente de la base del eigenespacio asociado a $a_n$.

Observe que $\sum_{j}Pr(a_j)\equiv 1$, pues al menos uno de los valores del observable debe resultad de la medición.

El [Valor esperado](../Elementos%20Adicionales/Probabilidad%20y%20Estadística/Valor%20esperado.md) del resultado de la medición del observable $A$ está dado por 
$$
\braket{A}=\sum_i a_i Pr(a_i) = \sum_i a_i |\hspace{-2pt}\braket{\psi_i|\psi}|^2 = \sum_i a_i \hspace{-2pt}\braket{\psi|\psi_i}\hspace{-2pt}\braket{\psi_i|\psi}
$$
y de la ecuación de eigenvalores $A\ket{\psi_i}=a_i\ket{\psi_i}$, se sigue que 
$$
\braket{A}= \sum_i \hspace{-2pt}\braket{\psi|A|\psi_i}\hspace{-2pt}\braket{\psi_i|\psi}
$$
Además, siendo $\{\ket{\psi_i}\}$, el conjunto de eigenvectores de $\hat{A}$ una base ortonormal, se verifica la [Relación de completez](../../Elementos%20de%20Álgebra%20Lineal/Bra-Kets/Relación%20de%20completez.md) $\sum_i \ket{\psi_i}\bra{\psi_i} = I$. Luego
$$
\braket{A}=\braket{\psi|A|\psi}.
$$
%%Observe que las relaciones anteriores son válidas para espectros discretos. Los espectros continuos no se consideran en el presente trabajo%%