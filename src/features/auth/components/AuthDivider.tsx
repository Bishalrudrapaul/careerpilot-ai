export default function AuthDivider() {
  return (
    <div className="my-7 flex items-center gap-4">
      <div className="h-px flex-1 bg-slate-200" />

      <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
        Or continue with email
      </span>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  )
}