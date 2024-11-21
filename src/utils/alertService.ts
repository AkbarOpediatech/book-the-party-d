import Swal from 'sweetalert2'
import type { xShowAlert } from './enum'

export const showAlert = (
  title: string,
  text?: string,
  icon?: xShowAlert,
  confirmButtonText: string = 'OK'
) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText
  })
}
