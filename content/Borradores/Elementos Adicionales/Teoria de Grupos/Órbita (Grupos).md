Sean $G$ un [Grupo](Grupo.md), $X$ un conjunto y $\ast : G \times X \rightarrow X$ una [Acción de grupo](Acción%20de%20grupo.md).
La _órbita_ de un elemento $x\in X$ se define como
$$
Orb(x):=\{y\in X| \exists g\in G : y = g \ast x\} = G\ast x
$$
Se verifica que la relación $x\mathcal{R}y\iff \exists g \in G : y = g \ast x$ es una [Relación de equivalencia](../Relación%20de%20equivalencia.md) en $X$.[^1]
Generalmente denotamos por $Orb(x)$ a la [clase de equivalencia](clase%20de%20equivalencia) de $x$ bajo $\mathcal{R}$.

[^1]: https://proofwiki.org/wiki/Group_Action_Induces_Equivalence_Relation