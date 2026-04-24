export default function Page() {
  return (
    <>
      <main className="p-8 max-w-7xl w-full mx-auto space-y-8">
{/* Header Section */}
<div className="flex justify-between items-end">
<div>
<span className="font-label-caps text-label-caps text-sky-400 mb-2 block">RAG OPTIMIZATION ENVIRONMENT</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Query Sandbox</h2>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-body-sm font-semibold hover:border-slate-500 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">history</span>
                        View History
                    </button>
<button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-body-sm font-bold flex items-center gap-2 hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                        EXECUTE QUERY
                    </button>
</div>
</div>
{/* Query Input & Parameters Bento */}
<div className="grid grid-cols-12 gap-6">
{/* Primary Query Input */}
<div className="col-span-12 lg:col-span-8 bg-surface-container border border-slate-800 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sky-400">prompt_suggestion</span>
<span className="font-label-caps text-label-caps text-slate-400">QUERY INPUT</span>
</div>
<div className="flex items-center gap-4">
<select className="bg-transparent border-none text-xs font-semibold text-slate-400 focus:ring-0">
<option>GPT-4o-Turbo</option>
<option>Claude 3.5 Sonnet</option>
</select>
</div>
</div>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 font-body-md text-on-surface focus:border-sky-400 focus:ring-0 transition-colors placeholder-slate-600" placeholder="Ask a question about the indexed document corpus..." rows="4"></textarea>
<div className="mt-4 flex gap-2">
<span className="bg-sky-400/10 text-sky-400 text-[10px] font-bold px-2 py-1 rounded border border-sky-400/20">#FINANCE_REPORTS</span>
<span className="bg-sky-400/10 text-sky-400 text-[10px] font-bold px-2 py-1 rounded border border-sky-400/20">#Q4_2023</span>
</div>
</div>
{/* Parameters Card */}
<div className="col-span-12 lg:col-span-4 bg-surface-container border border-slate-800 rounded-xl p-6">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-sky-400">settings_input_component</span>
<span className="font-label-caps text-label-caps text-slate-400">RETRIEVAL PARAMS</span>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="text-xs font-semibold text-slate-300">Top-K Snippets</span>
<span className="text-xs font-code-md text-sky-400">5</span>
</div>
<input className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" type="range"/>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-xs font-semibold text-slate-300">Similarity Threshold</span>
<span className="text-xs font-code-md text-sky-400">0.82</span>
</div>
<input className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" type="range"/>
</div>
<div className="flex items-center justify-between p-3 bg-slate-900 rounded border border-slate-800">
<span className="text-xs font-semibold text-slate-300">Hybrid Search</span>
<div className="w-10 h-5 bg-sky-400 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-slate-950 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
{/* Analysis Dashboard */}
<div className="grid grid-cols-12 gap-6">
{/* Main Result & Snippets */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/* LLM Answer */}
<div className="bg-surface-container-high border border-slate-700 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/30">
<span className="font-label-caps text-label-caps text-slate-300">SYNTHESIZED RESPONSE</span>
<div className="flex gap-2">
<span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-slate-200">content_copy</span>
<span className="material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-slate-200">share</span>
</div>
</div>
<div className="p-6">
<p className="font-body-md text-slate-200 leading-relaxed">
                                Based on the Q4 2023 Financial Statement (Doc #8821), the net revenue growth was driven by a <mark className="bg-sky-400/20 text-sky-400 border-b border-sky-400 px-0.5">14.2% increase in recurring SaaS subscriptions</mark> and a significant reduction in operational overhead within the EMEA region. The primary risk factor identified remains the volatility of energy pricing in Central Europe.
                            </p>
</div>
</div>
{/* Evidence Explorer */}
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">source</span>
<span className="font-label-caps text-label-caps text-slate-400">SOURCE EVIDENCE SNIPPETS (3)</span>
</div>
{/* Snippet 1 */}
<div className="bg-surface-container border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-slate-950 border border-slate-800 text-[10px] font-code-md text-slate-400 rounded">REF-001</span>
<h4 className="text-sm font-bold text-slate-200">FY23_Annual_Report_Final.pdf</h4>
</div>
<span className="text-xs font-code-md text-tertiary">Score: 0.94</span>
</div>
<p className="text-sm text-slate-400 font-code-md leading-relaxed">
                                "...recorded a total recurring revenue of $44.2M, representing a <span className="text-on-surface font-bold">14.2% YoY increase</span> from the previous fiscal year. This growth is attributed primarily to the expansion of Enterprise seats..."
                            </p>
<div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] text-slate-500 italic">Extracted from Page 12, Paragraph 4</span>
<button className="text-[10px] font-bold text-sky-400 flex items-center gap-1">VIEW DOCUMENT <span className="material-symbols-outlined text-[12px]">open_in_new</span></button>
</div>
</div>
{/* Snippet 2 */}
<div className="bg-surface-container border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-slate-950 border border-slate-800 text-[10px] font-code-md text-slate-400 rounded">REF-002</span>
<h4 className="text-sm font-bold text-slate-200">EMEA_Regional_Performance.xlsx</h4>
</div>
<span className="text-xs font-code-md text-tertiary">Score: 0.88</span>
</div>
<p className="text-sm text-slate-400 font-code-md leading-relaxed">
                                "Operational expenses in EMEA dropped from 18% of revenue to 14.5% following the <span className="text-on-surface font-bold">automation of regional compliance workflows</span> and staff consolidation."
                            </p>
</div>
</div>
</div>
{/* Reliability Scores */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/* Faithfulness Radar/Gauge */}
<div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
<span className="font-label-caps text-label-caps text-slate-400 block mb-6">TRUST METRICS</span>
<div className="space-y-6">
{/* Metric 1 */}
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-slate-200">Faithfulness</span>
<span className="text-xl font-bold text-tertiary">98%</span>
</div>
<div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
<div className="h-full bg-tertiary w-[98%] shadow-[0_0_10px_rgba(86,229,169,0.3)]"></div>
</div>
<p className="text-[10px] text-slate-500 mt-2">Zero hallucinations detected compared to source text.</p>
</div>
{/* Metric 2 */}
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-slate-200">Answer Relevance</span>
<span className="text-xl font-bold text-sky-400">85%</span>
</div>
<div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
<div className="h-full bg-sky-400 w-[85%] shadow-[0_0_10px_rgba(56,189,248,0.3)]"></div>
</div>
<p className="text-[10px] text-slate-500 mt-2">Highly relevant to query intent but missed minor sub-point.</p>
</div>
{/* Metric 3 */}
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold text-slate-200">Context Precision</span>
<span className="text-xl font-bold text-secondary">91%</span>
</div>
<div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
<div className="h-full bg-secondary w-[91%] shadow-[0_0_10px_rgba(189,194,255,0.3)]"></div>
</div>
<p className="text-[10px] text-slate-500 mt-2">Retrieved snippets are highly specific to the question.</p>
</div>
</div>
</div>
{/* Knowledge Base Context */}
<div className="bg-surface-container border border-slate-800 rounded-xl overflow-hidden">
<div className="p-6">
<span className="font-label-caps text-label-caps text-slate-400 block mb-4">ACTIVE INDEX</span>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-sky-400">
<span className="material-symbols-outlined text-2xl">account_balance</span>
</div>
<div>
<p className="text-sm font-bold text-slate-200">Financial_Corp_V4</p>
<p className="text-[10px] text-slate-500 uppercase tracking-tight">8.4GB • 1,200 Documents</p>
</div>
</div>
<div className="relative w-full h-32 rounded-lg overflow-hidden border border-slate-800">
<div className="absolute inset-0 bg-slate-950">
<div className="w-full h-full opacity-30" style={{'backgroundImage': 'radial-gradient(#38bdf8 1px, transparent 1px)', 'backgroundSize': '16px 16px'}}></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-[10px] font-bold text-slate-500 uppercase">Vector Cloud Map</p>
<div className="flex gap-1 justify-center mt-2">
<div className="w-1 h-1 bg-sky-400 rounded-full animate-pulse"></div>
<div className="w-1 h-1 bg-sky-400 rounded-full delay-150 animate-pulse"></div>
<div className="w-1 h-1 bg-tertiary rounded-full delay-300 animate-pulse"></div>
</div>
</div>
</div>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" data-alt="abstract visualization of a 3d neural network nodes and connections with blue neon glowing lines on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzNj4ZaWr4m4XSVIAaHNjp537F_RcfWR2MJhDcigMERZBJqRb2qm9_4qUdxD61SnyviUtpZ4uFTl-rH2cbrZJNEFuQxapPupDqxCgwZjsOccaKvWC4-9o3bYk4rvKYbQF8tsw_wglEwcEOm0lPbSbiG7JS7kRDJKbmT54lIf2rZwa95RGi99eZsNSQuE4PrGCUNusNxLXg6jTngZxxYMqzQO3u1_1CT4suH0VuKb4t7Po5C6l7AvoS80ozwDwUSfvYVzmmW6F5T1g"/>
</div>
</div>
</div>
{/* Execution Details */}
<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold">Latency</p>
<p className="text-sm font-code-md text-slate-300">1.24s</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold">Tokens</p>
<p className="text-sm font-code-md text-slate-300">412</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold">Retrieval</p>
<p className="text-sm font-code-md text-slate-300">Vector+BM25</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold">Provider</p>
<p className="text-sm font-code-md text-slate-300">OpenAI (Azure)</p>
</div>
</div>
</div>
</div>
</div>
{/* Trace Log */}
<div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
<div className="px-6 py-3 border-b border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-xs text-slate-500">list_alt</span>
<span className="font-label-caps text-[10px] text-slate-400 uppercase tracking-widest">SYSTEM EXECUTION TRACE</span>
</div>
<button className="text-[10px] text-sky-400 font-bold hover:underline">EXPORT LOGS</button>
</div>
<div className="p-4 font-code-md text-[12px] space-y-2 bg-slate-950">
<div className="flex gap-4">
<span className="text-slate-600">[14:22:01]</span>
<span className="text-tertiary">INFO:</span>
<span className="text-slate-400">Embedding query: "Summarize revenue growth in Q4..."</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600">[14:22:01]</span>
<span className="text-tertiary">INFO:</span>
<span className="text-slate-400">Vector search completed in 42ms. 8 snippets retrieved.</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600">[14:22:02]</span>
<span className="text-sky-400">DEBUG:</span>
<span className="text-slate-400">Reranking results using Cross-Encoder model...</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600">[14:22:02]</span>
<span className="text-secondary">PROMPT:</span>
<span className="text-slate-500 italic">"Use the following context to answer: [REF-001, REF-002]..."</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600">[14:22:03]</span>
<span className="text-tertiary">SUCCESS:</span>
<span className="text-slate-400">Response synthesized by gpt-4o. Confidence 0.98.</span>
</div>
</div>
</div>
</main>
    </>
  );
}
