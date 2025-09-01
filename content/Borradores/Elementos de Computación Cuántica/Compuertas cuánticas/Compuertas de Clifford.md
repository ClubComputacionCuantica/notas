Las _compuertas de Clifford_ forman un conjunto fundamental de [Compuertas cuánticas](Compuertas%20cuánticas.md) que preservan el [grupo de Pauli](../../Elementos%20de%20Información%20Cuántica/Grupo%20de%20Pauli.md) bajo conjugación. Es decir, si $U$ es una compuerta de Clifford y $P$ es un operador de Pauli, entonces $UPU^\dagger$ es también un operador de Pauli (posiblemente con un factor global).
### Compuertas de Clifford
El conjunto de compuertas de Clifford en uno o dos qubits incluye:
- La [Compuerta X](Compuerta%20X.md)
- La [Compuerta Y](Compuerta%20Y.md)
- La [Compuerta Z](Compuerta%20Z.md)
- La [Compuerta de Hadamard](Compuerta%20de%20Hadamard.md) $H$
- La [Compuerta S](Compuerta%20S.md) (fase)
- La [Compuerta CNOT](Compuerta%20CNOT.md)

Estas compuertas generan el [Grupo de Clifford](../../Elementos%20de%20Información%20Cuántica/Grupo%20de%20Clifford.md) sobre qubits.
### Propiedades
- Preservan los [estados estabilizados](Estabilizadores).
- Forman un subgrupo finito del [grupo unitario](grupo%20unitario).
- Se pueden simular eficientemente en una computadora clásica mediante el formalismo de estabilizadores ([teorema de Gottesman-Knill](teorema%20de%20Gottesman-Knill)).

### Limitaciones
Las compuertas de Clifford por sí solas no son universales para la computación cuántica. ([Teorema de Gottesman–Knill](../Teorema%20de%20Gottesman–Knill.md)) Se requiere al menos una compuerta no Clifford (como la [Compuerta T](Compuerta%20T)) para alcanzar universalidad.
