'use client'

import Image from "next/image"

interface AvatarProps {
  avatarSrc?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
  avatarSrc
}) => {
  return (
    <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="avatar"
        src={avatarSrc || '/images/genericAvatar.png'}
    />
  )
}

export default Avatar