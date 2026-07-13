export function Compare() {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 border border-white/30 shadow-sm">
      <div className="text-base font-semibold text-[#1a1a2e] mb-3">🔄 Jämför modeller</div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/20 rounded-xl p-4 border border-white/10">
          <div className="text-[10px] font-semibold uppercase text-[#6a6a8a]">Modell A</div>
          <div className="font-medium text-[#1a1a2e] mt-1">Harmonisk oscillator</div>
          <div className="text-xs text-[#4a4a6a] mt-1">• m (massa)</div>
          <div className="text-xs text-[#4a4a6a]">• k (fjäderkonstant)</div>
        </div>
        <div className="bg-white/20 rounded-xl p-4 border border-white/10">
          <div className="text-[10px] font-semibold uppercase text-[#6a6a8a]">Modell B</div>
          <div className="font-medium text-[#1a1a2e] mt-1">Kvant-harmonisk oscillator</div>
          <div className="text-xs text-[#4a4a6a] mt-1">• n (kvanttal)</div>
          <div className="text-xs text-[#4a4a6a]">• ω (frekvens)</div>
        </div>
      </div>

      <div className="mt-3 p-3 bg-white/20 rounded-xl border border-white/10">
        <div className="text-[10px] font-semibold uppercase text-[#6a6a8a]">🔗 Koppling</div>
        <div className="text-sm text-[#4a4a6a] mt-1">
          <strong className="text-[#1a1a2e]">Kvant → Klassisk</strong> (n → ∞) — Korrespondensprincipen
        </div>
      </div>
    </div>
  )
}
