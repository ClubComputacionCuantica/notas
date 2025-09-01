Un [operador lineal](Operadores%20lineales.md) $A : V \rightarrow V$ en un [espacio vectorial](../Fundamentos/Espacio%20vectorial.md) $V$ con [producto interno](../Producto%20interno%20y%20norma/Producto%20interno.md) se dice que es _normal_ si conmuta con su [adjunto](Adjunto%20de%20un%20operador.md), es decir, si satisface
$$
AA^\dagger=A^\dagger A.
$$
### Resultados

1. **[Teorema Espectral](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Teorema%20Espectral.md)**: Todo operador normal admite una descomposición espectral ortonormal.

2. **Caracterización Hermitiana**: Un operador normal $T$ es [Hermitiano](Operadores%20Hermitianos.md) $T=T^\dagger$ si y solo si su [espectro](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Espectro%20de%20un%20operador%20lineal.md) $\sigma(T)$ es real.

3. **Equivalencia unitaria**: Dos operadores normales \(T\) y \(S\) sobre un mismo espacio de Hilbert $\mathcal{H}$ son unitariamente equivalentes si existe un operador unitario$U$ tal que:
   $$U\,T\,U^\dagger = S.$$
   Esto implica que el espectro determina la estructura del operador hasta equivalencia unitaria.

4. **Igualdad de normas**: Para todo $x\in\mathcal H$ se cumple $$ \|T x\| = \|T^\dagger x\|,$$
   lo cual equivale a $\ker T = \ker T^\dagger$.

5. **norma e imagen espectral**: La norma de un operador normal es igual a su radio espectral:
$$
\|T\| = \sup\{ |\lambda| : \lambda \in \sigma(T) \}
$$
donde $\sigma(T)$ es el [espectro](Teoría%20espectral,%20eigenvalores%20y%20eigenvectores/Espectro%20de%20un%20operador%20lineal.md) de $T$.

6. **Casos particulares**:
   - **Hermitiano**: $T = T^\dagger$
   - **Unitario**: $TT^\dagger = T^\dagger T = I$
   - **Positivo**: $T = T^\dagger$ y $\langle Tx, x \rangle \geq 0$ para todo $x \in \mathcal{H}$

#algebra-lineal 