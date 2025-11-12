
import Button from './Button'

export default function ErrorState({ message, onRetry }: { message?: string; onRetry: () => void }) {
  return (
    <div className="p-6 text-center">
      <p className="text-sm text-red-700 mb-3">Something went wrong{message ? `: ${message}` : ''}</p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  )
}
