El paradigma de **operaciones locales y comunicación clásica** (LOCC, por sus siglas en inglés: *Local Operations and Classical Communication*) es un marco fundamental en información cuántica para describir transformaciones sobre sistemas cuánticos distribuidos entre múltiples partes (por ejemplo, Alice y Bob) cuando sólo se dispone de operaciones locales y canales clásicos. LOCC define la clase básica de “operaciones gratuitas” en la teoría de recursos de entrelazamiento, es decir, aquellas que no generan entrelazamiento.

### Definición formal
1. **Sistema multipartito**  
   Sean $\mathcal{H}_A$ y $\mathcal{H}_B$ espacios de Hilbert de dimensión finita y $\rho_{AB} \in \mathcal{D}(\mathcal{H}_A \otimes \mathcal{H}_B)$ el estado conjunto.

2. **Instrumento cuántico local**  
   Para cada parte $X \in \{A, B\}$, un instrumento cuántico es un conjunto finito de mapas completamente positivos (CP) $\{ \mathcal{E}_{x,i} \}_i$ tales que $\sum_i \mathcal{E}_{x,i}$ es trazapreservante. Cada uno puede expresarse mediante operadores de Kraus $\{ K_{x,i} \}_i$ de modo que:
   $$
     \sum_i K_{x,i}^\dagger K_{x,i} \le \mathbb{I}_X.
   $$
   La desigualdad corresponde a mapas **completamente positivos traza-no-incrementantes** (CP-TNI), y la igualdad se restaura al sumar todos los resultados posibles, produciendo un mapa **completamente positivo y trazapreservante** (CPTP).  
   La probabilidad de obtener el resultado $i$ es:
   $$
     \Pr(i) = \operatorname{Tr}(K_{x,i} \rho_X K_{x,i}^\dagger),
   $$
   dejando como estado postmedición (normalizado):
   $$
     \rho_i = \frac{K_{x,i} \rho_X K_{x,i}^\dagger}{\Pr(i)}.
   $$

3. **Comunicación clásica**  
   Tras cada medición local, las partes intercambian (vía un canal clásico) el índice $i$ obtenido y condicionan sus operaciones futuras a esos resultados. Esto permite la construcción adaptativa del protocolo.

4. **Protocolo adaptativo**  
   Un protocolo LOCC consiste en múltiples rondas de instrumentos locales, donde cada operación depende de los resultados anteriores. El mapa global es:
   $$
     \Lambda(\rho_{AB}) = \sum_{\mathbf{i}} K_{\mathbf{i}} \rho_{AB} K_{\mathbf{i}}^\dagger, \quad \text{con} \quad \sum_{\mathbf{i}} K_{\mathbf{i}}^\dagger K_{\mathbf{i}} = \mathbb{I}.
   $$
   Este mapa es CPTP y se construye a partir de operadores de Kraus de la forma $K_{\mathbf{i}} = A_{i_1} \otimes B_{i_2} \otimes \dots$, aplicados secuencialmente.

### Clasificación de protocolos LOCC
- **One–way LOCC**: comunicación en una sola dirección (por ejemplo, Alice mide y envía a Bob).
- **Two–way LOCC**: comunicación bidireccional en múltiples rondas.
- **LOCC finito ($\mathrm{LOCC}_{\mathrm{fin}}$)**: número acotado de rondas de comunicación.
- **LOCC infinito ($\mathrm{LOCC}_\infty$)**: se permite un número arbitrario de rondas.

### Relación con otras clases de operaciones
$$
  \mathrm{LOCC}_{\mathrm{fin}} \subsetneq \mathrm{LOCC}_\infty \subsetneq \overline{\mathrm{LOCC}} \subsetneq \mathrm{SEP} \subsetneq \mathrm{PPT\text{-}preserving},
$$
donde:
- **SEP (Separable operations)**: mapas CPTP con operadores de Kraus de producto $K_i = A_i \otimes B_i$.  
- **PPT–preserving**: operaciones que preservan la positividad bajo transposición parcial.  
- $\overline{\mathrm{LOCC}}$ denota la clausura topológica de $\mathrm{LOCC}_{\mathrm{fin}}$.

