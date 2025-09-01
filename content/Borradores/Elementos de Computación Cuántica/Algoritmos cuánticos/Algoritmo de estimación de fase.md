El *algoritmo cuántico de estimación de fase* (*Quantum Phase Estimation*, *QPE*) es un algoritmo cuántico que permite estimar la fase $\phi$ en un autovalor de la forma $e^{2\pi i \phi}$ asociado a un [operador unitario](../../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Operadores%20unitarios.md) $U$ y a un [eigenvector](../../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) $\ket{u}$ tal que:
$$
U\ket{u} = e^{2\pi i \phi}\ket{u}, \quad \phi \in [0,1).
$$

El objetivo es obtener una estimación binaria de $\phi$ con alta probabilidad. El algoritmo utiliza dos [Registros](../../Elementos%20de%20Mecánica%20Cuántica/Registros.md):
- Un registro de $t$ [qubits](../../Elementos%20de%20Información%20Cuántica/Qubit.md) para almacenar la estimación binaria de $\phi$.
- Un segundo registro que contiene el eigenvector $\ket{u}$.
### Esquema del algoritmo

1. **Inicialización:**
   $$
   \ket{0}^{\otimes t} \otimes \ket{u}.
   $$

2. **Transformada de Hadamard:** Aplicar una puerta de Hadamard a cada uno de los $t$ primeros qubits:
   $$
   \frac{1}{\sqrt{2^t}} \sum_{k=0}^{2^t-1} \ket{k} \otimes \ket{u}.
   $$

3. **Aplicación de operaciones controladas:** Para cada qubit $j$ (desde $j=0$, el menos significativo, hasta $j=t-1$), aplicar controladamente $U^{2^j}$ al segundo registro. Esto genera
   $$
   \frac{1}{\sqrt{2^t}} \sum_{k=0}^{2^t-1} e^{2\pi i \phi k}\,\ket{k} \otimes \ket{u},
   $$
   donde $k = \sum_{j=0}^{t-1} k_j 2^j$ es el entero cuya representación binaria $k_{t-1}\dots k_0$ corresponde al estado $\ket{k}$.

4. **Transformada de Fourier cuántica inversa:** Se aplica la QFT$^{-1}$ al primer registro, transformando la información de fase en amplitudes cercanas a los estados $\ket{m}$.

5. **Medición:** Medir el primer registro. El resultado es un entero $m\in\{0,\dots,2^t-1\}$ que, con alta probabilidad, satisface
   $$
   \frac{m}{2^t} \approx \phi,
   $$
   es decir, se obtiene la mejor aproximación de $\phi$ con $t$ bits de precisión.

#computacion-cuantica 