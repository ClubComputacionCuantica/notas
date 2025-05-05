El _modelo del disco de Poincaré_ es una realización del [[Espacio hiperbólico|espacio hiperbólico]] bidimensional, es decir, un modelo de [[Geometría no euclideana|geometría no euclídea]] con curvatura constante negativa.

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

- La métrica induce una [[Distancia hiperbólica|distancia hiperbólica]] dada por:
$$
d(z_1, z_2) = \tanh^{-1} \left| \frac{z_1 - z_2}{1 - \bar{z}_1 z_2} \right|.
$$

- El grupo de isometrías del disco es el grupo de transformaciones de Möbius que preservan $\mathbb{D}$:
$$
z \mapsto \frac{az + b}{\bar{b}z + \bar{a}}, \quad \text{con } |a|^2 - |b|^2 = 1.
$$

### Ejemplos de aplicaciones

- En [[Teoría de números|teoría de números]] y [[Teoría de funciones modulares|funciones modulares]], el disco de Poincaré se usa como dominio para acciones de grupos Fuchsianos.

- En [[Geometría hiperbólica]], sirve como una representación visual intuitiva del plano hiperbólico.

- En [[Teoría cuántica de campos|teoría cuántica de campos]] y [[Teoría de cuerdas|teoría de cuerdas]], aparece como modelo de espacio-tiempo con simetría conforme.

#geometría-diferencial
