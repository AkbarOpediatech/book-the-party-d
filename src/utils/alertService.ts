import Swal from 'sweetalert2'

export enum xShowAlert {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info'
}

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
