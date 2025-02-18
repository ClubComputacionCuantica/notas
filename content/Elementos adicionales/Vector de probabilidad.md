Un _vector de probabilidad_ es una función $p:\Sigma \rightarrow \mathbb{R}$ tal que $\sum_{a\in\Sigma}p(a)=1$

El conjunto de todos los vectores de probabilidad para un alfabeto $\Sigma$ se denomina _simplex unidad estándar_, denotado por 
$$
\mathcal{P}(\Sigma) = \{p\in[0,1]^\Sigma:\sum_{a\in\Sigma}p(a)=1\}.
$$
#### Proposición: 
$\mathcal{P}(\Sigma)$ es [[Conjunto convexo|convexo]]:
	Dados $p_0, p_1 \in \mathcal{P}(\Sigma)$, $t\in[0,1]$, $tp_0(a)+(1-t)p_1(a)\in\mathcal{P}(\Sigma)$.
	En efecto, observe que $p(a)=tp_0(a)+(1-t)p_1(a)\in [0,1], \forall a \in\Sigma$ siendo $p(a)$ el segmento de recta que une los puntos $p_0(a),p_1(a)$ en el cerrado $[0,1]$. 
	Ademas,$$\sum_{a\in\Sigma}p(a)= t \sum_{a\in\Sigma}p_0(a) + (1-t)\sum_{a\in\Sigma}p_1(a) = t + (1-t) = 1.$$
	
		
		