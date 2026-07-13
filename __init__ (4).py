transformations:
  - id: "quantum_to_classical"
    source: "Quantum Harmonic Oscillator"
    target: "Harmonic Oscillator"
    condition: "n → ∞"
    type: "approximation"
    description: "Correspondence principle"

  - id: "biology_to_economics"
    source: "Lotka-Volterra"
    target: "Black-Scholes"
    condition: "population dynamics → market dynamics"
    type: "analogy"
    description: "Both model competing entities"
