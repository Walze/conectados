export function handle_error(err) {
  console.error(err.message, err)
  alert('Erro! Veja o console.')
}

export function log(...args) {
  console.info(args)
  //return (...return_args) => return_args
}