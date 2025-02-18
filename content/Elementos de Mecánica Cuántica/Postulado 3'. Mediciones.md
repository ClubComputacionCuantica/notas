Las mediciones de un sistema cuántico están descritas por un conjunto de _operadores de medición_ $\{M_m\}$ que actúan sobre el [[Postulado 1. El estado de un sistema|espacio de Hilbert asociado al sistema]] a medirse. El indice $m$ hace referencia a los resultados de la medición que pueden ocurrir en el experimento. Si el [[Postulado 1. El estado de un sistema|estado cuántico del sistema]] es $\ket{\psi}$ inmediatamente antes de la medición, entonces la probabilidad de que ocurra el resultado $m$ está dada por
$$
p(m)=\bra{\psi}M_{m}^\dagger M_m \ket{\psi}
$$
y el estado del sistema después de la medición es
$$
\frac{M_m \ket{\psi}}{\sqrt{\bra{\psi}M_{m}^\dagger M_m \ket{\psi}}}
$$
(Este hecho es comúnmente conocido como el _colapso de la función de onda_.)

Los operadores de medición cumplen la _ecuación de completez_:
$$
\sum_{m} M_{m}^\dagger M_m = I,
$$
La ecuación de completez cual expresa el hecho de que las probabilidades $p(m)$ suman a $1$:
$$
1 = \sum_{m} p(m) = \sum_m \bra{\psi}M_{m}^\dagger M_m \ket{\psi}
$$
Un caso particular de mediciones es el de [[Mediciones proyectivas]].

 
%%Straight from Nielsen-Chuang%%