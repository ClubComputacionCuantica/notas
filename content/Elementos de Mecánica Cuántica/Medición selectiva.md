La _medición selectiva_ se define como el proceso de [[Postulado 3. Mediciones|medir]] un [[Postulado 1. El estado de un sistema|estado cuántico]] $\ket{\psi}$ con respecto a una [[Base y dimensión|base]] particular, de manera que se obtiene uno de los estados base $\ket{\phi_i}$ como resultado.

Considere un observable $A$, con eigenvalores $\{\ket{\psi_i}\}_{i\in I}$.
El resultado de una medición selectiva puede interpretarse como una aplicación de el [[Proyectores|proyector]] $\ket{\psi_n}\bra{\psi_n}$ aplicado a estado $\ket{\psi}$ para obtener el estado $\ket{\psi_n}\braket{\psi_n|\psi}$. #pendiente 

En general, si tenemos un conjunto de [[Postulado 3'. Mediciones|operadores de medida]] ${M_m}$ que actúan sobre el correspondiente espacio de Hilbert, donde cada $M_m$ está asociado con un posible resultado de medición $m$, la probabilidad de obtener el resultado $m$ cuando se mide el estado $\ket{\psi}$ es dada por $p(m) = \bra{\psi}M_m^\dagger M_m\ket{\psi}$.

Si el resultado $m$ es obtenido, el estado del sistema después de la medición se describe por $\ket{\psi'} = \frac{M_m\ket{\psi}}{\sqrt{\bra{\psi}M_m^\dagger M_m\ket{\psi}}}$.

Esto puede ser útil para la [[Preparación de un estado inicial|preparación de estados iniciales]].