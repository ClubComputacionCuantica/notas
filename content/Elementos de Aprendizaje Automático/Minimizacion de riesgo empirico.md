Considérese el caso en el que el [[predictor]] es una función. 
Dados $N$ ejemplos $\mathbf{x}_n\in\mathbb{R}^D$ con correspondientes etiquetas escalares $y_n\in\mathbb{R}$, y considere una configuración de aprendizaje supervisado, donde obtenemos pares $(\mathbf{x}_1,y_1),...,(\mathbf{x}_N,y_N)$.
Dados estos datos, nos gustaría estimar un predictor $$f(\cdot,\mathbf{\theta}):\mathbb{R}^D \rightarrow \mathbb{R}$$ parametrizado por $\mathbf{\theta}$. Buscamos encontrar un buen parámetro $\mathbf{\theta}^*$ tal que se ajuste bien a los datos, esto es, $$f(\mathbf{x}_n,\mathbf{\theta}^*)\approx y_n,\hspace{12pt}\forall n\in\{1,...,N\}.$$ A continuación usamos la notación $\hat{y}_n = f(\mathbf{x_n},\mathbf{\theta}^*)$ para representar la salida del predictor.
#### Ejemplo
Se introduce el problema de regresion de minimos cuadrados ordinaria para ilustrar la minimizacion de riesgo empirico. 
Suponga que la etiqueta $y_n\in\mathbb{R}$ y en este caso usamos la notacion $\mathbf{x}_n = [x_n^{(0)},x_n^{(1)},...,x_n^{(D)}]^T$, donde suponemos $x_n^{(0)}=1$ para cada $n$. Ademas, escribimos el vector de parametros $\mathbf{\theta}=[\theta_0,...,\theta_D]^T$, lo cual nos permite escribir el predictor como la funcion lineal $$f(\mathbf{x}_n,\mathbf{\theta})=\mathbf{\theta}^T\mathbf{x}_n.$$ Este predictor es equivalente al modelo [[Operador afín|afín]] $$f(\mathbf{x}_n,\mathbf{\theta})=\theta_0 + \sum_{d=1}^D \theta_d x_n^{d}.$$Este predictor toma el vector de características representando un ejemplo $\mathbf{x}_n$ como entrada y produce una salida real, i.e. $f:\mathbb{R}^D+1 \rightarrow \mathbb{R}$.


[^1]
[^1]:: Mathematics for Machine Learning