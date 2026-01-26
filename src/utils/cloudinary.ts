const CLOUD_NAME = 'dqxwy7joy'

type IdSpec = string | { desktop?: string; mobile?: string }

export function imageUrl(idSpec: IdSpec, isMobile = false): string {
  if (!idSpec) return ''

  if (typeof idSpec === 'object') {
    const chosen = isMobile ? (idSpec.mobile || idSpec.desktop) : (idSpec.desktop || idSpec.mobile)
    return imageUrl(chosen || '', false)
  }

  const id = idSpec
  if (!id) return ''
  if (id.startsWith('http')) return id

  const width = isMobile ? 800 : 1400
  const encoded = encodeURIComponent(id)
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width}/${encoded}.jpg`
}

export default imageUrl
