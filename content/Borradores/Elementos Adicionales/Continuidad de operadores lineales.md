Sea $A: V \rightarrow W$ un [[Operadores lineales|operador lineal]] entre dos [[espacios normados]] $V$ y $W$ sobre un campo $\mathbb{F}$. Se dice que $A$ es _continuo en un punto_ $v_0 \in V$ si para toda sucesión $\{v_n\}$ en $V$ tal que $v_n \rightarrow v_0$, se cumple:
$$
A(v_n) \rightarrow A(v_0) \quad \text{en } W.
$$

En el caso de operadores lineales, esta condición se reduce a la continuidad en el origen:
$$
\text{A es continua en todo } V \iff A \text{ es continua en } 0.
$$

### Equivalencia con acotación
Un operador lineal $A$ entre espacios normados es continuo si y solo si es [[Operadores acotados|acotado]]. Es decir, existe una constante $C > 0$ tal que:
$$
\|A(v)\| \leq C\|v\| \quad \text{para todo } v \in V.
$$

### Propiedades
- Todo operador lineal definido en un espacio de dimensión finita es continuo.
- En espacios infinito-dimensionales, no todo operador lineal es necesariamente continuo.
- La continuidad garantiza que $A$ es [[Continuidad uniforme|uniformemente continua]] y [[Continuidad Lipschitz|lipschitz continua]].

#analisis-funcional 