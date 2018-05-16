export function handle_error(err) {
  console.error(err.message, err)
  alert('Erro! Veja o console.')

  return err
}