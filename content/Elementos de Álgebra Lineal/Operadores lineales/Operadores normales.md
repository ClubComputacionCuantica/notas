Un [[Operadores lineales|operador lineal]] $A : V \rightarrow V$ en un [[Espacio vectorial]] $V$ con [[producto interno]] se dice que es _normal_ si conmuta con su [[Adjunto de un operador|adjunto]], es decir, si satisface
$$
AA^\dagger=A^\dagger A.
$$
### Resultados

1. **[[Teorema espectral]]**: Todo operador normal admite una descomposición espectral ortonormal.

2. **Caracterización Hermitiana**: Un operador normal $T$ es [[Operadores Hermitianos|Hermitiano]] $T=T^\dagger$ si y solo si su [[Espectro de un operador lineal|espectro]] $\sigma(T)$ es real.

3. **Equivalencia unitaria**: Dos operadores normales \(T\) y \(S\) sobre un mismo espacio de Hilbert $\mathcal{H}$ son unitariamente equivalentes si existe un operador unitario$U$ tal que:
   $$U\,T\,U^\dagger = S.$$
   Esto implica que el espectro determina la estructura del operador hasta equivalencia unitaria.

4. **Igualdad de normas**: Para todo $x\in\mathcal H$ se cumple $$ \|T x\| = \|T^\dagger x\|,$$
   lo cual equivale a $\ker T = \ker T^\dagger$.

5. **Norma e imagen espectral**: La norma de un operador normal es igual a su radio espectral:
$$
\|T\| = \sup\{ |\lambda| : \lambda \in \sigma(T) \}
$$
donde $\sigma(T)$ es el [[Espectro de un operador lineal|espectro]] de $T$.

6. **Casos particulares**:
   - **Hermitiano**: $T = T^\dagger$
   - **Unitario**: $TT^\dagger = T^\dagger T = I$
   - **Positivo**: $T = T^\dagger$ y $\langle Tx, x \rangle \geq 0$ para todo $x \in \mathcal{H}$

#algebra-lineal 