El _modelo del disco de Poincaré_ es una realización del [espacio hiperbólico](Espacio%20hiperbólico.md) bidimensional, es decir, un modelo de [geometría no euclídea](Geometría%20no%20euclideana.md) con curvatura constante negativa.

Formalmente, el espacio se define como el conjunto:
$$
\mathbb{D} = \{ z \in \mathbb{C} \mid |z| < 1 \}
$$
junto con la **métrica Riemanniana**:
$$
ds^2 = \frac{4\, |dz|^2}{(1 - |z|^2)^2}.
$$

### Geometría del disco

- Los **puntos** del espacio son los puntos del disco abierto unitario $\mathbb{D}$ en el plano complejo.

- Las **líneas geodésicas** son segmentos de circunferencias ortogonales al borde del disco (o bien diámetros).

- La **curvatura** del disco de Poincaré es constante y negativa:
$$
K = -1.
$$

### Propiedades

- El modelo es **conforme**, es decir, preserva los ángulos entre curvas.

- La métrica induce una [distancia hiperbólica](Distancia%20hiperbólica) dada por:
$$
d(z_1, z_2) = \tanh^{-1} \left| \frac{z_1 - z_2}{1 - \bar{z}_1 z_2} \right|.
$$

- El grupo de isometrías del disco es el grupo de transformaciones de Möbius que preservan $\mathbb{D}$:
$$
z \mapsto \frac{az + b}{\bar{b}z + \bar{a}}, \quad \text{con } |a|^2 - |b|^2 = 1.
$$

### Ejemplos de aplicaciones

- En [teoría de números](Teoría%20de%20números) y [funciones modulares](Teoría%20de%20funciones%20modulares), el disco de Poincaré se usa como dominio para acciones de grupos Fuchsianos.

- En [Geometría hiperbólica](Geometría%20hiperbólica), sirve como una representación visual intuitiva del plano hiperbólico.

- En [teoría cuántica de campos](Teoría%20cuántica%20de%20campos) y [teoría de cuerdas](Teoría%20de%20cuerdas), aparece como modelo de espacio-tiempo con simetría conforme.

#geometría-diferencial
