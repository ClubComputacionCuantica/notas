Sea $P$ la [Matriz de transición](Matriz%20de%20transición.md) de una [cadena de Markov](Cadenas%20de%20Markov.md). La _matriz de evolución_ a través de $n$ pasos de tiempo, denotada como $P^n$, se calcula elevando la matriz de transición $P$ a la potencia $n$. Esto es, si partimos de una distribución de probabilidad inicial de los estados $\vec{p}(0)$, la distribución de probabilidad después de $n$ pasos, $\vec{p}(n)$, se calcula como:
$$
\vec{p}(n) = \vec{p}(0) P^n
$$
Donde $\vec{p}(0)$ es un vector fila que representa la distribución de probabilidad inicial de los estados del sistema y $\vec{p}(n)$ es el vector fila que representa la distribución de probabilidad de los estados después de $n$ pasos.