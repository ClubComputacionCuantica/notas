
#Pirker
$$
\begin{aligned}
CNOT_{c\rightarrow t} X_c &= (X_c \otimes X_t) CNOT_{s\rightarrow t}\\

CNOT_{c\rightarrow t} Z_c &= Z_c CNOT_{c\rightarrow t}\\

CNOT_{c\rightarrow t} X_t &= X_t CNOT_{c\rightarrow t}\\

CNOT_{c\rightarrow t} Z_t &= (Z_c \otimes Z_t) CNOT_{c\rightarrow t}\\
\end{aligned}
$$
The second equation implies that all stabilizers of the neighborhood of $c$ do not change, since $Z_c$ commutes with $CNOT$.