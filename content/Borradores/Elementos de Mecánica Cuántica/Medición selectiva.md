La _medición selectiva_ se define como el proceso de [medir](Postulado%203.%20Mediciones.md) un [estado cuántico](Postulado%201.%20El%20estado%20de%20un%20sistema.md) $\ket{\psi}$ con respecto a una [base](../../Elementos%20de%20Álgebra%20Lineal/Fundamentos/Base%20y%20dimensión.md) particular, de manera que se obtiene uno de los estados base $\ket{\phi_i}$ como resultado.

Considere un observable $A$, con eigenvalores $\{\ket{\psi_i}\}_{i\in I}$.
El resultado de una medición selectiva puede interpretarse como una aplicación de el [proyector](Proyectores) $\ket{\psi_n}\bra{\psi_n}$ aplicado a estado $\ket{\psi}$ para obtener el estado $\ket{\psi_n}\braket{\psi_n|\psi}$.

En general, si tenemos un conjunto de [operadores de medida](Postulado%203'.%20Mediciones.md) ${M_m}$ que actúan sobre el correspondiente espacio de Hilbert, donde cada $M_m$ está asociado con un posible resultado de medición $m$, la probabilidad de obtener el resultado $m$ cuando se mide el estado $\ket{\psi}$ es dada por $p(m) = \bra{\psi}M_m^\dagger M_m\ket{\psi}$.

Si el resultado $m$ es obtenido, el estado del sistema después de la medición se describe por $\ket{\psi'} = \frac{M_m\ket{\psi}}{\sqrt{\bra{\psi}M_m^\dagger M_m\ket{\psi}}}$.

Esto puede ser útil para la [preparación de estados iniciales](Preparación%20de%20un%20estado%20inicial.md).

#pendiente  #mecanica-cuantica 