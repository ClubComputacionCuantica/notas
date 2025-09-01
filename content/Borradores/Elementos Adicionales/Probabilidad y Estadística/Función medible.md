Sean $(\mathcal{X}, \mathcal{A})$ y $(\mathcal{Y}, \mathcal{B})$ [espacios medibles](Espacio%20medible.md). Una *función medible* es una aplicación
$$f : \mathcal{X} \to \mathcal{Y}$$
tal que, para todo $B \in \mathcal{B}$,
$$f^{-1}(B) \in \mathcal{A}.$$

### Interpretación

- La condición de medibilidad garantiza que los eventos de interés en $\mathcal{Y}$ se pueden “trazar” a eventos en $\mathcal{X}$, de modo que conserven estructura medible.
- Dicho de otra forma: una función medible permite transportar medidas de un espacio a otro mediante la construcción de la _medida imagen_: $$\mu_f(B) = \mu(f^{-1}(B)), \quad B \in \mathcal{B}.$$

### Ejemplos

1. **Función identidad:**  
    $f(x) = x$ es siempre medible.
2. **Funciones continuas:**  
    Si $(\mathcal{X}, \tau)$ y $(\mathcal{Y}, \tau')$ son espacios topológicos, toda función continua $f:\mathcal{X}\to\mathcal{Y}$ es medible respecto a las $\sigma$-álgebras de Borel.
3. **Variables aleatorias:**  
    Una [Variable aleatoria](Variable%20aleatoria.md) $X : (\Omega, \mathcal{F}, P) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$ es, por definición, una función medible.

### Relación con otros conceptos

- La medibilidad es condición necesaria para definir la [integral de Lebesgue](integral%20de%20Lebesgue) de una función respecto a una medida.
    
- Las funciones medibles son el objeto central de estudio en la teoría de la probabilidad y en el análisis de [espacios $L^p$](espacios%20$L^p$).
    

 #análisis-funcional #medida
