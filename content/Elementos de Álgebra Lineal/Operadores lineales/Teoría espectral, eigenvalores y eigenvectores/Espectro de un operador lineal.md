El _espectro_ de un [operador lineal](../Operadores%20lineales.md) $A: V \rightarrow V$, donde $V$ es un [espacio vectorial](../../Fundamentos/Espacio%20vectorial.md) sobre un campo $\mathbb{F}$, se refiere al conjunto de todos los [eigenvalores](Eigenvalores%20y%20eigenvectores.md) de $A$.

Dentro de este contexto, se pueden distinguir dos tipos de espectros según la [Multiplicidad](Multiplicidad.md) de los eigenvalores: _degenerado_ y _no degenerado_.

### Espectro degenerado
Un espectro se considera _degenerado_ si al menos uno de los eigenvalores de $A$ tiene una multiplicidad geométrica mayor que uno. Es decir, si existe un eigenvalor $\lambda$ tal que el [](Eigenvalores%20y%20eigenvectores.md#Eigenespacio|eigenespacio) $E_\lambda$ tiene dimensión mayor que uno. 

Desde el punto de vista físico, esto indica que hay más de un eigenvector linealmente independiente asociado al mismo eigenvalor, lo cual da lugar a libertad en la elección de base del subespacio asociado.

### Espectro no degenerado
Un espectro se dice _no degenerado_ si todos los eigenvalores de $A$ tienen multiplicidad geométrica igual a uno. Esto implica que cada eigenvalor tiene un único eigenvector (hasta escalares) asociado, y cada espacio propio es unidimensional.

### Eigenvalores degenerados
Un eigenvalor se dice _degenerado_ si tiene asociados dos o más eigenvectores linealmente independientes. En general, un eigenvalor se dice _$m$-degenerado_ si el [](Eigenvalores%20y%20eigenvectores.md#Eigenespacios|eigenespacio) asociado tiene [dimensión](../../Fundamentos/Base%20y%20dimensión.md) $m$.

### Propiedad de cierre bajo combinaciones lineales
**Teorema**: Cualquier combinación lineal de eigenvectores asociados al mismo eigenvalor también es un eigenvector correspondiente a ese eigenvalor.

*Demostración*: Sean $\ket{u}$ y $\ket{v}$ dos eigenvectores de $A$ con el mismo eigenvalor $\lambda$:
$$
A\ket{u} = \lambda\ket{u}, \quad A\ket{v} = \lambda\ket{v}
$$
Sea $\ket{w} = c_1 \ket{u} + c_2 \ket{v}$. Entonces:
$$
\begin{align*}
A\ket{w} &= A(c_1\ket{u} + c_2\ket{v}) \\
         &= c_1 A\ket{u} + c_2 A\ket{v} \\
         &= c_1 \lambda\ket{u} + c_2 \lambda\ket{v} \\
         &= \lambda(c_1 \ket{u} + c_2 \ket{v}) = \lambda \ket{w} \quad \blacksquare
\end{align*}
$$

#algebra-lineal 