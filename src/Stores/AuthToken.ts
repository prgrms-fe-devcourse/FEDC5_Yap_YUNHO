class AuthToken {
  private token: string
  private KEY: string

  constructor() {
    this.token = ""
    this.KEY = "AuthUserJWT-TOKEN"
  }

  setToken(newToken: string) {
    try {
      const stringifiedData = JSON.stringify(newToken)
      localStorage.setItem(this.KEY, stringifiedData)
      this.token = newToken
    } catch (e) {
      console.error(e)
    }
  }

  getToken() {
    try {
      const res = localStorage.getItem(this.KEY)
      if (!res) {
        return this.token
      }
      this.token = JSON.parse(res)
      return this.token
    } catch (e) {
      console.error(e)
      return this.token
    }
  }
}

const authToken = new AuthToken()

export default authToken
authToken.setToken("Test")
