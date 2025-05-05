La _multiplicidad_ asociada a un [[Eigenvalores y eigenvectores|eigenvalor]] $\lambda$ de un operador lineal $A: V \rightarrow V$, con $V$ un [[espacio vectorial]] sobre un campo $\mathbb{F}$, se define en dos contextos principales: la _multiplicidad algebraica_ y la _multiplicidad geométrica_.
### Multiplicidad algebraica

La _multiplicidad algebraica_ de un eigenvalor $\lambda$, denotada por $m_a(\lambda)$, se refiere al número de veces que $\lambda$ aparece como raíz del [[Eigenvalores y eigenvectores#Polinomio característico|polinomio característico]] de $A$. Si el polinomio característico de $A$ es $p(\lambda) = \det(A - \lambda I)$, entonces $m_a(\lambda)$ es el mayor entero $k$ tal que $(\lambda - \lambda_i)^k$ divide a $p(\lambda)$, donde $\lambda_i$ es una raíz del polinomio.
### Multiplicidad geométrica

La _multiplicidad geométrica_ de un eigenvalor $\lambda$, denotada por $m_g(\lambda)$, se define como la [[Base y dimensión|dimensión]] del [[Eigenvalores y eigenvectores#Eigenespacio|eigenespacio]] asociado a $\lambda$, es decir:
$$
m_g(\lambda) = \dim(\ker(A - \lambda I))
$$
### Relación entre multiplicidades

Para todo eigenvalor $\lambda$ de $A$ se cumple:
$$
1 \leq m_g(\lambda) \leq m_a(\lambda)
$$

El operador $A$ es [[Diagonalización|diagonalizable]] si y sólo si $m_g(\lambda) = m_a(\lambda)$ para todo eigenvalor $\lambda$.

Cuando $m_g(\lambda) < m_a(\lambda)$ para algún $\lambda$, entonces no existe una base de eigenvectores para $A$, y es necesario considerar [[vectores generalizados]] para describir completamente su estructura.

#algebra-lineal 