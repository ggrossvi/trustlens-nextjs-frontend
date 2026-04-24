'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNavBar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-sky-400 font-semibold bg-slate-900/50 border-r-2 border-sky-400 px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out"
      : "text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-900 hover:text-slate-50 transition-all duration-200 ease-in-out";
  };

  return (
    <aside className="h-screen sticky top-0 left-0 w-64 border-r border-slate-800 bg-slate-950 flex flex-col py-6 z-50">
      <div className="px-6 mb-10">
        <h1 className="text-lg font-bold tracking-tighter text-slate-50">TrustLens AI</h1>
        <p className="font-inter text-sm tracking-tight text-slate-400">v3.0 Dashboard</p>
      </div>
      <nav className="flex-1 space-y-1">
        <Link href="/dashboard" className={getLinkClass('/dashboard')}>
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-inter text-sm tracking-tight">Dashboard</span>
        </Link>
        <Link href="/filtering" className={getLinkClass('/filtering')}>
          <span className="material-symbols-outlined" data-icon="database">database</span>
          <span className="font-inter text-sm tracking-tight">Knowledge Base</span>
        </Link>
        <Link href="/" className={getLinkClass('/')}>
          <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
          <span className="font-inter text-sm tracking-tight">Query Sandbox</span>
        </Link>
        <Link href="/validate" className={getLinkClass('/validate')}>
          <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
          <span className="font-inter text-sm tracking-tight">Validate Document</span>
        </Link>
      </nav>
      <div className="mt-auto border-t border-slate-800 pt-6 space-y-1">
        <a href="#" className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-900 hover:text-slate-50 transition-all duration-200 ease-in-out">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-inter text-sm tracking-tight">Settings</span>
        </a>
        <a href="#" className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-900 hover:text-slate-50 transition-all duration-200 ease-in-out">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-inter text-sm tracking-tight">Support</span>
        </a>
      </div>
    </aside>
  );
}
