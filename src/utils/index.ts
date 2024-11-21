import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export * from '@/utils/data'
export * from '@/utils/enum'
export * from '@/utils/type'
