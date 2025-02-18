Sea $\{\ket{i}\}_{i=1}^{n}$ una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para un [[Espacio de Hilbert]] $\mathcal{H}$. La _relación de completez_ se define por la identidad
$$
\sum_{i=1}^{n} \ket{i}\bra{i} = {I},
$$
donde cada [[Producto Ket-Bra]] $\ket{i}\bra{i}$ designa el [[Proyectores|proyector]] sobre el [[Subespacio generado por un conjunto de vectores|generado]] por $\ket{i}$ e ${I}$ representa el [[Operador identidad]] en $\mathcal{H}$.
Observe que, para cada $\ket{v}\in\mathcal{H}$, existen $v_1, \ldots, v_n \in \mathbb{F}$ tales que $\sum_{i=1}^{n} v_i \ket{i}$. Luego
$$
\left(\sum_{i=1}^{n} \ket{i}\bra{i}\right)\ket{v}= \sum_{i=1}^{n} \ket{i}\langle i | v \rangle = \sum_{i=1}^{n} v_i \ket{i} = \ket{v}
$$
Esto es, los coeficientes $v_i = \langle i | v \rangle$ representan las componentes del vector $\ket{v}$ en la base $\{\ket{i}\}_{i=1}^{n}$.