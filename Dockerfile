import { useState } from 'react'
import axios from 'axios'

export function Prompt() {
  const [query, setQuery] = useState('"Hur hänger kvantmekanik och klassisk fysik ihop?"')
  const [response, setResponse] = useState<{ answer: string; models: string[] } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await axios.post('http://localhost:8000/api/prompt', { query })
      setResponse(res.data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-3xl p-5 border border-white/30 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-light text-[#1a1a2e]">
          <strong>Forge</strong>OS
        </div>
        <div className="text-xs font-medium text-[#4a4a6a] bg-white/30 px-3 py-1 rounded-full border border-white/20">
          👤 Logga in
        </div>
      </div>

      <div className="text-sm font-medium text-[#4a4a6a] mb-1">💬 Vad vill du utforska?</div>
      <textarea
        className="w-full min-h-[80px] bg-white/30 border border-white/20 rounded-xl p-4 text-[15px] text-[#1a1a2e] resize-none outline-none focus:border-white/40"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='"Hur hänger kvantmekanik och klassisk fysik ihop?"'
      />

      <div className="flex gap-2 mt-2">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="flex-1 py-3 px-4 bg-[#1a1a2e] text-white rounded-xl font-semibold text-sm disabled:opacity-50"
        >
          {loading ? '⏳ Söker...' : '🔍 Sök förklaring'}
        </button>
        <button className="flex-1 py-3 px-4 bg-transparent border border-white/20 text-[#4a4a6a] rounded-xl font-semibold text-sm">
          ✨ Exempel
        </button>
      </div>

      {response && (
        <div className="mt-4 p-4 bg-white/30 rounded-xl border border-white/10">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-[#6a6a8a]">🤖 Insikt</div>
          <div className="text-sm text-[#4a4a6a] mt-1 leading-relaxed">{response.answer}</div>
        </div>
      )}
    </div>
  )
}
