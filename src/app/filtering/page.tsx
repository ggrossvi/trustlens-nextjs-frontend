export default function Page() {
  return (
    <>
      <main className="p-8 max-w-7xl w-full mx-auto space-y-8">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Knowledge Base</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl">Manage and monitor all indexed source materials. High-fidelity retrieval starts with clean data grounding.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-slate-700 text-slate-200 hover:border-slate-500 transition-colors flex items-center gap-2 font-label-caps uppercase text-[11px]">
<span className="material-symbols-outlined text-sm">sync</span> Index Refresh
                    </button>
<button className="px-4 py-2 bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors flex items-center gap-2 font-label-caps uppercase text-[11px]">
<span className="material-symbols-outlined text-sm">add</span> New Document
                    </button>
</div>
</div>
{/* Content Layout with Filter Sidebar */}
<div className="flex gap-8">
{/* Filter Sidebar */}
<aside className="w-60 shrink-0 space-y-6">
<div>
<h4 className="font-label-caps text-slate-400 uppercase tracking-widest text-[10px] mb-4">Filter by Topic</h4>
<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-2 bg-slate-900 border border-sky-400/30 text-sky-400 rounded text-sm group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                    All Documents
                                </span>
<span className="text-[10px] bg-sky-900/40 px-1.5 rounded text-sky-300">1,248</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded text-sm transition-colors group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors"></span>
                                    Finance
                                </span>
<span className="text-[10px] bg-slate-900 px-1.5 rounded text-slate-500">412</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded text-sm transition-colors group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-purple-400 transition-colors"></span>
                                    Legal
                                </span>
<span className="text-[10px] bg-slate-900 px-1.5 rounded text-slate-500">284</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded text-sm transition-colors group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-400 transition-colors"></span>
                                    Technical
                                </span>
<span className="text-[10px] bg-slate-900 px-1.5 rounded text-slate-500">319</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded text-sm transition-colors group">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-rose-400 transition-colors"></span>
                                    HR
                                </span>
<span className="text-[10px] bg-slate-900 px-1.5 rounded text-slate-500">233</span>
</button>
</div>
</div>
<div>
<h4 className="font-label-caps text-slate-400 uppercase tracking-widest text-[10px] mb-4">Indexing Status</h4>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-slate-700 bg-slate-900 rounded-sm flex items-center justify-center group-hover:border-sky-400 transition-colors">
<div className="w-2 h-2 bg-sky-400 rounded-sm"></div>
</div>
<span className="text-xs text-slate-400 group-hover:text-slate-200">Fully Indexed</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-slate-700 bg-slate-900 rounded-sm group-hover:border-sky-400 transition-colors"></div>
<span className="text-xs text-slate-400 group-hover:text-slate-200">Processing</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-slate-700 bg-slate-900 rounded-sm group-hover:border-sky-400 transition-colors"></div>
<span className="text-xs text-slate-400 group-hover:text-slate-200">Verification Req.</span>
</label>
</div>
</div>
</aside>
{/* Document List */}
<div className="flex-grow space-y-6">
<div className="flex items-center justify-between mb-4">
<h4 className="font-label-caps text-slate-100 uppercase tracking-widest border-l-2 border-sky-400 pl-3">Comprehensive Repository</h4>
<span className="text-[10px] font-code-md text-slate-500">Showing 1-15 of 1,248 items</span>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-800/50">
<th className="p-4 font-label-caps text-[10px] text-slate-400 border-b border-slate-800">Document Name</th>
<th className="p-4 font-label-caps text-[10px] text-slate-400 border-b border-slate-800">Topic</th>
<th className="p-4 font-label-caps text-[10px] text-slate-400 border-b border-slate-800">Status</th>
<th className="p-4 font-label-caps text-[10px] text-slate-400 border-b border-slate-800">Grounding Score</th>
<th className="p-4 font-label-caps text-[10px] text-slate-400 border-b border-slate-800 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="description">description</span>
<div>
<p className="font-body-sm text-slate-100">compliance_v4_q3.pdf</p>
<p className="text-[10px] text-slate-500 font-code-md uppercase">ID: DOC-7721-AX</p>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-purple-400/10 text-purple-400 text-[10px] font-bold rounded-sm border border-purple-400/20 uppercase">Legal</span>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="text-xs text-slate-300">Indexed</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden w-24">
<div className="bg-tertiary h-full w-[94%]"></div>
</div>
<span className="text-xs font-bold text-tertiary">0.94</span>
</div>
</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-sky-400 transition-colors" data-icon="open_in_new">open_in_new</button>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="article">article</span>
<div>
<p className="font-body-sm text-slate-100">internal_hr_policy_2024.docx</p>
<p className="text-[10px] text-slate-500 font-code-md uppercase">ID: DOC-1029-BR</p>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-rose-400/10 text-rose-400 text-[10px] font-bold rounded-sm border border-rose-400/20 uppercase">HR</span>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="text-xs text-slate-300">Indexed</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden w-24">
<div className="bg-sky-400 h-full w-[88%]"></div>
</div>
<span className="text-xs font-bold text-sky-400">0.88</span>
</div>
</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-sky-400 transition-colors" data-icon="open_in_new">open_in_new</button>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="table_chart">table_chart</span>
<div>
<p className="font-body-sm text-slate-100">financial_projections_y5.xlsx</p>
<p className="text-[10px] text-slate-500 font-code-md uppercase">ID: DOC-4491-ZT</p>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-amber-400/10 text-amber-400 text-[10px] font-bold rounded-sm border border-amber-400/20 uppercase">Finance</span>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs text-slate-300">Processing...</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden w-24">
<div className="bg-error h-full w-[42%]"></div>
</div>
<span className="text-xs font-bold text-error">0.42</span>
</div>
</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-sky-400 transition-colors" data-icon="open_in_new">open_in_new</button>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="schema">schema</span>
<div>
<p className="font-body-sm text-slate-100">api_documentation_v3.json</p>
<p className="text-[10px] text-slate-500 font-code-md uppercase">ID: DOC-8820-TL</p>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-emerald-400/10 text-emerald-400 text-[10px] font-bold rounded-sm border border-emerald-400/20 uppercase">Technical</span>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="text-xs text-slate-300">Indexed</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden w-24">
<div className="bg-tertiary h-full w-[98%]"></div>
</div>
<span className="text-xs font-bold text-tertiary">0.98</span>
</div>
</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-sky-400 transition-colors" data-icon="open_in_new">open_in_new</button>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-500" data-icon="article">article</span>
<div>
<p className="font-body-sm text-slate-100">onboarding_flow_v2.pdf</p>
<p className="text-[10px] text-slate-500 font-code-md uppercase">ID: DOC-1192-HR</p>
</div>
</div>
</td>
<td className="p-4">
<span className="px-2 py-0.5 bg-rose-400/10 text-rose-400 text-[10px] font-bold rounded-sm border border-rose-400/20 uppercase">HR</span>
</td>
<td className="p-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="text-xs text-slate-300">Indexed</span>
</div>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-grow bg-slate-800 h-1.5 rounded-full overflow-hidden w-24">
<div className="bg-sky-400 h-full w-[82%]"></div>
</div>
<span className="text-xs font-bold text-sky-400">0.82</span>
</div>
</td>
<td className="p-4 text-right">
<button className="material-symbols-outlined text-slate-500 hover:text-sky-400 transition-colors" data-icon="open_in_new">open_in_new</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-slate-800 flex items-center justify-between bg-slate-900/50">
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-700 text-slate-400 hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-sky-400 bg-sky-400/10 text-sky-400 font-bold text-xs">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-800 text-slate-500 hover:bg-slate-800 transition-colors text-xs">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-800 text-slate-500 hover:bg-slate-800 transition-colors text-xs">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-slate-700 text-slate-400 hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-slate-500 uppercase font-label-caps">Rows per page</span>
<select className="bg-slate-950 border border-slate-800 text-[10px] rounded px-2 py-1 text-slate-300 focus:outline-none focus:border-sky-400">
<option>15</option>
<option>30</option>
<option>50</option>
</select>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
