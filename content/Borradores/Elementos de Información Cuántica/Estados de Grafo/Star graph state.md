Each qubit is initialized in the state $|+\rangle$:$$
\begin{align*} \text{Central qubit } a &: |+\rangle_a = \frac{1}{\sqrt{2}} (|0\rangle_a + |1\rangle_a), \\ \text{Peripheral qubits } b_i &: |+\rangle_{b_i} = \frac{1}{\sqrt{2}} (|0\rangle_{b_i} + |1\rangle_{b_i}) \text{ for } i = 1, \ldots, n. \end{align*}
$$The controlled-Z operation between qubits $a$ and $b_i$ transforms their joint states as follows:
$$
\begin{align*} CZ_{ab_i} |0\rangle_a |0\rangle_{b_i} &= |0\rangle_a |0\rangle_{b_i}, \\ CZ_{ab_i} |0\rangle_a |1\rangle_{b_i} &= |0\rangle_a |1\rangle_{b_i}, \\ CZ_{ab_i} |1\rangle_a |0\rangle_{b_i} &= |1\rangle_a |0\rangle_{b_i}, \\ CZ_{ab_i} |1\rangle_a |1\rangle_{b_i} &= -|1\rangle_a |1\rangle_{b_i}. \end{align*} 
$$
Initially, all qubits are in a tensor product state: 
$$
\left(\frac{1}{\sqrt{2}}(|0\rangle_a + |1\rangle_a)\right) \otimes \left(\frac{1}{\sqrt{2}}(|0\rangle_{b_1} + |1\rangle_{b_1})\right) \otimes \cdots \otimes \left(\frac{1}{\sqrt{2}}(|0\rangle_{b_n} + |1\rangle_{b_n})\right)
$$
Apply CZ between a and each $b_i$. The final state $|G\rangle$ is: 
$$|G\rangle = \left( \prod_{i=1}^n CZ_{a b_i} \right) \left( \frac{1}{\sqrt{2^{n+1}}} \left( |0\rangle_a \bigotimes_{i=1}^n (|0\rangle_{b_i} + |1\rangle_{b_i}) + |1\rangle_a \bigotimes_{i=1}^n (|0\rangle_{b_i} - |1\rangle_{b_i}) \right) \right)$$
This can be expressed as:
$$
|G\rangle = \frac{1}{\sqrt{2^{n+1}}} \left( |0\rangle_a \bigotimes_{i=1}^n (|0\rangle_{b_i} + |1\rangle_{b_i}) + |1\rangle_a \bigotimes_{i=1}^n (|0\rangle_{b_i} - |1\rangle_{b_i}) \right) = \frac{1}{\sqrt{2}}\left( \ket{0}_a \ket{+}_{b_i}^{\otimes n}+\ket{1}_a \ket{-}_{b_i}^{\otimes n}\right)
$$
#Meignant-et-al The choice of which vertex is the center is arbitrary, and can be changed by local operations such as two successive local complementations.