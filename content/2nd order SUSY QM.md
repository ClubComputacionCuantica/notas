Relación de entrelazamiento: $H^- L^+ = L^+ H^+$
Construye un espectro de $H^-$ con un nivel de energia adicional menor que los valores de energia del espectro de $H^+$ (verificando que la funcion de onda asociada al valor adicional sea de cuadrado integrable) $L^- \ket{\psi} = 0$
Partiendo del espectro de $H^-$ se puede construir el espectro de $H^+$ (a traves de $L^-$)

Se tiene la relacion (where does this really come from?) 
$$
H^- L^+ = L^+ H^+ \rightarrow H^- L^- = L^- H^+
$$
Puesto que $(L^+)^\dagger = L^-$. 

Para definir SUSY QM de segundo orden, asumimos que el operador de entrelazamiento es de segundo orden.
$V^\pm$ son cualesquiera potenciales que generan los Hamiltonianos $H^\pm$
Sean $H^\pm$ dos Hamiltonianos dados por
$$
H^\pm = -\frac{d^2}{dx^2}+V^{\pm}
$$
los cuales estan entrelazados de la siguiente manera
$$
H^+L^-=L^-H^+
$$
con
$$
L^-=\frac{d^2}{dx^2} + \eta(x)\frac{d}{dx} + \gamma(x)
$$

Supongase que son conocidas las eigenfunciones $\{\phi^-_n\}$ y eigenvalores $\{E^-_n|E^-_n<E_{n+1} para n=0,1,\dots\}$ de $H^-$, entonces
$$
\phi^+_n = L^-\phi^-_n
$$
es una eigenfuncion de $H^+$ con eigenvalor $E^-_n$

Notemos que la norma de $\phi^+_n$ es tal que 
$$
(\phi^+_n,\phi^+_n)=(L^+\phi^-_n,L^-\phi^-_n)=(\phi^-_n,L^+L^-\phi^-_n)
$$
Se tiene que 
$$
L^+ = (L^-)^\dagger = \frac{d^2}{dx^2}-\eta(x)\frac{d}{dx}+\gamma(x)-\eta'(x)
$$
Tomando el operador momento $\frac{d}{dx}=iP$.

