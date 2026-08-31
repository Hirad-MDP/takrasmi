import { ref } from 'vue'

const isLoggedIn = ref(localStorage.getItem('takrasmi_logged_in') === 'true')
const authToken = ref(localStorage.getItem('takrasmi_token') || '')

export function useAuth() {
  const login = (token?: string) => {
    isLoggedIn.value = true
    localStorage.setItem('takrasmi_logged_in', 'true')

    if (token) {
      authToken.value = token
      localStorage.setItem('takrasmi_token', token)
    }
  }

  const logout = () => {
    isLoggedIn.value = false
    authToken.value = ''
    localStorage.removeItem('takrasmi_logged_in')
    localStorage.removeItem('takrasmi_token')
  }

  return { isLoggedIn, authToken, login, logout }
}