export function Simulate() {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 border border-white/30 shadow-sm">
      <div className="text-base font-semibold text-[#1a1a2e] mb-3">🧪 Simulera</div>

      <div className="bg-white/20 rounded-xl px-4 py-3 text-sm text-[#4a4a6a] border border-white/10 mb-3">
        Harmonisk oscillator ▼      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-[10px] font-semibold uppercase text-[#6a6a8a]">m (massa)</label>
          <input className="w-full mt-1 bg-white/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-[#1a1a2e] outline-none" value="1.0" />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase text-[#6a6a8a]">k (fjäder)</label>
          <input className="w-full mt-1 bg-white/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-[#1a1a2e] outline-none" value="1.0" />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase text-[#6a6a8a]">x₀ (position)</label>
          <input className="w-full mt-1 bg-white/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-[#1a1a2e] outline-none" value="1.0" />
        </div>
        <div>
          <label className="text-[10px] font-semibold uppercase text-[#6a6a8a]">v₀ (hastighet)</label>
          <input className="w-full mt-1 bg-white/30 border border-white/10 rounded-xl px-3 py-2 text-sm text-[#1a1a2e] outline-none" value="0.0" />
        </div>
      </div>

      <button className="w-full py-3 bg-[#1a1a2e] text-white rounded-xl font-semibold text-sm mb-3">
        ▶ Kör simulering
      </button>

      <div className="bg-white/20 rounded-xl p-4 border border-white/10">
        <div className="text-[10px] font-semibold uppercase text-[#6a6a8a]">📊 Resultat</div>
        <div className="h-10 bg-white/10 rounded-lg my-2 flex items-center justify-center text-xs text-[#6a6a8a] border border-white/10">
          [ Graf: x(t) över tid ]
        </div>
        <div className="flex gap-4">
          <div className="text-sm font-medium text-[#1a1a2e]">0.500 <span className="font-normal text-[#6a6a8a]">total energi</span></div>
          <div className="text-sm font-medium text-[#1a1a2e]">6.283 <span className="font-normal text-[#6a6a8a]">period</span></div>
        </div>
      </div>

      <div className="mt-3 p-3 bg-white/10 rounded-xl border border-white/10">
        <div className="text-[10px] font-semibold uppercase text-[#6a6a8a]">🤖 AI</div>
        <div className="text-sm text-[#4a4a6a] mt-1">
          Systemet oscillerar med period <strong className="text-[#1a1a2e]">6.283</strong> och energi <strong className="text-[#1a1a2e]">0.500</strong>.
        </div>
      </div>
    </div>
  )
}