\paragraph{Propiedades topológicas.}
Para un número fijo de rondas $N$, el conjunto $\mathrm{LOCC}_N$ es **compacto y cerrado** (en dimensión finita), pero su unión $\mathrm{LOCC}_{\mathrm{fin}}$ **no es cerrada**.  
Incluso $\mathrm{LOCC}_\infty$, obtenida como la unión de todas las LOCC de rondas finitas, **no es cerrada**.  
De hecho:
$$
  \mathrm{LOCC}_{\mathrm{fin}} \subsetneq \mathrm{LOCC}_\infty \subsetneq \overline{\mathrm{LOCC}} \subsetneq \mathrm{SEP}.
$$
Este hecho fue demostrado por Chitambar et al. y Cohen en los contextos de medidas separables no implementables por ningún protocolo LOCC (ni siquiera en el límite de muchas rondas).

### Teoría de recursos de entrelazamiento
- **Recursos gratuitos**: estados separables y operaciones LOCC.
- **Transformaciones permitidas**:
  $$
    \rho \xrightarrow{\mathrm{LOCC}} \sigma
    \quad \Longleftrightarrow \quad
    \exists\,\Lambda_{\mathrm{LOCC}}: \Lambda(\rho) = \sigma.
  $$
- **Monótonos de entrelazamiento**: funciones $E(\rho)$ que **no aumentan bajo LOCC**. Ejemplos:
  - Entropía de entrelazamiento (para estados puros),
  - Concurrencia,
  - Negatividad,
  - Entrelazamiento de formación,
  - Distilabilidad.

### Transformaciones de estados puros: Teorema de Nielsen
Sean dos estados puros con descomposición de Schmidt:
$$
  \ket{\psi} = \sum_i \sqrt{\lambda_i} \ket{ii}, \quad
  \ket{\phi} = \sum_i \sqrt{\mu_i} \ket{ii}.
$$
Entonces $\ket{\psi} \to \ket{\phi}$ por LOCC **si y sólo si**:
$$
  \boldsymbol{\lambda} \prec \boldsymbol{\mu}
$$
(es decir, el vector $\boldsymbol{\lambda}$ es *mayorizado* por $\boldsymbol{\mu}$).  
Esto fue demostrado en \cite{NielsenMaj}.

### Protocolos probabilísticos y asintóticos
- **Probabilísticos (SLOCC)**: permiten éxito con probabilidad $p < 1$, pero pueden generar estados inaccesibles determinísticamente.
- **Asintóticos**: para $n \to \infty$,
  $$
    \rho^{\otimes n} \xrightarrow{\mathrm{LOCC}} \sigma^{\otimes m}, \quad \text{con fidelidad} \to 1.
  $$
  Se definen las tasas:
  $$
    E_D(\rho) = \lim_{n \to \infty} \frac{m(n)}{n}, \quad
    E_C(\rho) = \lim_{n \to \infty} \frac{k(n)}{n},
  $$
  donde $E_D$ es la **distilabilidad** y $E_C$ el **costo de formación**. Para estados puros bipartitos, se cumple $E_D = E_C = S(\rho_A)$.

### Ejemplos de protocolos LOCC
1. **Teletransportación cuántica**: usa un par de Bell y 2 bits clásicos para transferir un estado arbitrario.
2. **Destilación de entrelazamiento**: extrae pares de Bell de muchos estados parcialmente entrelazados.
3. **Discriminación local de estados**: clasificación mediante LOCC; no siempre posible (ej. estados ortogonales de producto que no pueden distinguirse por LOCC).
4. **Preparación remota de estados** (*Remote State Preparation*): similar a teletransportación, pero con estados conocidos.

### Propiedades y limitaciones
- No todo mapa separable es implementable por LOCC: la inclusión $\mathrm{LOCC} \subsetneq \mathrm{SEP}$ es estricta.
- $\mathrm{LOCC}_{\mathrm{fin}}$ no es cerrado: existen tareas (como ciertas discriminaciones) que requieren rondas infinitas o se aproximan en el límite.
- La clase $\mathrm{LOCC}_\infty$ sigue sin agotar $\overline{\mathrm{LOCC}}$.
- **No existe una caracterización general y constructiva** para todos los protocolos LOCC. Se conocen condiciones necesarias para casos específicos (ver \cite{ChitambarEtAl,Cohen15}).

#por-revisar 