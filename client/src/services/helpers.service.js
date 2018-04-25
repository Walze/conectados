export function handle_error(...args) {
  console.error(...args)
  alert('Erro! Veja o console.')
}

export function log(...args) {
  console.info(args)
  //return (...return_args) => return_args
}