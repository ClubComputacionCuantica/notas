El *oscilador armónico cuántico* es uno de los sistemas fundamentales de la mecánica cuántica. Modela una partícula de masa $m$ sujeta a una fuerza restauradora proporcional al desplazamiento, con hamiltoniano dado por:
$$
\hat{H} = \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega^2\hat{x}^2,
$$
donde $\hat{x}$ y $\hat{p}$ son los operadores de posición y momento, y $\omega$ es la frecuencia angular del sistema.

Se introducen los operadores de aniquilación y creación:
$$
\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i}{m\omega}\hat{p}\right),
\quad
\hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i}{m\omega}\hat{p}\right),
$$
que satisfacen la relación de conmutación canónica:
$$
[\hat{a}, \hat{a}^\dagger] = 1.
$$

El hamiltoniano puede escribirse en términos de estos operadores como:
$$
\hat{H} = \hbar\omega \left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right).
$$

Los estados propios del hamiltoniano son los llamados _estados de ocupación_ o _número_ $\ket{n}$, que satisfacen:
$$
\hat{H}\ket{n} = E_n\ket{n}, \quad \text{con } E_n = \hbar\omega\left(n + \frac{1}{2}\right), \quad n = 0, 1, 2, \ldots
$$

Estos estados forman una base ortonormal del espacio de Hilbert del sistema:
$$
\langle n | m \rangle = \delta_{nm},
\quad
\sum_{n=0}^{\infty} \ket{n}\bra{n} = I.
$$

Los operadores de creación y aniquilación actúan como:
$$
\hat{a}\ket{n} = \sqrt{n}\ket{n-1},
\quad
\hat{a}^\dagger\ket{n} = \sqrt{n+1}\ket{n+1}.
$$

#pendiente  #mecanica-cuantica 