models:
  - name: "Harmonic Oscillator"
    domain: physics
    description: "A simple oscillating system following Newton's second law"
    input: ["m", "k", "x0", "v0"]
    output: ["x(t)", "v(t)", "E"]
    validation_status: "verified_standard"

  - name: "Quantum Harmonic Oscillator"
    domain: physics
    description: "Quantum harmonic oscillator with discrete energy levels"
    input: ["n", "omega"]
    output: ["energy", "wavefunction"]
    validation_status: "verified_standard"

  - name: "Lotka-Volterra"
    domain: biology
    description: "Predator-prey population dynamics model"
    input: ["a", "b", "c", "d", "x0", "y0"]
    output: ["x(t)", "y(t)"]
    validation_status: "verified_standard"

  - name: "SIR Model"
    domain: biology
    description: "Susceptible-Infected-Recovered epidemic model"
    input: ["beta", "gamma", "S0", "I0", "R0"]
    output: ["S(t)", "I(t)", "R(t)"]
    validation_status: "verified_standard"

  - name: "Black-Scholes"
    domain: economics
    description: "Option pricing model for financial derivatives"
    input: ["S", "K", "T", "r", "sigma"]
    output: ["call_price", "put_price"]
    validation_status: "verified_standard"

  - name: "Neural Network"
    domain: ai
    description: "Feedforward neural network for supervised learning"
    input: ["layers", "learning_rate", "epochs", "batch_size"]
    output: ["loss", "accuracy", "predictions"]
    validation_status: "community_contributed"