Por otro lado, se puede verificar
$$
H^+L^- = -\frac{d^4}{dx^4} +\eta\frac{d^3}{dx^3}+(V^- -2\eta' - \gamma)\frac{d^2}{dx^2} + (\eta V^+ -\eta''-2\gamma')\frac{d}{dx} + (\gamma V^+-\gamma'')
$$
Y
$$
L^-H^- =-\frac{d^4}{dx^4} +\eta\frac{d^3}{dx^3}+(V^-- \gamma)\frac{d^2}{dx^2} + (\eta V^- + 2 {V^-}')\frac{d}{dx} + ({V^-}''+\eta{V^-}'+\gamma V^-)
$$
De lo cual
$$
V^+ = V^- + 2\eta ';
$$
$$
\eta V^+ - \eta '' - 2\gamma '= \eta V^-+2{V^-}';
$$
$$
\gamma V^+ -\gamma''= {V^-}''+\eta {V^-}' + \gamma V^-.
$$
Sustituyendo $V^+$ de la primer relacion en la segunda e integrando se obtiene
$$
\gamma = \frac{\eta^2}{2} - \frac{\eta '}{2} - V^- + d,
$$
con $d$ una constante de integracion.

Por otro lado, si sustituimos $V^+$ de la primer ecuacion en la tercera ecuacion, se obtiene
$$
\gamma '' = 2\gamma\eta '-{V^-}''-\eta V^-
$$
Sustituyendo gamma anterior en esta ecuacion e integrando, obtenemos
$$
\frac{\eta \eta ''}{2}- (\frac{\eta '}{2})^2 - \eta^2\eta' + \frac{\eta^4}{4}-\eta^2V^- + \eta^2d +c = 0
$$
(a diferencia del caso de primer orden, no tenemos forma de linealizar esta ecuación)

Para determinar el valor de $\eta$, se propone lo siguiente (because it works):
$$
\eta' = \eta^2+2\beta(x)-2\xi(x)
$$
Al utilizar la propuesta anterior se obtiene
$$
(\beta ' + \beta^2 - V^- + \xi +d)\eta^2 - \xi'+(c-\xi^2)=0
$$
Si cada coeficiente es cero, entonces $\xi = cte$; $\xi^2 = c \rightarrow \xi = \pm \sqrt{c}$ (what happens when $c$ is negative?).
Entonces
$$
\beta' + \beta^2 - V^- + \xi + d = 0
$$
y
$$
\beta'+\beta^2=V^- - \epsilon, \hspace{24pt}\epsilon = \xi +d
$$
(Ecuacion de Ricatti)

Se puede linealizar:
Si $\beta = \frac{U'}{U}$, se tiene que $-U'' + V^- U = \epsilon U$ (Schrodinger equation) Por la forma en que se define $\epsilon$, la energía de factorizacion, tiene dos posibles valores.

Por otro lado, $L^\pm L^\mp$ son
$$
L^+L^- = (H^- -\epsilon_1)(H^- - \epsilon_2)
$$
$$
L^-L^+ = (H^+ -\epsilon_1)(H^+ - \epsilon_2)
$$
Entonces la norma
$$
(\phi_n^+,\phi_n^+) = (\Sigma_n^- -\epsilon_1)(\Sigma_n^- -\epsilon_2)\geq0
$$
Podemos clasificar las energías de factorizacion
- Si $c<0$, $\epsilon_1 \in \mathbb{C}$ , $\epsilon_2 = \bar{\epsilon_1}$. Para este caso se tiene que $$U_2 = \bar{U_1}$$ lo que nos lleva a $$\eta = \frac{Im(\epsilon_1)}{Im(\beta_1)} = \frac{(\epsilon_1 - \bar{\epsilon_1})|U_1|^2}{W(U_1,\bar{U_1})}$$
- Si $c=0$, $\epsilon_2 = \epsilon_1$ ("Caso confluente"). En este caso $$\eta = \eta(x,\omega_0)=\frac{U^2(x)}{\omega_0 - \int_{x_0}^{x}U^2(t)dt}=\frac{W'(x,\omega_0)}{W(x,\omega_0)}$$ con $W(x,\omega_0) = \omega_0 - \int_{x_0}^{x}U^2(t)dt$. Aquí se exigen condiciones apropiadas para $W$ dependiendo de la forma de $U$.
- Si $c>0$, $\epsilon_2 \neq \epsilon_1$, $\epsilon_1, \epsilon_2 \in \mathbb{R}$. Se obtiene el valor de $\eta$. De la propuesta anteriormente mencionada, $$\eta ' = \eta^2 - 2 \beta_1 \eta - (\epsilon_1 - \epsilon_2)$$$$ \eta ' = \eta^2 - 2 \beta_2 \eta + (\epsilon_1 - \epsilon_2) $$ Entonces $$\eta = \frac{\epsilon_1 - \epsilon_2}{\beta_1 - \beta_2} = \frac{-(\epsilon_1 - \epsilon_2)U_1U_2}{W(U_1,U_2)} = - \frac{d}{dx}\ln{W(U_1,U_2)}$$
Falta verificar si las funciones construidas a partir del operador de entrelazamiento son de cuadrado integrable, si $(E_n^- - \epsilon_1)(E_n^+ - \epsilon_2)>0$.

(w.l.o.g. $\epsilon_2<\epsilon_1$)
- En el caso  $\epsilon_2<\epsilon_1<E_0^-$, entonces ambos factores en la relacion anterior son positivos. Aqui se tiene que los estados 
$$
\phi^+_n = \frac{L^- \phi_n^-}{\sqrt{(E_n^- - \epsilon_1)(E_n^+ - \epsilon_2)}}
$$  son eigenfunciones fisicas de $H^+$ con eigenvalores $E_n^-$. Luego, los eigenestados definidos como
(funciones que encuentro a partir de la energia de factorizacion)
$$
\phi^+_{\epsilon_{1,2}} \propto \frac{\eta}{U_{\epsilon_{1,2}}} 
$$ 
con $H^- U = \epsilon_{1,2}U$ serán soluciones físicas si son de cuadrado integrable con eigenvalores $\epsilon_{1,2}$. 
- En el caso $E_j^- < \epsilon_2 < \epsilon_1 < E_{j+1}^-$ para algún valor de $j$, se tiene, si las funciones $\phi^+_{\epsilon_{1,2}}$ son de cuadrado integrable, entonces $$Sp\{H^+\}= \{E^-_0, E^-_1, \dots, E^-_j, \epsilon_1, \epsilon_2, E^-_{j+1}, \dots\}=\{E^+_0,E^+_1,\dots,E^+_{j},E^+_{j+1},E^+_{j+2},\dots\}$$
- En el caso $E_j^- = \epsilon_2 < \epsilon_1 < E_{j+1}^-$ . Si coloco las energias de factorizacion tendriamos cero en $(E_n^- - \epsilon_1)(E_n^+ - \epsilon_2)$, por tanto dejamos de tener solucion fisica para $j$. Luego $$Sp\{H^+\}= \{E^-_0, \dots, E^-_{j-1}, \epsilon_1, E^-_{j+1}, \dots\}$$ Aunque no es parte del espectro la energía de factorizacion sigue hablando de como es el nuevo potencial.
- En el caso $\epsilon_2 = E_j^-; \epsilon_1 = E_{j+1}^-$, se tiene $$Sp\{H^+\}= \{E^-_0,\dots, E^-_{j-1}, E^-_{j+2}, \dots\}$$ 
- No podemos tomar energías de factorizacion entre distintos valores de energía $j, k$, puesto que se viola la condición $(E_n^- - \epsilon_1)(E_n^+ - \epsilon_2)>0$ (que viene de la norma)

Ahora solo se pide que el Wronskiano $W$ no tenga nodos, a diferencia del caso de primer orden donde es la funcion semilla que se pide sin nodos.

Podemos clasificar potenciales, socios supersimetricos:

**Potenciales invariantes de forma**:
En las transformaciones supersimétricas son tales que $$V^+ (x,\lambda_1) = V^- (x,\lambda_0) + R(\lambda_1)$$ donde $\lambda_0$ es el conjunto de parametros de $V^-$ y $\lambda_1$ es una funcion de $\lambda_0$. 
(e.g. oscilador armonico)
Si se cumple la condicion, $\epsilon_1 = E_0^-, \epsilon_2 = E_1^-$ siempre tengo socios invariantes de forma


**Modificacion racional**
Si tenemos socios supersimetricos de la forma
$$V^+ (x,\lambda_0) = V^- (x,\lambda_1)+\frac{P(z)}{Q(z)}$$
donde $\lambda_0$ es un conjunto de parametros y $\lambda_1 = \lambda_0 (\lambda_1)$, $z = z(x)$, con $P,Q$ polinomios.

Si se cumple la condicion, $\epsilon_1 = E_j^-, \epsilon_2 = E_j^-$ siempre tengo socios de modificación racional.

Ejemplo: 
(photo)
En este caso se construyen potenciales que aparentemente no se pueden decir si tiene solucion exacta a traves de la eq de Schrodinger, pero se conoce que es exactamente soluble a traves de la construccion.

Some references:

_Higher order supersymmetric quantum mechanics_, David Fernandez Cabrera.
_Supersymmetry in quantum mechanics_, Fred Cooper.