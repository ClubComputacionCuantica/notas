Un [[Operadores lineales|operador lineal]] $U : V \rightarrow V$ en un [[Espacio vectorial]] $V$ con [[producto interno]] se dice que es _unitario_ si su [[Adjunto de un operador|adjunto]] $U^\dagger$ es también su [[Inverso de un operador lineal|inverso]], es decir, si satisface la siguiente condición:
$$
U U^\dagger = U^\dagger U = I
$$
donde $I$ es el [[operador identidad]] en $V$. 

Esto implica que $U$ preserva el producto interno, de tal manera que para todos los vectores $\ket{v}, \ket{w} \in V$, se cumple que
$$
(U\ket{v},U\ket{w}) = \bra{v}U^\dagger U\ket{w} = \braket{v|I|w} = (\ket{v},\ket{w}) = \braket{v|w}
$$
indicando que la [[Métrica inducida por la norma|longitud]] y el ángulo entre vectores se mantienen invariantes bajo la acción de $U$.

Observe que un operador unitario es [[Operadores normales|normal]].
### Resultados
1. Un operador es unitario si y solo si cada una de sus [[Representación de operadores lineales con matrices|representaciones matriciales]] en una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] es una [[Matrices unitarias|matriz unitaria]]. Sea $\{ \ket{v_i} \}_{i=1}^n$ una base ortonormal para $V$ y sea $\ket{w_i} \equiv U\ket{v_i}$. Puesto que $U$ preserva productos internos, $\{ \ket{w_i} \}_{i=1}^n$ es también una base ortonormal para $V$, y se verifica que
$$
U = \sum_i \ket{w_i}\bra{v_i}.
$$
Además, si $\{\ket{v_i} \}_{i=1}^n$ y $\{\ket{w_i} \}_{i=1}^n$ son cualesquiera bases ortonormales, entonces $U = \sum_i \ket{w_i}\bra{v_i}$ es un operador unitario.

2. Los [[Eigenvalores y eigenvectores|eigenvalores]] de cualquier operador unitario en un espacio sobre $\mathbb{F} = \mathbb{C}$ tienen módulo 1.

3. Todo operador unitario admite una base ortonormal de eigenvectores; en caso de valores propios degenerados, dentro de cada subespacio propio se puede elegir una base ortonormal.

### Representación matricial
La [[Representación de operadores lineales con matrices|matriz]] de un operador unitario respecto a una base ortonormal cumple:
$$
U^\dagger = U^{-1} \quad \text{o equivalentemente} \quad U^\dagger U = I.
$$
En el caso real, los operadores unitarios coinciden con las matrices ortogonales: $U^T U = I$.


#algebra-lineal 