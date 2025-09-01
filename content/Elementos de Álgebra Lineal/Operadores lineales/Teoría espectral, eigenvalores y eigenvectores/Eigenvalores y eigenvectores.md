Sea $A: V \rightarrow V$ un [operador lineal](../Operadores%20lineales.md) sobre un [espacio vectorial](../../Fundamentos/Espacio%20vectorial.md) $V$ definido sobre un campo $\mathbb{F}$. Un _eigenvalor_ de $A$ es un escalar $\lambda \in \mathbb{F}$ tal que existe al menos un vector no nulo $\ket{v} \in V$ que satisface la ecuación:
$$
A\ket{v} = \lambda\ket{v}.
$$
Dicho vector $\ket{v}$ se denomina _eigenvector_ de $A$ correspondiente al eigenvalor $\lambda$.

### Eigenespacios
El conjunto de todos los vectores $\ket{v} \in V$ que satisfacen $A\ket{v} = \lambda\ket{v}$, junto con el vector nulo, constituye un [subespacio](../../Fundamentos/Subespacios.md) de $V$ denominado _eigenespacio_ o _espacio propio_ asociado a $\lambda$. Se denota usualmente como:
$$
E_\lambda = \ker(A - \lambda I).
$$

### Polinomio característico
Para determinar los eigenvalores de $A$, se considera su [representación matricial](../Representación%20de%20operadores%20lineales%20con%20matrices.md) respecto a alguna base y se analiza la ecuación:
$$
(A - \lambda I)\ket{v} = \ket{0}.
$$
La existencia de soluciones no triviales implica que la matriz $A - \lambda I$ es [](../../Matrices/Matrices%20invertibles.md#Matrices%20singulares|singular), lo cual equivale a que su [Determinante](../../Matrices/Determinante.md) es cero:
$$
\det(A - \lambda I) = 0.
$$
El polinomio $\det(A - \lambda I)$ se llama el _polinomio característico_ de $A$, y sus raíces son los eigenvalores. Por el [Teorema fundamental del álgebra](Teorema%20fundamental%20del%20álgebra), este polinomio de grado $n$ (si $\dim V = n$) tiene $n$ raíces complejas (contadas con multiplicidad).
Este polinomio depende únicamente del operador A y no de la base elegida para su representación.[^proof?]

#algebra-lineal 

[^proof?]:: *¿Demostración?*