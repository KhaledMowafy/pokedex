
const BASE = 'https://pokeapi.co/api/v2'

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText)
    throw new Error(msg || `HTTP ${res.status}`)
  }
  return res.json() as Promise<T>
}

export const http = {
  get: async <T>(path: string, init?: RequestInit) => {
    const res = await fetch(`${BASE}${path}`, { ...init, method: 'GET' })
    return handle<T>(res)
  }
}
