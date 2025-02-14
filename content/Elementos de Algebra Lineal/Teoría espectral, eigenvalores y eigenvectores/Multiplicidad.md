La _multiplicidad_ asociada a un [[Eigenvalores y eigenvectores|eigenvalor]] $\lambda$ de un operador lineal $A: V \rightarrow V$, con $V$ un espacio vectorial sobre un campo $\mathbb{F}$, se define en dos contextos principales: la _multiplicidad algebraica_ y la _multiplicidad geométrica_.

### Multiplicidad Algebraica

La _multiplicidad algebraica_ de un eigenvalor $\lambda$, denotada por $m_a(\lambda)$, se refiere al número de veces que $\lambda$ aparece como raíz del [[Eigenvalores y eigenvectores#Polinomio característico|polinomio característico]] de $A$. Si el polinomio característico de $A$ es $p(\lambda) = \det(A - \lambda I)$, entonces $m_a(\lambda)$, es el mayor entero $k$ tal que $(\lambda - \lambda_i)^k$ divide a $p(\lambda)$, donde $\lambda_i$ es una raíz de $p(\lambda)$.

### Multiplicidad Geométrica

La _multiplicidad geométrica_ de un eigenvalor $\lambda$, denotada por $m_g(\lambda)$, se define como la [[Base y dimensión|dimensión]] del [[Eigenvalores y eigenvectores#Eigenespacio|eigenespacio]] asociado a $\lambda$.

### Relación entre Multiplicidades

Para cualquier eigenvalor $\lambda$ de $A$, se cumple siempre que $1 \leq m_g(\lambda) \leq m_a(\lambda)$. La igualdad entre la multiplicidad geométrica y la multiplicidad algebraica indica que el operador $A$ es diagonalizable respecto a $\lambda$. %%PROOF?%% Si $m_g(\lambda) < m_a(\lambda)$ para algún eigenvalor $\lambda$, entonces $A$ no es diagonalizable mediante una base consistente únicamente de eigenvectores de $A$, lo que implica la necesidad de considerar vectores generalizados en el análisis de $A$.

#por-revisar 