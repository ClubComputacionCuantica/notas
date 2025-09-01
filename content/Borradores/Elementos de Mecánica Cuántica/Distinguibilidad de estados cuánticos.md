[^0]Supóngase que Alice elige un estado cuántico $\ket{\psi_i}$, $(1\leq i\leq n)$ de un conjunto fijo de estados. Alice entrega el estado $\ket{\psi_i}$ a Bob, cuya tarea es identificar el índice $i$ del conjunto de estados.

Si el conjunto $\{\ket{\psi_i}\}_{i=1}^n$ es [ortonormal](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Ortogonalidad/Ortogonalidad%20y%20Ortonormalidad.md), entonces Bob puede hacer una [medición](Postulado%203'.%20Mediciones.md) para _distinguir_ los estados, usando el siguiente procedimiento:
Defina un operador de medición $M_i \equiv \ket{\psi_i}\bra{\psi_i}$[^1]  para cada índice posible $i$, y un operador adicional $M_0$ definido como el [operador positivo](Operadores%20positivos)[^2][^3] $I - \sum_{i=1}^n  \ket{\psi_i}\bra{\psi_i}$. Estos operadores satisfacen la [Relación de completez](../../Elementos%20de%20Álgebra%20Lineal/Bra-Kets/Relación%20de%20completez.md). Si el estado preparado es $\ket{\psi_i}$, entonces $p(i)=\braket{\psi_i|M_i|\psi_i}=1$, así que el resultado $i$ ocurre con certeza. Por tanto es posible distinguir los estados $\{\ket{\psi_i}\}_{i=1}^n$ de manera fiable.

Si, por el contrario, los estados $\{\ket{\psi_i}\}_{i=1}^n$ no son ortonormales, _no hay mediciones cuánticas capaces de distinguir a los estados_: En efecto, supóngase que puede realizarse tal medición a través de operadores $M_j$ con resultado $j$. Bob trata de determinar el índice $i$ a través de algún criterio $i=f(j)$ (I.e. si Bob obtiene el resultado $j$ el criterio $f(\cdot)$ determina que el estado medido es $\ket{\psi_i}$) . Si se prepara el estado $\ket{\psi_i}$, entonces la probabilidad de medir $j$ tal que $f(j)=1$ debe ser $1$. I.e. 
$$
\braket{\psi_1|E_1|\psi_1}=1
$$ 
si definimos $E_i \equiv \sum_{j:f(j)=i} M_j^\dagger M_j$. 



[^0]: Nielsen-Chuang
[^1]: Observe que los estados $M_i \equiv \ket{\psi_i}\bra{\psi_i}$ son [proyectores](proyectores), por lo cual $M_i = M_i^\dagger M_i$.
[^2]: PROOF? Demuestre que tal operador es positivo
[^3]: El libro define al operador como la [raíz cuadrada](../../Elementos%20de%20Álgebra%20Lineal/Operadores%20lineales/Funciones%20de%20operadores.md) de $I - \sum_{i=1}^n  \ket{\psi_i}\bra{\psi_i}$, pero esto es redundante pues $I - \sum_{i=1}^n  \ket{\psi_i}\bra{\psi_i} \equiv diag(0,...,0,1,...1)$, lo cual es igual a su raíz cuadrada.



#pendiente  #mecanica-cuantica 