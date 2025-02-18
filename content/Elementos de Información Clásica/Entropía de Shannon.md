Dado un [[Vector de probabilidad]] $p\in\mathcal{P}(\Sigma)$ sobre un alfabeto $\Sigma$, se define la _entropía de Shannon_ de $p$ como 
$$H(p)=-\sum_{a\in\Sigma} p(a)\log_2(p(a)).$$
##### Interpretación
La entropía de Shannon puede interpretarse como la "sorpresa promedio" que se obtiene al obtener el resultado de un experimento:
	$-log_2 (p(a))$ se interpreta como una medida logarítmica de la sorpresa que produce el obtener $a \in \Sigma$ en un resultado.
	En particular, observe que 
		$p(a)=1$ implica que la sorpresa,  $-log_2 (p(a))=0$
		$p(a)=0$ implica que la sorpresa,  $-log_2 (p(a))=+\infty$
A menudo se menciona la interpretación de la entropía de Shannon como el promedio de "incertidumbre". Sin embargo, un ejemplo a continuación comprueba que esta intuición es engañosa.
##### Ejemplos
Considere los registros con alfabetos y vectores de probabilidad correspondientes:

* Bit aleatorio: $\Sigma=\{0,1\}$ y $p\in\mathcal{P}(\Sigma)$ tal que $p(0)=p(1)=\frac{1}{2}$. Entonces $$H(p)=-2\cdot\frac{1}{2}\log{\frac{1}{2}}=\log2=1.$$ En cambio, si $p(0)=1$, $p(1)=0$, se tiene $$H(p)=-1\cdot\log1-0\log0=0,$$ (donde $0\log 0$  se toma como el limite $lim_{x\rightarrow 0^+}x\log x$).

* $\Sigma=\{1,...,n\}$, $p(k)=\frac{1}{k}, \forall k\in\Sigma$. Entonces $$H(p)=-n\cdot\frac{1}{n}\log\frac{1}{n}=\log n=\log \#\Sigma.$$
* $\Sigma=\{0,1,2\}$, $p(0)=\frac{1}{2}, p(1)=p(2)=\frac{1}{4}$. Entonces $$H(p)=-\frac{1}{2}\log\frac{1}{2}-2\cdot\frac{1}{4}\log\frac{1}{4}=\frac{1}{2}+\frac{1}{2}\cdot2 = \frac{3}{4}.$$
* $\Sigma=\{1,...,2^{n^2}\}$ con $p(0)=1-\frac{1}{n}$ y $p(k)=\frac{1}{n2^{n^2}}$, para $k\neq 0$. Entonces $$H(p)=-(1-\frac{1}{n})\log(1-\frac{1}{n})-2^{n^2}\cdot\frac{1}{n2^{n^2}}\log\frac{1}{n2^{n^2}}>-\frac{1}{n}\log{2^{-n^2}}=n\rightarrow\infty.$$ Mientras que $p(0)=1-\frac{1}{n}\rightarrow_{n\rightarrow\infty} 1.$ I.e. aumenta la certeza (disminuye la incertidumbre), pero la entropía tiende a infinito.

#### Resultados
* Para cualquier vector de probabilidad $p\in\mathcal{P}(\Sigma)$, $$0\leq H(p)\leq\log\#\Sigma.$$ Se sigue de la [[log es una función cóncava|concavidad de la función logaritmo]] y de la [[desigualdad de Jensen]].