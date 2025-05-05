El _espacio hiperbólico_ es un modelo fundamental de [[Geometría no euclideana|geometría no euclídea]] con curvatura constante negativa. Es el análogo no euclídeo del espacio euclídeo, pero con estructura geométrica distinta que permite, por ejemplo, que la suma de los ángulos internos de un triángulo sea menor que $\pi$.

El espacio hiperbólico de dimensión $n$ se denota por $\mathbb{H}^n$ y puede definirse como una [[Variedades Riemannianas|variedad Riemanniana]] completa, simplemente conexa, con curvatura seccional constante $K = -1$.

### Modelos

Existen varias representaciones equivalentes de $\mathbb{H}^n$:

1. **Modelo del disco de Poincaré**:
   $$
   \mathbb{D}^n = \{ x \in \mathbb{R}^n \mid \|x\| < 1 \}
   $$
   con métrica:
   $$
   ds^2 = \frac{4\, \|dx\|^2}{(1 - \|x\|^2)^2}
   $$

2. **Modelo del semiplano superior**:
   $$
   \mathbb{H}^n = \{ (x_1, \dots, x_{n-1}, y) \in \mathbb{R}^n \mid y > 0 \}
   $$
   con métrica:
   $$
   ds^2 = \frac{\|dx\|^2 + dy^2}{y^2}
   $$

3. **Modelo hiperbólico (modelo de Minkowski)**: Se define en $\mathbb{R}^{n+1}$ con una forma cuadrática de signo indefinido:
   $$
   \mathbb{H}^n = \{ x \in \mathbb{R}^{n+1} \mid x_0^2 - x_1^2 - \cdots - x_n^2 = 1,\ x_0 > 0 \}
   $$
   con la métrica inducida de la métrica de Minkowski.

### Propiedades

- $\mathbb{H}^n$ es homogéneo e isótropo: todos los puntos y direcciones son equivalentes.

- Tiene curvatura seccional constante negativa: $K = -1$.

- No satisface el postulado de las paralelas de Euclides: por un punto exterior a una recta existen infinitas geodésicas que no la intersectan.

- La métrica hiperbólica define una [[Distancia hiperbólica|distancia]] que crece rápidamente conforme los puntos se acercan al borde del modelo.


#geometría-diferencial
