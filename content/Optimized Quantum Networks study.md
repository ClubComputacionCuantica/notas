Las redes de comunicación cuántica con la capacidad de compartir estados entrelazados puede usarse para mejorar la capacidad de canales clásicos, hacer computación cuántica distribuida, entre otras funcionalidades. [^1][^2] #complementar

So the idea of the article is to reduce memory requirements where the "simple" approach would be to store all states that _might_ be required

The proposed requirement is to establish resource states prior to network requests, handled e.g. at times where the network would be idle.
The key challenge, quote, is to identify suitable entangled resource states that allow one to fulfill or assist any request without transmitting further quantum information.

Elementos fundamentales

[[Qubit]]
[[Entrelazamiento]]
Pares de Bell, [[Estados de Bell]]
	Estados de dos qubits con máximo entrelazamiento que pueden ser representados como
	$\ket{B_{ij}}=(\mathbb{I}\otimes\sigma_x^j\sigma_z^i)\ket{B_{00}}$
	donde $i,j\in\{0,1\}$, $\sigma_x$, $\sigma_z$ son los [[operadores de Pauli]] $X$ y $Z$, respectivamente.
Multipartite entangled states
	[[Estados GHZ]]
		Extension natural de los estados de Bell, i.e. estados máximamente entrelazados, para estados multipartitos representados como
		$\ket{GHZ_n}=\frac{1}{\sqrt{2}}\left(\ket{0}^{\otimes n} + \ket{1}^{\otimes n}  \right)$
	[[Elementos de Información Cuántica/Estado de grafo]]
		Los estados de grafo son una subclase de estados cuánticos multipartitos que se asocian y representan con un grafo $G=(V,E)$. Los vertices del grafo se asocian con qubits y el correspondiente estado de grafo $\ket{\psi_G}$ se define como el único eigenestado +1 del estabilizador  $K_a = \sigma_x^{(a)} \prod_{(a,b)\in E}\sigma_z^{(b)}$ para todo $a\in V$.
		Equivalentemente, los estados de grafo pueden ser descritos al operar con una compuerta Z-controlada $CZ=diag(1,1,1,-1)$ entre cualesquiera dos qubits conectados por una arista, i.e. $\ket{\psi_G}=\prod_{(a,b)\in E} CZ^{(a,b)}\ket{+}^{\otimes N}$ donde $\ket{+}=\frac{1}{\sqrt{2}}(\ket{0}+\ket{1})$ es el eigenestado +1 del operador $\sigma_x$.
Local operations
Quantum memory (in this specific context?)
Entanglement-based networks: where a resource state

Nodos de la red #pregunta
			Que tipo de nodos existen
			Que tipo de nodos se consideran como requisito en este caso
Topologia de red
Funcionalidad de la red
	Generación de pares de Bell entre nodos pre-seleccionados
	Generación de estados entrelazados multipart

Network state
Resource state #pregunta #apparently 
			Are network and resource states the same? Not quite. Resource states refers to a state of the network that can be used to fulfill network requests
		Our resource states involve multipartite entanglement in general described by graph states
		We do not consider the preparation process of the resource state but only its storage
	Graph states
Target states
	
Network requests
	Here we restrict requests to multiple parallel bipartite connections
	We restrict to communication requests that only involve bipartite links between parties, so our target states are Bell states
#apparently
	static phase is when the states are stored
	adaptive phase is when local operations
Network clusters


Elementos adyacentes

Comunicación cuántica
Teletransportación cuántica
Remote sensing
Distributed quantum computation

[^1]: I. D. Quantum communication, quantum networks and quantum sensing
[^2]: S. Wehner et. al. Quantum internet: A vision for the road ahead

