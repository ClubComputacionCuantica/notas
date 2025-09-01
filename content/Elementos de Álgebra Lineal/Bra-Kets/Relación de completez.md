Sea $\{\ket{i}\}_{i=1}^{n}$ una [base](../Fundamentos/Base%20y%20dimensión.md) [ortonormal](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) para un [espacio de Hilbert](../Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md) $\mathcal{H}$. La _relación de completez_ se define por la identidad:
$$
\sum_{i=1}^{n} \ket{i}\bra{i} = I,
$$
donde cada [Producto Ket-Bra](Producto%20Ket-Bra.md) $\ket{i}\bra{i}$ representa el [proyector](../Operadores%20lineales/Proyector%20ortogonal.md) sobre el [espacio generado](../Fundamentos/Subespacio%20generado%20por%20un%20conjunto%20de%20vectores.md) por $\ket{i}$, e $I$ es el [Operador identidad](../Operadores%20lineales/Operador%20identidad.md) en $\mathcal{H}$.

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