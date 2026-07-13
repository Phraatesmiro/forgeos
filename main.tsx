import { NavLink } from 'react-router-dom'

export function Nav() {
  const links = [
    { to: '/', label: '💬 Fråga', icon: '💬' },
    { to: '/models', label: '📚 Modeller', icon: '📚' },
    { to: '/compare', label: '🔄 Jämför', icon: '🔄' },
    { to: '/simulate', label: '🧪 Simulera', icon: '🧪' },
  ]

  return (
    <div className="flex gap-1 bg-white/40 backdrop-blur-sm p-1 rounded-2xl border border-white/20 mb-4 sticky top-0 z-10">
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex-1 text-center py-2.5 px-2 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? 'bg-white text-[#1a1a2e] shadow-sm'
                : 'text-[#4a4a6a] hover:bg-white/20'
            }`
          }
        >
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{icon}</span>
        </NavLink>
      ))}
    </div>
  )
}
