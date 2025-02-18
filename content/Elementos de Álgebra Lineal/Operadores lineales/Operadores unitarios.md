Un [[Operadores lineales|operador lineal]] $U : V \rightarrow V$ en un [[Espacio vectorial]] $V$ con [[Producto interno]] se dice que es _unitario_ si su [[Adjunto de un operador|adjunto]] $U^\dagger$ es también su [[Inverso de un operador lineal|inverso]], es decir, si satisface la siguiente condición:
$$
U U^\dagger = U^\dagger U = I
$$
donde $I$ es el [[Operador identidad]] en $V$. 

Esto implica que $U$ preserva el producto interno, de tal manera que para todos los vectores $\ket{v}, \ket{w} \in V$, se cumple que
$$
(U\ket{v},U\ket{w})=\bra{v}U^\dagger U\ket{w} = \braket{v|I|w} = (\ket{v},\ket{w}) = \braket{v|w}
$$
indicando que la [[Métrica inducida por la norma|longitud]] y el ángulo entre vectores se mantienen invariantes bajo la acción de $U$.

Observe que un operador unitario es [[Operadores normales|normal]].
%%organizar%%


#### Resultados básicos
1. % % % % Un operador es unitario si y solo si cada una de sus [[Representación de operadores lineales con matrices|representaciones matriciales]] es [[Matriz unitaria|unitaria]]: Sea $\{ \ket{v_i} \}_{i=1}^n$ una [[Base y dimensión|base]] [[Ortogonalidad y Ortonormalidad|ortonormal]] para $V$ y sea $\ket{w_i}\equiv U\ket{v_i}$. Puesto que $U$ preserva productos internos, $\{ \ket{w_i} \}_{i=1}^n$ es también una base ortonormal para $V$. Luego, observe que $U=\sum_i \ket{w_i}\bra{v_i}$. Además, si $\{\ket{v_i} \}_{i=1}^n$ y $\{\ket{w_i} \}_{i=1}^n$ son cualesquiera bases ortonormales, se verifica que $U\equiv\sum_i \ket{w_i}\bra{v_i}$ es un operador unitario.%%PROOF?%%

2. Los eigenvalores de cualquier operador unitario en un espacio sobre $\mathbb{F}=\mathbb{C}$ tienen modulo 1. %%PROOF%%
3. Un operador unitario con eigenvalores [[Espectro de un operador lineal|no degenerados]] tiene eigenvectores mutuamente [[Ortogonalidad y Ortonormalidad|ortogonales]].
4. 
5. 
%%Hace falta aclarar que en general 