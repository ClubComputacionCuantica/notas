Las *ecuaciones de Maxwell* forman el marco fundamental del electromagnetismo clásico. Describen cómo se generan y modifican los campos eléctrico ($\mathbf{E}$) y magnético ($\mathbf{B}$) debido a la presencia de cargas eléctricas y corrientes, así como su propagación en el espacio.
### Forma general

$$\begin{align*}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} && \text{(Ley de Gauss para el campo eléctrico)} \\
\nabla \cdot \mathbf{B} &= 0 && \text{(Ley de Gauss para el campo magnético)} \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} && \text{(Ley de Faraday)} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} && \text{(Ley de Ampère-Maxwell)}
\end{align*}$$

donde:  
- $\rho(\mathbf{r}, t)$ es la densidad de carga eléctrica,  
- $\mathbf{J}(\mathbf{r}, t)$ es la densidad de corriente eléctrica,  
- $\varepsilon_0$ es la permitividad del vacío,  
- $\mu_0$ es la permeabilidad del vacío.
### En el vacío
En ausencia de cargas y corrientes ($\rho = 0$, $\mathbf{J} = 0$):

$$\begin{align*}
\nabla \cdot \mathbf{E} &= 0 && \text{(Ley de Gauss para el campo eléctrico)} \\
\nabla \cdot \mathbf{B} &= 0 && \text{(Ley de Gauss para el campo magnético)} \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} && \text{(Ley de Faraday)} \\
\nabla \times \mathbf{B} &= \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} && \text{(Ley de Ampère-Maxwell)}
\end{align*}$$