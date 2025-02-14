Sea $A: V \rightarrow V$ un [[Operadores lineales|operador lineal]] sobre un [[Espacio vectorial]] $V$ sobre un campo $\mathbb{F}$. Un _eigenvalor_ de $A$ es un escalar $\lambda \in \mathbb{F}$ para el cual existe al menos un vector no nulo $\ket{v} \in V$ tal que
$$
A\ket{v} = \lambda\ket{v}.
$$
El vector $\ket{v}$ se denomina _eigenvector_ de $A$ correspondiente al eigenvalor $\lambda$.
## Eigenespacio
El conjunto de todos los vectores $\ket{v} \in V$ que satisfacen la ecuación $A\ket{v} = \lambda\ket{v}$, (incl. el vector cero), es, de hecho, un [[Subespacios|subespacio]] de $V$, llamado _espacio propio_ o _eigenespacio_ asociado al eigenvalor $\lambda$ de $A$. Usualmente se denota como $E_\lambda$.

## Polinomio característico
Considerando la representación matricial del operador $A$ y el [[Operador identidad]], la ecuación $A\ket{v} = \lambda\ket{v}$ puede ser reformulada como
$$
(A - \lambda I)\ket{v} = \ket{0},
$$
La existencia de soluciones no triviales para esta ecuación implica que la matriz $A - \lambda I$ es [[Matrices singulares|singular]], es decir, su [[Determinante|determinante]] es cero:
$$\det(A - \lambda I) = 0.$$
$\det(A - \lambda I)$ es conocido como el _polinomio característico_ de $A$, y sus raíces son los eigenvalores de $A$. Del teorema fundamental del álgebra que cualquier polinomio de grado $n$ tiene $n$ (no necesariamente distintas) raíces complejas.

%%Se verifica que el polinomio característico depende únicamente del operador A y no de la representación matricial especifica%%