export const getAvatarFallbackText = (
  avatarFallbackText: string = '',
  userName: string = ''
): string => {
  if (avatarFallbackText) {
    return avatarFallbackText
  }

  const trimmedUserName = userName.trim()

  if (!trimmedUserName) {
    return '??'
  }

  const nameParts = trimmedUserName.split(' ')

  return nameParts.length > 1
    ? nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase()
    : trimmedUserName.slice(0, 2).toUpperCase()
}
