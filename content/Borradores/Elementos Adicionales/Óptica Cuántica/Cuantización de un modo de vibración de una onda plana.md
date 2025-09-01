Considere las expresiones de los campos eléctrico y magnético de una [Onda electromagnética plana viajera](../Onda%20electromagnética%20plana%20viajera.md) en un modo de vibración $\mathcal{l}$, 

$$\mathbf{E}(\mathbf{r}, t) = \vec{\epsilon}_\mathcal{l} \, \mathcal{E}_\mathcal{l}(t) \, e^{i\{\mathbf{k}_\mathcal{l} \cdot \mathbf{r}\}} + \text{c.c.}\hspace{6pt};$$

$$\mathbf{B}(\mathbf{r}, t) = \frac{\mathbf{k}_\mathcal{l}\times\vec{\epsilon}_\mathcal{l}}{\omega_\mathcal{l}} \, \mathcal{E}_\mathcal{l}(t) \, e^{i\{\mathbf{k}_\mathcal{l} \cdot \mathbf{r}\}} + \text{c.c.}\hspace{6pt}.$$

Podemos restringir este campo electromagnético a un volumen finito, que llamamos *volumen de cuantización* $V_\mathcal{l}$.[^1]

En este caso tomamos una caja de longitud $L$, de modo que $V_\mathcal{l}=L^3$. Y utilizamos condiciones de frontera periódicas:
$$\begin{align}
k_\mathcal{lx}L &= 2\pi n_\mathcal{lx}, \\
k_\mathcal{ly}L &= 2\pi n_\mathcal{ly}, \\
k_\mathcal{lz}L &= 2\pi n_\mathcal{lz};
\end{align}$$
que garantizan la periodicidad del campo eléctrico en todas direcciones (e.g. $\mathbf{E}(0,0,L,t)=\mathbf{E}(0,0,0,t)$). Observe que esto impone restricciones para el vector de onda $\mathbf{k}_\mathcal{l}$.

### Variables canónicamente conjugadas
Podemos re-escribir [^2] 
$$\mathcal{E}_\mathcal{l}(t)=i\mathscr{E}_\mathcal{l}^{(1)}\alpha_\mathcal{l}(t)$$ donde $\mathscr{E}_\mathcal{l}^{(1)} =\sqrt{\frac{\hbar\omega_\mathcal{l}}{2\epsilon_0 V_\mathcal{l}}}$ tiene dimensiones de campo eléctrico, $V_\mathcal{l}$ es el volumen de cuantización, y de modo que $\alpha_\mathcal{l}$ no tiene dimensiones.

Además, se verifica
$$\frac{d\alpha_\mathcal{l}(t)}{dt}=-i\omega_\mathcal{l}\alpha_\mathcal{l}(t).$$ Entonces podemos expresar a $\alpha_\mathcal{l}$ en términos de sus partes real e imaginaria salvo por un factor:
$$\alpha_\mathcal{l}(t)=\frac{1}{\sqrt{2\hbar}}(Q_\mathcal{l}+iP_\mathcal{l})$$ con $Q_\mathcal{l}=\sqrt{\frac{\hbar}{2}}(\alpha_\mathcal{l}(t)+\alpha_\mathcal{l}^*(t))$, $P_\mathcal{l}=-i\sqrt{\frac{\hbar}{2}}(\alpha_\mathcal{l}(t)-\alpha_\mathcal{l}^*(t))$.

