Un _proceso_ o _cadena de Markov_ es una secuencia de eventos aleatorios en los que la probabilidad de que ocurra un evento depende únicamente del estado alcanzado en el evento anterior, no de la secuencia completa de eventos que ocurrió antes.

Formalmente, sea $\{X_n\}_{n \in \mathbb{N}}$ una secuencia de [[Variable aleatoria|variables aleatorias]] que toman valores en un conjunto de estados $S$. Decimos que la secuencia forma una cadena de Markov si para todo $n \geq 1$ y para cualquier secuencia de estados $i_0, i_1, \ldots, i_{n-1}, i_n, i_{n+1} \in S$, se cumple la  _propiedad de falta de memoria_, o _propiedad de Markov_:
$$
P(X_{n+1} = i_{n+1} | X_n = i_n, X_{n-1} = i_{n-1}, \ldots, X_0 = i_0) = P(X_{n+1} = i_{n+1} | X_n = i_n)
$$
donde $P(X_{n+1} = i_{n+1} | X_n = i_n)$ es la [[Probabilidad condicional]] de que $X_{n+1}$ sea $i_{n+1}$ dado que $X_n$ es $i_n$.