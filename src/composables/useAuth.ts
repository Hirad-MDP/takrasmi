import { ref } from 'vue'

const isLoggedIn = ref(localStorage.getItem('takrasmi_logged_in') === 'true')

export function useAuth() {
  const login = () => {
    isLoggedIn.value = true
    localStorage.setItem('takrasmi_logged_in', 'true')
  }

  const logout = () => {
    isLoggedIn.value = false
    localStorage.removeItem('takrasmi_logged_in')
  }

  return { isLoggedIn, login, logout }
}