export const dmToMeters = (dm: number) => (dm / 10).toFixed(1) + ' m'
export const hgToKg = (hg: number) => (hg / 10).toFixed(1) + ' kg'
export const padId = (id: number) => `#${String(id).padStart(3, '0')}`
