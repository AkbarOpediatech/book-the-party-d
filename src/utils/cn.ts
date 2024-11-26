import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A utility function to combine class names with Tailwind CSS class merging.
 *
 * @param inputs - List of class values to merge.
 * @returns A string of merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
