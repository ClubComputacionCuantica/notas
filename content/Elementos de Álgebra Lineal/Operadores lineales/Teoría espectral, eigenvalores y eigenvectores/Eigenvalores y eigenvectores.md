Sea $A: V \rightarrow V$ un [[Operadores lineales|operador lineal]] sobre un [[Espacio vectorial|Espacio vectorial]] $V$ definido sobre un campo $\mathbb{F}$. Un _eigenvalor_ de $A$ es un escalar $\lambda \in \mathbb{F}$ tal que existe al menos un vector no nulo $\ket{v} \in V$ que satisface la ecuación:
$$
A\ket{v} = \lambda\ket{v}.
$$
Dicho vector $\ket{v}$ se denomina _eigenvector_ de $A$ correspondiente al eigenvalor $\lambda$.

### Eigenespacios
El conjunto de todos los vectores $\ket{v} \in V$ que satisfacen $A\ket{v} = \lambda\ket{v}$, junto con el vector nulo, constituye un [[Subespacios|subespacio]] de $V$ denominado _eigenespacio_ o _espacio propio_ asociado a $\lambda$. Se denota usualmente como:
$$
E_\lambda = \ker(A - \lambda I).
$$

### Polinomio característico
Para determinar los eigenvalores de $A$, se considera su [[Representación de operadores lineales con matrices|representación matricial]] respecto a alguna base y se analiza la ecuación:
$$
(A - \lambda I)\ket{v} = \ket{0}.
$$
La existencia de soluciones no triviales implica que la matriz $A - \lambda I$ es [[Matrices invertibles#Matrices singulares|singular]], lo cual equivale a que su [[determinante]] es cero:
$$
\det(A - \lambda I) = 0.
$$
El polinomio $\det(A - \lambda I)$ se llama el _polinomio característico_ de $A$, y sus raíces son los eigenvalores. Por el [[Teorema fundamental del álgebra]], este polinomio de grado $n$ (si $\dim V = n$) tiene $n$ raíces complejas (contadas con multiplicidad).
Este polinomio depende únicamente del operador A y no de la base elegida para su representación.[^proof?]

#algebra-lineal 

[^proof?]:: *¿Demostración?*