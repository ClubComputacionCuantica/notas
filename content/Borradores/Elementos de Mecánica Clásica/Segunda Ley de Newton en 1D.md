Consideramos el movimiento de una particula en $R^1$, el cual puede ser interpretado como una particula deslizandose sobre una linea. Denotamos por $x(t)$ a la posición de la particula.
La posicion de la particula entonces es 
$$
v(t)\coloneqq x'(t)
$$ #missing-notation
La aceleracion de la particula es
$$
a(t)=v'(t)=x''(t)
$$
Si asumimos que existe una fuerza $F$ actuando sobre la particula.
Suponemos que la fuerza $F$ es una funcion dependiente unicamente de la posicion de la particula.
Entonces, la segunda ley de Newton, $F=ma$ toma la forma
$$
F(x(t))=ma=mx''(t)
$$
Donde $m$ denota la masa de la particula.
Puesto que la ecuacion diferencial anterior es de segundo orden, para obtener una solucion unica, requerimos condiciones iniciales de posicion y velocidad para un tiempo inicial $t_0$,
$$
x(t_0)=x_0; x'(t_0)=v_0
$$
Si la funcion $F$ es una [[funcion suave]], de la teoria elemental de ecuaciones diferenciales, se tiene que existe una [[solucion local]] unica para cada par de condiciones iniciales.

Puesto que la ecuacion anterior es en general no-lineal, no puede esperarse que la solucion existe para todo $t$.
%%For a proof on existence and uniqueness, see e.g. Example 8.2 and Theorem 8.13%%