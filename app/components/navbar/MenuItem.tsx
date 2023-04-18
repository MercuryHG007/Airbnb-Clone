'use client'

interface MenuItemProps {
    onClick: () => void;
    label: string;
    style: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    style
}) => {
  return (
    <div
        onClick={onClick}
        className={` ${style} px-4 py-3 hover:bg-neutral-100 transition `}
    >
        {label}
    </div>
  )
}

export default MenuItem