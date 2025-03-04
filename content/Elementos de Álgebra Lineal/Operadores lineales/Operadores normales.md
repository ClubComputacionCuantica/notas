Un [[Operadores lineales|operador lineal]] $A : V \rightarrow V$ en un [[espacio vectorial]] $V$ con [[producto interno]] se dice que es _normal_ si conmuta con su [[Adjunto de un operador|adjunto]], es decir, si satisface
$$
AA^\dagger=A^\dagger A.
$$
### Resultados básicos

1. **[[Teorema Espectral]]**: 
2. Un operador _normal_ es [[Operadores Hermitianos|Hermitiano]] si y solo si sus [[Eigenvalores y eigenvectores|eigenvalores]] son reales.
3. Any normal operator �T on a complex Hilbert space can be represented as an integral with respect to a projection-valued measure. This means that �T can be diagonalized in an orthonormal basis consisting of eigenvectors of �T, if �T is compact. The theorem provides a way to understand normal operators through their spectra, which are the set of eigenvalues.
    
2. **Unitary Equivalence**: Two normal operators �T and �S on a Hilbert space �H are unitarily equivalent if there exists a unitary operator �U on �H such that ���∗=�UTU∗=S. This result implies that the structure of a normal operator is determined up to unitary equivalence by its spectrum.
    
3. **Properties Derived from Being Normal**:
    
    - Normal operators preserve orthogonality; if �T is normal and �,�∈�x,y∈H are orthogonal, then ��Tx and ��Ty are also orthogonal.
    - The norm of a normal operator is equal to its spectral radius, i.e., ∥�∥=sup⁡{∣�∣:�∈�(�)}∥T∥=sup{∣λ∣:λ∈σ(T)}, where �(�)σ(T) denotes the spectrum of �T.
    
1. **Decomposition and Functional Calculus**: For a normal operator �T, there exists a functional calculus that allows one to apply continuous functions to the operator. This means if �f is a continuous function on the spectrum of �T, then �(�)f(T) is well-defined and normal. This calculus is an extension of the polynomial calculus and is essential for defining functions of operators.
    
5. **Compact Normal Operators**: If a normal operator �T is compact, then its spectrum consists of 00 and possibly a countable set of nonzero eigenvalues that accumulate only at 00. Each nonzero eigenvalue has a finite multiplicity.
    
6. **Self-Adjoint, Unitary, and Positive Operators**: Special cases of normal operators include self-adjoint operators (�=�∗T=T∗), unitary operators (��∗=�∗�=�TT∗=T∗T=I, where �I is the identity operator), and positive operators (�=�∗T=T∗ and ⟨��,�⟩≥0⟨Tx,x⟩≥0 for all �∈�x∈H). These subclasses have additional specific properties and are of particular interest in quantum mechanics and other areas of physics.

#por-revisar 