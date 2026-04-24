export default function TopAppBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex justify-between items-center h-16 px-8">
      <div className="flex items-center gap-4">
        <span className="font-inter uppercase text-xs font-semibold tracking-widest text-slate-400">Workspace / Verification</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <input className="bg-slate-950 border border-slate-700 text-xs font-inter rounded px-4 py-2 w-64 focus:border-sky-400 outline-none transition-all" placeholder="Search validation history..." type="text" />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm" data-icon="search">search</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-400 cursor-pointer active:scale-95 transition-transform hover:text-sky-300" data-icon="notifications">notifications</span>
          <span className="material-symbols-outlined text-slate-400 cursor-pointer active:scale-95 transition-transform hover:text-sky-300" data-icon="account_circle">account_circle</span>
        </div>
      </div>
    </header>
  );
}
