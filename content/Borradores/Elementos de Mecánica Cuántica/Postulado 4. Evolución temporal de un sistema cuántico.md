La evolución temporal del estado $\ket{\psi(t)}$ [[Postulado 1. El estado de un sistema|que describe un sistema cuántico]] aislado está gobernada por la ecuación de Schrödinger:
$$
i\hbar\frac{\partial}{\partial t}\ket{\psi(t)} = \hat{H}\ket{\psi(t)}
$$
Donde $i$ representa la unidad imaginaria, $\hbar$ es la constante de Planck y $\hat{H}$ es el _[[Hamiltoniano]]_ del sistema.

De manera equivalente%%PROOF?%%, podemos formular:

La evolución temporal del estado $\ket{\psi(t)}$ [[Postulado 1. El estado de un sistema|que describe un sistema cuántico]] aislado es descrita por un [[Operadores unitarios|operador unitario]]: el estado del sistema al tiempo $t_1$, $\ket{\psi(t_1)}$ se relaciona al estado al tiempo $t_2$, $\ket{\psi(t_2)}$ a través del operador $U(t_1,t_2)$ de la siguiente manera:
$$
\ket{\psi(t_2)}=U(t_1,t_2)\ket{\psi(t_1)}.
$$

%%"Resulta que, en el caso de qubits individuales, cualquier operador unitario puede realizarse en sistemas realistas." -Nielsen-Chuang p.81%%

%%For a closed system in a mixed state _ρ_, the time evolution is $\rho(t)=U\rho U^\dagger$.

The evolution of an [open quantum system](https://en.wikipedia.org/wiki/Open_quantum_system "Open quantum system") can be described by [quantum operations](https://en.wikipedia.org/wiki/Quantum_operation "Quantum operation") (in an [operator sum](https://en.wikipedia.org/wiki/Quantum_operation#Statement_of_the_theorem "Quantum operation") formalism) and [quantum instruments](https://en.wikipedia.org/wiki/Quantum_instrument "Quantum instrument"), and generally does not have to be unitary.%%