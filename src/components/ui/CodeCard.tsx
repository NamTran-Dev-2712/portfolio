export function CodeCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Editor window */}
      <div className="bg-slate-950 rounded-2xl border border-slate-700/60 overflow-hidden shadow-2xl shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/80">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-slate-500 font-mono">NamTran.cs</span>
          <div className="ml-auto text-xs text-slate-600 font-mono">C#</div>
        </div>

        {/* Code content */}
        <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto select-none">
          <code>
            <span className="text-violet-400">public class</span>
            <span className="text-cyan-300"> NamTran</span>
            <span className="text-slate-400"> : </span>
            <span className="text-green-400">BackendDeveloper</span>
            {'\n'}
            <span className="text-slate-500">{'{'}</span>
            {'\n'}
            {'    '}
            <span className="text-violet-400">public string</span>
            <span className="text-slate-200"> Role </span>
            <span className="text-slate-500">{'=> '}</span>
            <span className="text-amber-300">&quot;Backend .NET Developer&quot;</span>
            <span className="text-slate-500">;</span>
            {'\n\n'}
            {'    '}
            <span className="text-violet-400">public string</span>
            <span className="text-slate-200"> Focus </span>
            <span className="text-slate-500">{'=> '}</span>
            <span className="text-amber-300">&quot;Clean, scalable systems&quot;</span>
            <span className="text-slate-500">;</span>
            {'\n\n'}
            {'    '}
            <span className="text-violet-400">public string</span>
            <span className="text-slate-200">[] Interests </span>
            <span className="text-slate-500">{'=> ['}</span>
            {'\n'}
            {'        '}
            <span className="text-amber-300">&quot;Clean Architecture&quot;</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            {'        '}
            <span className="text-amber-300">&quot;System Design&quot;</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            {'        '}
            <span className="text-amber-300">&quot;DevOps & CI/CD&quot;</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            {'        '}
            <span className="text-amber-300">&quot;AI Integration&quot;</span>
            <span className="text-slate-500">,</span>
            {'\n'}
            {'    '}
            <span className="text-slate-500">{']'}</span>
            <span className="text-slate-500">;</span>
            {'\n'}
            <span className="text-slate-500">{'}'}</span>
          </code>
        </pre>
      </div>

      {/* Floating tech badges */}
      <div className="absolute -top-3 -right-4 px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg text-xs font-bold text-white shadow-lg shadow-indigo-500/30 animate-float z-10">
        .NET 10
      </div>
      <div className="absolute -bottom-3 -left-4 px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg text-xs font-bold text-white shadow-lg shadow-cyan-500/30 animate-float-delayed z-10">
        PostgreSQL
      </div>
      <div className="absolute top-1/2 -right-5 -translate-y-1/2 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg text-xs font-bold text-white shadow-lg shadow-violet-500/30 animate-float-slow z-10">
        Docker
      </div>
    </div>
  )
}
