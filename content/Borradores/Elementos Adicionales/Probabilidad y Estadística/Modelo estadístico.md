Un _modelo estadístico_ es una familia de [medidas de probabilidad](Medida%20de%20probabilidad.md) sobre un [Espacio medible](Espacio%20medible.md) $(\mathcal{X}, \mathcal{A})$, parametrizada por un conjunto $\Theta \subseteq \mathbb{R}^d$ llamado _espacio de parámetros_. Formalmente, un modelo estadístico es la familia:
$$\mathcal{P} = \{ P_\theta : \theta \in \Theta \},$$
donde cada $P_\theta$ es una medida de probabilidad en $(\mathcal{X}, \mathcal{A})$.

### Interpretación

- El conjunto $\Theta$ representa los posibles _estados_ o _hipótesis_ acerca de la distribución de los datos.
- Observar datos $X \in \mathcal{X}$ se interpreta como una realización aleatoria cuya distribución está gobernada por algún $P_\theta$ desconocido.
- El problema estadístico consiste en inferir (parcial o completamente) el valor de $\theta$ a partir de observaciones.

### Ejemplos

1. **Modelo Gaussiano**:  
    Para $\Theta = \mathbb{R} \times (0, \infty)$, definimos
    $$\mathcal{P} = \{ \mathcal{N}(\mu, \sigma^2) : (\mu, \sigma) \in \Theta \},$$
    donde cada $P_{(\mu,\sigma)}$ es la medida normal con media $\mu$ y varianza $\sigma^2$.
    
2. **Modelo de Bernoulli**:  
    Para $\Theta = [0,1]$,
    $$\mathcal{P} = \{ \text{Bernoulli}(p) : p \in [0,1] \}.$$


#estadística #probabilidad 