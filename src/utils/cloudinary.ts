const CLOUD_NAME = 'dqxwy7joy'

type IdSpec = string | { desktop?: string; mobile?: string }

export function imageUrl(
  idSpec: IdSpec,
  isMobile = false
): string {
  if (!idSpec) return ''

  if (typeof idSpec === 'object') {
    const chosen = isMobile ? (idSpec.mobile || idSpec.desktop) : (idSpec.desktop || idSpec.mobile)
    return imageUrl(chosen || '', isMobile)
  }

  const id = idSpec
  if (!id) return ''
  if (id.startsWith('http')) return id

  const encoded = encodeURIComponent(id)

  const transformations = [
    isMobile ? 'w_600' : '',
    'f_auto',
    'q_auto:eco'
  ].filter(Boolean).join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${encoded}`
}

export default imageUrl
