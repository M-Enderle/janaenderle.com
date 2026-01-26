const CLOUD_NAME = 'dqxwy7joy'

type IdSpec = string | { desktop?: string; mobile?: string }

const DEFAULT_WIDTHS = [400, 800, 1200, 1600, 2000]

export function imageUrl(
  idSpec: IdSpec,
  isMobile = false,
  opts?: { width?: number; format?: string; qualityAuto?: boolean; dprAuto?: boolean }
): string {
  if (!idSpec) return ''

  if (typeof idSpec === 'object') {
    const chosen = isMobile ? (idSpec.mobile || idSpec.desktop) : (idSpec.desktop || idSpec.mobile)
    return imageUrl(chosen || '', false, opts)
  }

  const id = idSpec
  if (!id) return ''
  if (id.startsWith('http')) return id

  const width = opts?.width ?? (isMobile ? 800 : 3000)
  const encoded = encodeURIComponent(id)

  const transformations = [
    `w_${width}`,
    opts?.dprAuto !== false ? 'dpr_auto' : '',
    opts?.qualityAuto !== false ? 'q_auto' : '',
    opts?.format ? `f_${opts.format}` : 'f_auto',
  ].filter(Boolean).join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${encoded}`
}

export function imageSrcSet(idSpec: IdSpec, isMobile = false): string {
  if (!idSpec) return ''

  if (typeof idSpec === 'object') {
    const chosen = isMobile ? (idSpec.mobile || idSpec.desktop) : (idSpec.desktop || idSpec.mobile)
    return imageSrcSet(chosen || '', false)
  }

  const id = idSpec
  if (!id) return ''
  if (id.startsWith('http')) return ''

  return DEFAULT_WIDTHS.map((w) => `${imageUrl(id, isMobile, { width: w })} ${w}w`).join(', ')
}

export default imageUrl
