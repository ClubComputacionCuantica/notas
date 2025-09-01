Dado un [Modelo estadístico](Modelo%20estadístico.md) $\mathcal{P} = { P_\theta : \theta \in \Theta }$ sobre un espacio medible $(\mathcal{X}, \mathcal{A})$ y una observación $x \in \mathcal{X}$, la **función de verosimilitud** es la aplicación
$$L : \Theta \to [0,\infty), \qquad L(\theta \mid x) := f_\theta(x),$$
donde $f_\theta$ es la densidad (o función de probabilidad en el caso discreto) de $P_\theta$ respecto a una medida de referencia común $\mu$:
$$dP_\theta(x) = f_\theta(x)\, d\mu(x).$$
### Interpretación

- $L(\theta \mid x)$ cuantifica **qué tan plausible** es que el parámetro verdadero sea $\theta$ dado el dato observado $x$.
- La verosimilitud **no es una probabilidad en $\theta$**, sino una función proporcional a la densidad evaluada en $x$.
- Solo las razones de verosimilitudes son significativas:
   $$
  \frac{L(\theta_1 \mid x)}{L(\theta_2 \mid x)} 
  = \frac{f_{\theta_1}(x)}{f_{\theta_2}(x)}.
  $$

### Casos con varias observaciones

Si se observa una muestra independiente $X = (X_1,\dots,X_n)$, la función de verosimilitud es:

L(θ∣x1,…,xn)=∏i=1nfθ(xi).L(\theta \mid x_1,\dots,x_n) = \prod_{i=1}^n f_\theta(x_i).

### Ejemplos

1. **Modelo Bernoulli** con $n$ observaciones:  
    Si $X_i \sim \text{Bernoulli}(p)$ y $\sum_i x_i = k$, entonces
    
    L(p∣x1,…,xn)=pk(1−p)n−k.L(p \mid x_1,\dots,x_n) = p^k (1-p)^{n-k}.
2. **Modelo Gaussiano** $N(\mu,\sigma^2)$ con $\sigma$ conocida:  
    Para datos $x_1,\dots,x_n$,
    
       $$
   L(\mu \mid x_1,\dots,x_n) 
   = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}\sigma} 
   \exp\!\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right).
   $$

### Relación con otros conceptos

* La \[\[estimación de máxima verosimilitud (MLE)]] consiste en encontrar

  $$
  \hat{\theta} = \arg\max_{\theta \in \Theta} L(\theta \mid x).
  $$
* A menudo se trabaja con la **log-verosimilitud**:

  $$
  \ell(\theta \mid x) = \log L(\theta \mid x),
  $$

  porque convierte productos en sumas y facilita la derivación de condiciones de optimalidad.

#estadística #modelos-estadísticos #inferencia
Perfecto, aquí tienes la nota para **función de verosimilitud**, continuando la cadena de conceptos:

---

## Función de verosimilitud

Dado un \[\[modelo estadístico]] \$\mathcal{P} = { P\_\theta : \theta \in \Theta }\$ sobre un espacio medible \$(\mathcal{X}, \mathcal{A})\$ y una observación \$x \in \mathcal{X}\$, la **función de verosimilitud** es la aplicación

$$
L : \Theta \to [0,\infty), \qquad L(\theta \mid x) := f_\theta(x),
$$

donde \$f\_\theta\$ es la densidad (o función de probabilidad en el caso discreto) de \$P\_\theta\$ respecto a una medida de referencia común \$\mu\$:

$$
dP_\theta(x) = f_\theta(x)\, d\mu(x).
$$

### Interpretación

* \$L(\theta \mid x)\$ cuantifica **qué tan plausible** es que el parámetro verdadero sea \$\theta\$ dado el dato observado \$x\$.
* La verosimilitud **no es una probabilidad en \$\theta\$**, sino una función proporcional a la densidad evaluada en \$x\$.
* Solo las razones de verosimilitudes son significativas:

  $$
  \frac{L(\theta_1 \mid x)}{L(\theta_2 \mid x)} 
  = \frac{f_{\theta_1}(x)}{f_{\theta_2}(x)}.
  $$

### Casos con varias observaciones

Si se observa una muestra independiente $X = (X\_1,\dots,X\_n)$, la función de verosimilitud es:
$$L(\theta \mid x_1,\dots,x_n) = \prod_{i=1}^n f_\theta(x_i).$$
### Ejemplos

1. **Modelo Bernoulli** con \$n\$ observaciones:
   Si \$X\_i \sim \text{Bernoulli}(p)\$ y \$\sum\_i x\_i = k\$, entonces

   $$
   L(p \mid x_1,\dots,x_n) = p^k (1-p)^{n-k}.
   $$

2. **Modelo Gaussiano** \$N(\mu,\sigma^2)\$ con \$\sigma\$ conocida:
   Para datos \$x\_1,\dots,x\_n\$,

   $$
   L(\mu \mid x_1,\dots,x_n) 
   = \prod_{i=1}^n \frac{1}{\sqrt{2\pi}\sigma} 
   \exp\!\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right).
   $$

### Relación con otros conceptos

* La \[\[estimación de máxima verosimilitud (MLE)]] consiste en encontrar

  $$
  \hat{\theta} = \arg\max_{\theta \in \Theta} L(\theta \mid x).
  $$
* A menudo se trabaja con la **log-verosimilitud**:

  $$
  \ell(\theta \mid x) = \log L(\theta \mid x),
  $$

  porque convierte productos en sumas y facilita la derivación de condiciones de optimalidad.

#estadística
