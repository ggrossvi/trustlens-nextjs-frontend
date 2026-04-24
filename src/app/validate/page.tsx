export default function Page() {
  return (
    <>
      <main className="p-8 max-w-[1440px] mx-auto w-full">
<div className="flex flex-col gap-8">
{/* Page Header */}
<div className="flex justify-between items-end">
<div>
<span className="font-label-caps text-label-caps text-primary mb-2 block">INTELLECTUAL INTEGRITY ENGINE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Validate Document</h2>
</div>
<div className="flex gap-4">
<button className="px-6 py-2 border border-outline-variant text-on-surface font-label-caps text-label-caps hover:bg-surface-variant transition-colors">HISTORY</button>
<button className="px-6 py-2 bg-primary-container text-on-primary-container font-label-caps text-label-caps hover:brightness-110 transition-all">NEW UPLOAD</button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-12 gap-6">
{/* Upload/Document View (Large Card) */}
<div className="col-span-12 lg:col-span-8 bg-surface-container border border-slate-800 rounded-none relative overflow-hidden flex flex-col h-[700px]">
<div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-sky-400" data-icon="description">description</span>
<span className="font-code-md text-code-md text-slate-300">Whitepaper_Trust_v3.pdf</span>
</div>
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-slate-300" data-icon="zoom_in">zoom_in</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-slate-300" data-icon="zoom_out">zoom_out</span>
<span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-slate-300" data-icon="fullscreen">fullscreen</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-12 bg-slate-900/20 no-scrollbar">
<div className="max-w-2xl mx-auto space-y-6 text-slate-400 font-body-md leading-relaxed">
<h3 className="text-slate-100 font-headline-md mb-8">Executive Summary: Quantum-Resistant Trust Layers</h3>
<p>This document outlines the architecture for high-integrity information processing in distributed networks. By utilizing <span className="bg-primary/20 text-primary border-b border-primary px-1">Merkle-Tree verification</span> across semantic layers, we can ensure that hallucination rates remain below 0.04%.</p>
<div className="bg-error-container/10 border-l-2 border-error p-4 my-6">
<p className="text-error font-code-md text-xs mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-xs" data-icon="warning">warning</span> CONTRADICTION DETECTED
                                    </p>
<p className="text-on-surface">The paper claims sub-millisecond latency for global state sync, however, the <span className="underline decoration-error">Network Protocol section</span> (pg 14) suggests a minimum physics-bound RTT of 45ms.</p>
</div>
<p>Standard validation protocols often fail at the intersection of high-speed ingestion and cross-referencing. Our proposed "Lens" model operates on a separate compute plane, allowing for real-time attribution to the <span className="bg-tertiary-container/20 text-tertiary border-b border-tertiary px-1">IEEE Source Database</span>.</p>
<p>Further analysis of the cryptographic primitives indicates a reliance on NIST-800-90B standards, which have been noted for specific entropy requirements in industrial IoT environments. The document asserts universal compatibility, yet testing shows a 12% drop in performance on ARM-based edge nodes.</p>
<div className="bg-primary-container/10 border-l-2 border-sky-400 p-4 my-6">
<p className="text-sky-400 font-code-md text-xs mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span> VERIFIED CLAIM
                                    </p>
<p className="text-on-surface">Entropy requirements align with ISO/IEC 18031:2011 benchmarks for physical non-deterministic random number generators.</p>
</div>
<p>In conclusion, the document presents a robust but physically optimistic view of sync cycles. Users should expect variances based on geographic node distribution.</p>
</div>
</div>
</div>
{/* Sidebar Stats (Vertical Cluster) */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
{/* Integrity Index */}
<div className="bg-surface-container border border-slate-800 p-6 flex flex-col items-center justify-center text-center">
<span className="font-label-caps text-label-caps text-slate-500 mb-6">INTEGRITY INDEX</span>
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full -rotate-90">
<circle className="text-slate-800" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-sky-400" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="85" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-5xl font-headline-xl text-on-surface">83</span>
<span className="text-xs font-label-caps text-sky-400">OUT OF 100</span>
</div>
</div>
<p className="mt-6 font-body-sm text-slate-400">Document displays high semantic consistency but contains 2 critical technical contradictions.</p>
</div>
{/* Verification Output */}
<div className="bg-surface-container border border-slate-800 p-6">
<div className="flex justify-between items-center mb-6">
<span className="font-label-caps text-label-caps text-slate-500 uppercase">Analysis breakdown</span>
<span className="material-symbols-outlined text-slate-500" data-icon="analytics">analytics</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-slate-950 border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
<span className="font-body-sm text-on-surface">Verified Claims</span>
</div>
<span className="font-code-md text-tertiary">14</span>
</div>
<div className="flex justify-between items-center p-3 bg-slate-950 border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-error"></div>
<span className="font-body-sm text-on-surface">Contradictions</span>
</div>
<span className="font-code-md text-error">02</span>
</div>
<div className="flex justify-between items-center p-3 bg-slate-950 border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="font-body-sm text-on-surface">Unverifiable</span>
</div>
<span className="font-code-md text-amber-400">05</span>
</div>
</div>
</div>
{/* Source Attribution */}
<div className="bg-surface-container border border-slate-800 p-6 flex-1">
<span className="font-label-caps text-label-caps text-slate-500 mb-6 block">DATABASE ATTRIBUTION</span>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-slate-900 flex items-center justify-center border border-slate-800">
<span className="material-symbols-outlined text-sky-400" data-icon="storage">storage</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">IEEE Xplore Digital Library</p>
<p className="text-xs text-slate-500">4 primary matches found in recent publications.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 bg-slate-900 flex items-center justify-center border border-slate-800">
<span className="material-symbols-outlined text-sky-400" data-icon="library_books">library_books</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">NIST Tech Reports</p>
<p className="text-xs text-slate-500">Entropy benchmarks cross-referenced with SP 800-90B.</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 border border-slate-700 text-xs font-label-caps hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                                VIEW ALL SOURCES <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
</div>
{/* Related Context Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-surface-container-high border border-slate-800">
<span className="text-xs font-code-md text-sky-400 mb-2 block">CONTEXT_MATCH_01</span>
<h4 className="font-headline-md text-sm mb-2">Previous Version Comparison</h4>
<p className="text-xs text-slate-500">Document shows 14% higher consistency score than v2.9 archive.</p>
</div>
<div className="p-6 bg-surface-container-high border border-slate-800">
<span className="text-xs font-code-md text-sky-400 mb-2 block">AI_SENTIMENT_08</span>
<h4 className="font-headline-md text-sm mb-2">Technical Authority Analysis</h4>
<p className="text-xs text-slate-500">Language patterns indicate academic origin with professional peer-review intent.</p>
</div>
<div className="p-6 bg-surface-container-high border border-slate-800">
<span className="text-xs font-code-md text-sky-400 mb-2 block">SECURITY_SCAN_04</span>
<h4 className="font-headline-md text-sm mb-2">Link &amp; Reference Health</h4>
<p className="text-xs text-slate-500">98% of internal citations lead to verified external repositories.</p>
</div>
</div>
</div>
</main>
    </>
  );
}
