export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
  getFuncionarios: (state) => {
    try {
      // eslint-disable-next-line
      console.log(state.listaFuncionarios)
      return state.listaFuncionarios
    } catch (e) {
      alert('Error en sistema ' +
        e)
      // return
    }
  },
  getLoading: (state) => {
    try {
      return state.loading
    } catch (e) {
      alert('Error en sistema ' +
        e)
      // return
    }
  },
  getFuncionarioSeleccionado: (state) => {
    try {
      return state.funcionarioSeleccionado
    } catch (e) {
      alert('Error en sistema ' +
        e)
      // return
    }
  }
}