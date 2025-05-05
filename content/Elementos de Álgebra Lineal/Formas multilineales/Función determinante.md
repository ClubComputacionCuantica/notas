Una _función determinante_ es una aplicación [[Función multilineal|multilineal]] *alternada* y *normalizada* definida sobre un espacio vectorial. Esto es, dado $V$ un [[espacio vectorial]] de dimensión finita $n$ sobre un campo $\mathbb{F}$, y dado $\mathrm{Alt}^n(V)$, el conjunto de todas las aplicaciones $n$-lineales *alternadas* $f: V^n \to \mathbb{F}$. Una aplicación
$$
\det: V^n \to \mathbb{F}
$$
se llama _determinante_ si satisface las siguientes propiedades:
1. **Multilinealidad**: $\det$ es lineal en cada uno de sus $n$ argumentos.

2. **Alternancia**: Si dos argumentos de $\det$ son iguales, entonces
$$
\det(v_1, \ldots, v_i, \ldots, v_j, \ldots, v_n) = 0
\quad\text{si } v_i = v_j.
$$

3. **Normalización**: Existe una base $\{e_1, \ldots, e_n\}$ de $V$ tal que
$$
\det(e_1, \ldots, e_n) = 1.
$$

Gracias a la [[Función multilineal|multilinealidad]] y la alternancia, cualquier $f\in\mathrm{Alt}^n(V)$ queda totalmente determinado por el único valor  
$$
f(e_1,\dots,e_n)\,.
$$
En consecuencia  
$$
\dim\bigl(\mathrm{Alt}^n(V)\bigr)=1,
$$
es decir, todo $f\neq0$ es un múltiplo escalar de cualquier otro. Imponer la normalización  
$$
f(e_1,\dots,e_n)=1
$$
fija ese múltiplo a la unidad, de modo que existe un único generador normalizado, al que llamamos $\det$.

Cuando se fija una base $\{e_1,\dots,e_n\}$ y se considera una matriz $A$ cuyas columnas (o filas) son vectores $v_1,\dots,v_n\in V$, entonces
$$
\det(v_1,\dots,v_n)
=
\det(A),
$$
es decir, el [[Determinante|determinante matricial]] coincide exactamente con la aplicación abstracta definida en $\mathrm{Alt}^n(V)$.

#algebra-lineal 