interface AuthMessageProps {
  message: string
  variant?: 'error' | 'success'
}

export default function AuthMessage({
  message,
  variant = 'error',
}: AuthMessageProps) {
  const styles =
    variant === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : 'border-red-200 bg-red-50 text-red-700'

  return (
    <div
      role="alert"
      className={`rounded-xl border px-4 py-3 text-sm font-medium ${styles}`}
    >
      {message}
    </div>
  )
}