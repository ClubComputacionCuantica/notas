Sea $\{\ket{i}\}_{i=1}^{n}$ una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para un [[Espacio de Hilbert]] $\mathcal{H}$. La _relación de completez_ se define por la identidad:
$$
\sum_{i=1}^{n} \ket{i}\bra{i} = I,
$$
donde cada [[producto Ket-Bra]] $\ket{i}\bra{i}$ representa el [[Proyector ortogonal|proyector]] sobre el [[Subespacio generado por un conjunto de vectores|espacio generado]] por $\ket{i}$, e $I$ es el [[operador identidad]] en $\mathcal{H}$.

Dado un vector arbitrario $\ket{v} \in \mathcal{H}$, existen escalares $v_1, \ldots, v_n \in \mathbb{F}$ tales que:
$$
\ket{v} = \sum_{i=1}^{n} v_i \ket{i}.
$$
Entonces
$$
\left(\sum_{i=1}^{n} \ket{i}\bra{i}\right) \ket{v} = \sum_{i=1}^{n} \ket{i} \langle i | v \rangle = \sum_{i=1}^{n} v_i \ket{i} = \ket{v},
$$
lo que muestra que la expansión del vector $\ket{v}$ en la base ortonormal $\{\ket{i}\}$ puede escribirse utilizando la relación de completez.

Los coeficientes $v_i = \langle i | v \rangle$ representan las componentes del vector $\ket{v}$ en dicha base.

#algebra-lineal 