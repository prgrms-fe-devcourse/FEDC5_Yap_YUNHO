const { VITE_AUTH_JWT_TOKEN_STORAGE_KEY } = import.meta.env

class AuthToken {
  private token: string
  private KEY: string

  constructor() {
    this.token = ""
    this.KEY = VITE_AUTH_JWT_TOKEN_STORAGE_KEY
  }

  setToken(newToken: string) {
    try {
      const stringifiedData = JSON.stringify(newToken)
      sessionStorage.setItem(this.KEY, stringifiedData)
      this.token = newToken
    } catch (e) {
      this.token = ""
    }
  }

  getToken() {
    try {
      const res = sessionStorage.getItem(this.KEY)
      if (!res) {
        return this.token
      }
      this.token = JSON.parse(res)
      return this.token
    } catch (e) {
      return this.token
    }
  }

  removeToken() {
    sessionStorage.removeItem(this.KEY)
  }
}

const authToken = new AuthToken()

export default authToken
