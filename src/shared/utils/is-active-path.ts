import { usePathname } from 'next/navigation'

export const isActivePath = (path: string) => usePathname() === path
