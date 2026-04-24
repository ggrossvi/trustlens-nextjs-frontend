export default function Page() {
  return (
    <>
      <main className="p-8 max-w-7xl w-full mx-auto space-y-8">
<div className="space-y-8">
{/* Bento Hero Section */}
<div className="grid grid-cols-12 gap-6">
{/* Trust Score Gauge */}
<div className="col-span-12 lg:col-span-4 bg-surface-container border border-slate-800 rounded-xl p-6 flex flex-col justify-between relative overflow-hidden noir-shadow">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" data-icon="verified_user">verified_user</span>
</div>
<div>
<h3 className="font-label-caps text-slate-400 text-xs uppercase mb-4">Average Trust Score</h3>
<div className="flex items-center gap-8">
<div className="relative w-28 h-28 rounded-full trust-gauge flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-surface-container flex items-center justify-center">
<span className="font-headline-md text-sky-400">94.2%</span>
</div>
</div>
<div className="space-y-1">
<p className="text-tertiary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                                    +1.2% this month
                                </p>
<p className="text-xs text-slate-500 font-body-sm">Reliability index based on cross-referenced nodes.</p>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-end">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-2 border-surface-container" data-alt="portrait of a male system engineer in professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyPrb9_TKNg3oYPFWW8PKC8881TYk89W3j_omh7xJ5D5blBKRyCzhf-SYCtevkNsiDlbGP8vL7JCsH9DGF5eDait2dABDsPCefqFWcyXYqiDAZ6eo0rsGTpBq0yn2sBxQK005GNdL1cjlUf5WOGNEpWBkkDwVfRyY2bslg4ef0nmPjX1nUYlerV4WWA3C8zn6xnBDPAAzq3qJtk0fmhuKsERz4pMCZlAG2JNxVAZDb6tIyEkBVBB9LSHxewvIOjNVngW9jbUSIRvw"/>
<img className="w-8 h-8 rounded-full border-2 border-surface-container" data-alt="portrait of a female data scientist looking professional and sharp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrlbI47jQVBpPfFsil4yzQXhbHNzq78hR6ukP3xHUtjNXbxs6LVZb9pk04xnlRF7CGmA5a27lsKjtuTR9VCTPZ1gwPsljqhmtiRePJScCUU5HKb1S4EwxD_LLIvSqSA9kqI7eso8RUSDAaB0emF0c_oeMjr-N68EzvPTFrt-tt_yo4dPgZ7bc0Y1FoFN0fUtpQaNeyw63DOsaFJy67bx_rtDcmA24kHWWcEmg081yz5vT59pWuG8ubEdqNl3ryXyrfKTKIZkhr_Pk"/>
<div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-surface-container flex items-center justify-center text-[10px] text-slate-400">+4</div>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-label-caps">Active Auditors</span>
</div>
</div>
{/* Stats Grid */}
<div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container border border-slate-800 rounded-xl p-6 flex flex-col justify-between noir-shadow">
<div className="flex items-start justify-between">
<span className="material-symbols-outlined text-sky-400" data-icon="description">description</span>
<span className="text-[10px] font-label-caps bg-sky-400/10 text-sky-400 px-2 py-0.5 rounded">LIFETIME</span>
</div>
<div>
<p className="text-slate-400 text-xs font-label-caps uppercase mt-4 mb-1">Documents Verified</p>
<h2 className="font-headline-md text-slate-50">12,842</h2>
</div>
</div>
<div className="bg-surface-container border border-slate-800 rounded-xl p-6 flex flex-col justify-between noir-shadow">
<div className="flex items-start justify-between">
<span className="material-symbols-outlined text-tertiary" data-icon="query_stats">query_stats</span>
<span className="text-[10px] font-label-caps bg-tertiary/10 text-tertiary px-2 py-0.5 rounded">+10.2%</span>
</div>
<div>
<p className="text-slate-400 text-xs font-label-caps uppercase mt-4 mb-1">Weekly Growth</p>
<h2 className="font-headline-md text-slate-50">+1,240</h2>
</div>
</div>
<div className="bg-surface-container border border-slate-800 rounded-xl p-6 flex flex-col justify-between noir-shadow">
<div className="flex items-start justify-between">
<span className="material-symbols-outlined text-secondary" data-icon="database">database</span>
<span className="text-[10px] font-label-caps bg-secondary/10 text-secondary px-2 py-0.5 rounded">SCALED</span>
</div>
<div>
<p className="text-slate-400 text-xs font-label-caps uppercase mt-4 mb-1">Total Vector Data</p>
<h2 className="font-headline-md text-slate-50">2.4 TB</h2>
</div>
</div>
{/* Chart Placeholder Section */}
<div className="col-span-1 md:col-span-3 bg-surface-container border border-slate-800 rounded-xl p-6 noir-shadow">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-caps text-slate-200 text-sm uppercase">Trust Trends (Last 30 Days)</h3>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 rounded border border-slate-700 bg-slate-900/50">
<div className="w-2 h-2 rounded-full bg-sky-400"></div>
<span className="text-[10px] text-slate-400">Reliability</span>
</div>
</div>
</div>
<div className="h-32 flex items-end gap-2 px-2">
<div className="flex-1 bg-slate-800/50 rounded-t h-[60%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[65%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[58%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-sky-400/50 rounded-t h-[82%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[75%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[78%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[85%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-sky-400/50 rounded-t h-[94%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[88%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[91%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-slate-800/50 rounded-t h-[90%] hover:bg-sky-500/30 transition-colors"></div>
<div className="flex-1 bg-sky-400/50 rounded-t h-[96%] hover:bg-sky-500/30 transition-colors"></div>
</div>
</div>
</div>
</div>
{/* Lower Grid */}
<div className="grid grid-cols-12 gap-6">
{/* Flagged Inconsistencies & Grounding Sources */}
<div className="col-span-12 xl:col-span-5 space-y-6">
{/* Active Grounding Sources Panel */}
<div className="bg-surface-container border border-slate-800 rounded-xl p-6 noir-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-label-caps text-sky-400 text-xs uppercase flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="hub">hub</span>
                                Active Grounding Sources
                            </h3>
<span className="text-[10px] text-slate-500 font-code-md">RAG ENGINE ACTIVE</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-sky-900/50 transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-sky-400 text-lg" data-icon="article">article</span>
<div>
<p className="text-xs font-semibold text-slate-200">Legal_Framework_2024.v2</p>
<p className="text-[10px] text-slate-500">Vector density: 0.88</p>
</div>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
</div>
<div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-sky-900/50 transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-sky-400 text-lg" data-icon="account_balance">account_balance</span>
<div>
<p className="text-xs font-semibold text-slate-200">Compliance_Audit_Protocol</p>
<p className="text-[10px] text-slate-500">Vector density: 0.94</p>
</div>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
</div>
<div className="flex items-center justify-between p-2.5 rounded bg-slate-950 border border-slate-800 hover:border-sky-900/50 transition-colors group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-sky-400 text-lg" data-icon="security">security</span>
<div>
<p className="text-xs font-semibold text-slate-200">System_Entropy_Logs_Q4</p>
<p className="text-[10px] text-slate-500">Vector density: 0.72</p>
</div>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
</div>
</div>
</div>
<div className="bg-surface-container border border-slate-800 rounded-xl p-6 noir-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-label-caps text-error text-xs uppercase flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="warning">warning</span>
                                Flagged Inconsistencies
                            </h3>
<button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Resolve All</button>
</div>
<div className="space-y-4">
<div className="p-3 bg-error-container/10 border-l-2 border-error rounded-r">
<div className="flex justify-between items-start mb-1">
<p className="text-sm font-semibold text-error">Source Conflict ID #8842</p>
<span className="text-[10px] text-slate-500">2h ago</span>
</div>
<p className="text-xs text-slate-400 font-body-sm leading-relaxed">Mismatch detected between 'Legal_Contract_v4.pdf' and 'Financial_Summary_Q3.xlsx' regarding liability clauses.</p>
</div>
<div className="p-3 bg-surface-container-high/50 border-l-2 border-slate-600 rounded-r">
<div className="flex justify-between items-start mb-1">
<p className="text-sm font-semibold text-slate-200">Semantic Drift Alert</p>
<span className="text-[10px] text-slate-500">5h ago</span>
</div>
<p className="text-xs text-slate-400 font-body-sm leading-relaxed">High divergence in embedding vector space for node 'Project_Zeta_Protocol'.</p>
</div>
</div>
</div>
{/* CTA Section */}
<div className="bg-sky-950/20 border border-sky-900/50 rounded-xl p-8 relative overflow-hidden group noir-shadow">
<div className="absolute -right-8 -bottom-8 opacity-20 transition-transform group-hover:scale-110 duration-500">
<span className="material-symbols-outlined text-[160px] text-sky-400" data-icon="auto_awesome">auto_awesome</span>
</div>
<h3 className="font-headline-md text-slate-100 mb-2 relative z-10">Automated Audit</h3>
<p className="text-sm text-sky-200/70 mb-6 max-w-xs relative z-10">Run a deep-learning analysis across all vector nodes to identify latent structural risks.</p>
<button className="bg-sky-400 text-slate-950 font-semibold px-6 py-2 rounded-lg hover:bg-sky-300 transition-colors relative z-10 active:scale-95">
                            Initialize Audit Cycle
                        </button>
</div>
</div>
{/* Recent Activity & Verification Log Table */}
<div className="col-span-12 xl:col-span-7 bg-surface-container border border-slate-800 rounded-xl flex flex-col noir-shadow">
<div className="p-6 border-b border-slate-800 flex items-center justify-between">
<h3 className="font-label-caps text-slate-200 text-sm uppercase">Verification Log</h3>
<div className="flex gap-2">
<button className="p-1 text-slate-500 hover:text-slate-300"><span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span></button>
<button className="p-1 text-slate-500 hover:text-slate-300"><span className="material-symbols-outlined text-sm" data-icon="download">download</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-900/50 text-[10px] uppercase tracking-widest text-slate-500 font-label-caps">
<tr>
<th className="px-6 py-4">Document Name</th>
<th className="px-6 py-4">Source Origin</th>
<th className="px-6 py-4">Timestamp</th>
<th className="px-6 py-4">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sky-500 text-lg" data-icon="picture_as_pdf">picture_as_pdf</span>
<span className="text-sm text-slate-200">Legal_Contract_v4.pdf</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-400">AWS S3 / Enterprise-01</td>
<td className="px-6 py-4 text-xs font-code-md text-slate-500">14:02:44</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-tertiary"></span> VERIFIED
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-lg" data-icon="table_view">table_view</span>
<span className="text-sm text-slate-200">Financial_Summary_Q3.xlsx</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-400">Local / Uploads</td>
<td className="px-6 py-4 text-xs font-code-md text-slate-500">12:15:02</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-error/10 text-error text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-error"></span> CONFLICT
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sky-500 text-lg" data-icon="description">description</span>
<span className="text-sm text-slate-200">Ops_Workflow_v2.docx</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-400">Google Drive / Shared</td>
<td className="px-6 py-4 text-xs font-code-md text-slate-500">11:42:19</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-tertiary"></span> VERIFIED
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-500 text-lg" data-icon="database">database</span>
<span className="text-sm text-slate-200">User_Telemetry_Raw.json</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-400">MongoDB / Prod-Cluster</td>
<td className="px-6 py-4 text-xs font-code-md text-slate-500">09:12:33</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-700/50 text-slate-400 text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-slate-500"></span> PENDING
                                        </span>
</td>
</tr>
<tr className="hover:bg-slate-800/20 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-sky-500 text-lg" data-icon="picture_as_pdf">picture_as_pdf</span>
<span className="text-sm text-slate-200">Privacy_Policy_2024.pdf</span>
</div>
</td>
<td className="px-6 py-4 text-xs text-slate-400">AWS S3 / Public</td>
<td className="px-6 py-4 text-xs font-code-md text-slate-500">Yesterday</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">
<span className="w-1 h-1 rounded-full bg-tertiary"></span> VERIFIED
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-auto p-4 border-t border-slate-800 flex justify-center">
<button className="text-xs text-slate-500 hover:text-sky-400 transition-colors font-label-caps tracking-widest uppercase">View Full System Log</button>
</div>
</div>
</div>
{/* Activity Feed Asymmetric Layout */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-1 bg-surface-container border border-slate-800 rounded-xl p-6 noir-shadow">
<h3 className="font-label-caps text-slate-200 text-xs uppercase mb-4">Quick Stats</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Uptime</span>
<span className="text-xs font-code-md text-tertiary">99.98%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Latency</span>
<span className="text-xs font-code-md text-slate-300">124ms</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">API Calls</span>
<span className="text-xs font-code-md text-slate-300">2.1M</span>
</div>
</div>
</div>
<div className="md:col-span-3 bg-surface-container border border-slate-800 rounded-xl p-6 overflow-hidden noir-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-label-caps text-slate-200 text-xs uppercase">RAG Engine Health Metrics</h3>
<span className="text-[10px] text-slate-500">REAL-TIME DATA STREAM</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-slate-950 p-4 rounded border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase mb-1">Retrieval Recall</p>
<p className="text-lg font-headline-md text-sky-400">98.2%</p>
</div>
<div className="bg-slate-950 p-4 rounded border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase mb-1">Context Precision</p>
<p className="text-lg font-headline-md text-slate-200">92.7%</p>
</div>
<div className="bg-slate-950 p-4 rounded border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase mb-1">Faithfulness</p>
<p className="text-lg font-headline-md text-slate-200">95.1%</p>
</div>
<div className="bg-slate-950 p-4 rounded border border-slate-800">
<p className="text-[10px] text-slate-500 uppercase mb-1">Answer Relevance</p>
<p className="text-lg font-headline-md text-tertiary">97.4%</p>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
