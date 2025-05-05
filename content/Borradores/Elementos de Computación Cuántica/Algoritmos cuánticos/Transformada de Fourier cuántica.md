La *transformada de Fourier cuántica* (*Quantum Fourier Transform*, *QFT*) es la versión cuántica de la transformada discreta de Fourier (DFT). Actúa sobre estados de base computacional y transforma un estado $\ket{x}$ en una superposición de todos los posibles estados $\ket{y}$ con fases determinadas por $x$ y $y$.

Dada una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] $\{\ket{0}, \ket{1}, \dots, \ket{2^n - 1}\}$, la QFT está definida por:
$$
\text{QFT}\ket{x} = \frac{1}{\sqrt{2^n}} \sum_{y=0}^{2^n - 1} e^{2\pi i x y / 2^n} \ket{y}, \quad x \in \{0, \dots, 2^n - 1\}.
$$
### Propiedades
- Es una transformación [[Operadores unitarios|unitaria]].
- Puede implementarse con $O(n^2)$ [[compuertas cuánticas]].
- Su inversa es simplemente la transformada conjugada transpuesta: QFT$^{-1}$.

### Circuito cuántico para QFT
%%
El circuito de QFT para $n$ qubits consta de:
1. Una serie de puertas Hadamard.
2. Puertas de fase controlada con ángulos decrecientes.
3. Un reverso final del orden de los qubits.

Para tres qubits:
- Aplicar Hadamard al primer qubit.
- Aplicar $R_k$ (rotaciones controladas de fase $\frac{2\pi}{2^k}$) entre el primer y los qubits posteriores.
- Repetir para los siguientes qubits.
- Invertir el orden de los qubits al final.%%

### Ejemplo
Para $n = 2$ qubits, la QFT es:
$$
\text{QFT}\ket{00} = \frac{1}{2}(\ket{0} + \ket{1} + \ket{2} + \ket{3}),
$$
$$
\text{QFT}\ket{01} = \frac{1}{2}(\ket{0} + i\ket{1} - \ket{2} - i\ket{3}), \text{ etc.}
$$

#pendiente 
