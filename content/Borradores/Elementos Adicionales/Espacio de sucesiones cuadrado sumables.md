El _espacio $\ell^2$_ se define como el conjunto de todas las sucesiones de números reales o complejos $\{a_n\}$ tales que la suma de sus cuadrados es finita, es decir,
$$
\ell^2 = \left\{ \{a_n\}_{n=1}^{\infty} \mid a_n \in \mathbb{C}, \sum_{n=1}^{\infty} |a_n|^2 < \infty \right\}.
$$
 Dotado de un producto interno, este espacio es un ejemplo de _[espacio de Hilbert](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/Espacio%20de%20Hilbert.md)_ sobre $\mathbb{R}$ o $\mathbb{C}$. El producto interno en $\ell^2$ se define como
$$
\langle \{a_n\}, \{b_n\} \rangle = \sum_{n=1}^{\infty} a_n b_n^*,
$$
donde $b_n^*$ denota el conjugado complejo de $b_n$. La [norma asociada a este producto interno](../../Elementos%20de%20Álgebra%20Lineal/Producto%20interno%20y%20norma/norma%20inducida%20por%20el%20producto%20interno.md) se expresa como
$$
\| \{a_n\} \| = \sqrt{\langle \{a_n\}, \{a_n\} \rangle} = \sqrt{\sum_{n=1}^{\infty} |a_n|^2}.
$$
#analisis-matematico