Un [operador lineal](Operadores%20lineales.md) $U : V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ con [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) se dice que es _unitario_ si su [adjunto](Adjunto%20de%20un%20operador.md) $U^\dagger$ es también su [inverso](Inverso%20de%20un%20operador%20lineal.md), es decir, si satisface la siguiente condición:
$$
U U^\dagger = U^\dagger U = I
$$
donde $I$ es el [Operador identidad](Operador%20identidad.md) en $V$. 

Esto implica que $U$ preserva el producto interno, de tal manera que para todos los vectores $\ket{v}, \ket{w} \in V$, se cumple que
$$
(U\ket{v},U\ket{w}) = \bra{v}U^\dagger U\ket{w} = \braket{v|I|w} = (\ket{v},\ket{w}) = \braket{v|w}
$$
indicando que la [longitud](../../Borradores/Elementos%20Adicionales/Métrica%20inducida%20por%20la%20norma.md) y el ángulo entre vectores se mantienen invariantes bajo la acción de $U$.

Observe que un operador unitario es [normal](Operadores%20normales.md).
### Resultados
1. Un operador es unitario si y solo si cada una de sus [representaciones matriciales](Representación%20de%20operadores%20lineales%20con%20matrices.md) en una [base](../Fundamentos/Base%20y%20dimensión.md) [ortonormal](../Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md) es una [matriz unitaria](../Matrices/Matrices%20unitarias.md). Sea $\{ \ket{v_i} \}_{i=1}^n$ una base ortonormal para $V$ y sea $\ket{w_i} \equiv U\ket{v_i}$. Puesto que $U$ preserva productos internos, $\{ \ket{w_i} \}_{i=1}^n$ es también una base ortonormal para $V$, y se verifica que
$$
U = \sum_i \ket{w_i}\bra{v_i}.
$$
Además, si $\{\ket{v_i} \}_{i=1}^n$ y $\{\ket{w_i} \}_{i=1}^n$ son cualesquiera bases ortonormales, entonces $U = \sum_i \ket{w_i}\bra{v_i}$ es un operador unitario.

2. Los [eigenvalores](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Eigenvalores%20y%20eigenvectores.md) de cualquier operador unitario en un espacio sobre $\mathbb{F} = \mathbb{C}$ tienen módulo 1.

3. Todo operador unitario admite una base ortonormal de eigenvectores; en caso de valores propios degenerados, dentro de cada subespacio propio se puede elegir una base ortonormal.

### Representación matricial
La [matriz](Representación%20de%20operadores%20lineales%20con%20matrices.md) de un operador unitario respecto a una base ortonormal cumple:
$$
U^\dagger = U^{-1} \quad \text{o equivalentemente} \quad U^\dagger U = I.
$$
En el caso real, los operadores unitarios coinciden con las matrices ortogonales: $U^T U = I$.


#algebra-lineal 