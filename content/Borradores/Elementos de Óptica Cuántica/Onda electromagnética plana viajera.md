Una _onda electromagnética plana viajera_ es una solución en el vacío de las [[ecuaciones de Maxwell]], que describe la propagación de campos eléctrico y magnético oscilantes en forma de onda plana.
### Onda monocromática
La forma más básica corresponde a una única *onda plana monocromática* dada por el modo de vibración $\mathcal{l}(\vec{\epsilon}_\mathcal{l};\mathbf{k}_\mathcal{l})$:
$$\mathbf{E}(\mathbf{r}, t) = \vec{\epsilon}_\mathcal{l} \, \mathcal{E}_\mathcal{l}(t) \, e^{i\{\mathbf{k}_\mathcal{l} \cdot \mathbf{r}\}} + \text{c.c.}$$
donde:
  - $\mathbf{k}_\mathcal{l}$ es el [[vector de onda]],
  - $\vec{\epsilon}_\mathcal{l}$ es el [[vector de polarización]], perpendicular a $\mathbf{k}_\mathcal{l}$,
  - $\omega_\mathcal{l}=c k_\mathcal{l}$ es la frecuencia angular,
  - $\mathcal{E}_\mathcal{l}(t) = \mathcal{E}_\mathcal{l}(0) e^{-i \omega_\mathcal{l} t}$ es la amplitud temporal compleja (solución para una onda viajando en la dirección de $\mathbf{k}_\mathcal{l}$),
  - $\text{c.c.}$ indica el conjugado complejo para obtener un campo real.

*Mientras que $\mathcal{l}(\vec{\epsilon}_\mathcal{l};\mathbf{k}_\mathcal{l})$ determina el modo de vibración, la amplitud $\mathcal{E}_\mathcal{l}(t)$ determina la evolución temporal del campo $\mathbf{E}$.*

De las [[ecuaciones de Maxwell]], podemos encontrar la relación $$\frac{d\mathcal{E}_\mathcal{l}(t)}{dt}=-i\omega_\mathcal{l}\mathcal{E}_\mathcal{l}(t)$$ y el correspondiente campo magnético: $$\mathbf{B}(\mathbf{r}, t) = \frac{\mathbf{k}_\mathcal{l}\times\vec{\epsilon}_\mathcal{l}}{\omega_\mathcal{l}} \, \mathcal{E}_\mathcal{l}(t) \, e^{i\{\mathbf{k}_\mathcal{l} \cdot \mathbf{r}\}} + \text{c.c.}$$