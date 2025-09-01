Una _matriz invertible_ (o _matriz no singular_) es una matriz cuadrada $A \in \mathbb{F}^{n \times n}$ tal que existe otra matriz denotada $A^{-1} \in \mathbb{F}^{n \times n}$ que satisface:
$$
AA^{-1} = A^{-1}A = I,
$$
donde $I$ es la [Matriz identidad](Matriz%20identidad.md) de orden $n$. A dicha matriz $A^{-1}$ se le llama la _inversa_ de $A$.

## Matrices singulares
Si $A$ no es invertible se dice que es *singular*.
### Caracterización
Una matriz $A$ es invertible si y solo si:
- Su [Determinante](Determinante.md) es distinto de cero: $\det(A) \neq 0$.
- El sistema lineal $A \mathbf{x} = \mathbf{b}$ tiene solución única para toda $\mathbf{b} \in \mathbb{F}^n$.
- Las columnas y filas de $A$ forman una [base](../Fundamentos/Base%20y%20dimensión.md) de $\mathbb{F}^n$.
- ...
### Propiedades
1. $(A^{-1})^{-1} = A$
2. $(AB)^{-1} = B^{-1} A^{-1}$
3. $(A^T)^{-1} = (A^{-1})^T$
4. $\det(A^{-1}) = 1/\det(A)$

#algebra-lineal 