#### Energía del campo electromagnético
Se verifica 
$$H_\mathcal{l}=\frac{\epsilon_0}{2}\int_{V_\mathcal{l}}d^3r(\mathbf{E}^2+c^2\mathbf{B}^2)=2\epsilon_0\int_{V_\mathcal{l}}d^3r|\mathcal{E}_\mathcal{l}(t)|^2=2\epsilon_0V_\mathcal{l}|\mathcal{E}_\mathcal{l}(t)|^2 = 2\epsilon_0 V_\mathcal{l}\left[\mathscr{E}_\mathcal{l}^{(1)}\right]^2|\alpha_\mathcal{l}(t)|^2,$$
de lo cual, 
$$H_\mathcal{l}= \hbar\omega_\mathcal{l}|\alpha_\mathcal{l}(t)|^2=\frac{\omega_\mathcal{l}}{2}\left(Q_\mathcal{l}^2+P_\mathcal{l}^2\right).$$
Con este Hamiltoniano, se verifican las [Ecuaciones de Hamilton](../../Elementos%20de%20Mecánica%20Clásica/Ecuaciones%20de%20Hamilton.md) 
$$\begin{align}\frac{dQ_\mathcal{l}}{dt}&=\frac{\delta H}{\delta P_\mathcal{l}}=\omega_\mathcal{l}P_\mathcal{l}\hspace{6pt}; \\
\frac{dP_\mathcal{l}}{dt}&=-\frac{\delta H}{\delta Q_\mathcal{l}} = -\omega _\mathcal{l} Q_\mathcal{l}.\end{align}$$ Además, se verifica $\{Q_\mathcal{l},P_\mathcal{l}\}=1$. Luego $Q_\mathcal{l}$ y $P_\mathcal{l}$ son [Observables clásicos canónicamente conjugados](../Elementos%20de%20Mecánica%20Clásica/Observables%20clásicos%20canónicamente%20conjugados.md). Usando [Cuantización canónica](../Elementos%20de%20Mecánica%20Cuántica/Cuantización%20canónica.md), introducimos los operadores $\hat{Q}_\mathcal{l}$ y $\hat{P}_\mathcal{l}$ tales que
$$
[\hat{Q}_\mathcal{l},\hat{P}_\mathcal{l}] = i\hbar.
$$
Y el correspondiente [Hamiltoniano](../Elementos%20de%20Mecánica%20Cuántica/Hamiltoniano.md)
 $$\hat{H}_\mathcal{l}=\frac{\omega_\mathcal{l}}{2}\left(\hat{Q}_\mathcal{l}^2+\hat{P}_\mathcal{l}^2\right).
$$
Observe que este Hamiltoniano corresponde con el [Oscilador armónico cuántico](../../Elementos%20de%20Mecánica%20Cuántica/Oscilador%20armónico%20cuántico.md). 

Además, definimos los [Operadores de creación y aniquilación](../../Elementos%20de%20Mecánica%20Cuántica/Operadores%20de%20creación%20y%20aniquilación.md)
$$
\begin{align}
\alpha_\mathcal{l}(t)&\rightarrow\hat{a}_\mathcal{l}=\frac{1}{\sqrt{2\hbar}}(\hat{Q}_\mathcal{l}+i\hat{P}_\mathcal{l}),\\
\alpha^*_\mathcal{l}(t)&\rightarrow\hat{a}^\dagger_\mathcal{l}=\frac{1}{\sqrt{2\hbar}}(\hat{Q}_\mathcal{l}-i\hat{P}_\mathcal{l}),
\end{align}
$$
con $[\hat{a}_\mathcal{l},\hat{a}^\dagger_\mathcal{l}]=1$. De lo cual, podemos recuperar el Hamiltoniano 
$$\hat{H}_\mathcal{l}=\hbar \omega_\mathcal{l}(\hat{a}^\dagger_\mathcal{l}\hat{a}_\mathcal{l}+\frac{1}{2}).$$
![Pasted image 20250408220519](Óptica%20Cuántica/assets/Pasted%20image%2020250408220519.png)
![Pasted image 20250408220606](Óptica%20Cuántica/assets/Pasted%20image%2020250408220606.png)
### Observables

[^1]: El volumen de cuantización no representa una restricción física fundamental, sino una herramienta matemática para discretizar los modos del campo.
[^2]: Por convención se introduce la fase $i$. $\mathscr{E}_\mathcal{l}^{(1)}$ se conoce como la *amplitud de un fotón en el modo $\mathcal{l}$.*