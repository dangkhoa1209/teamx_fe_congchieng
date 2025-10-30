import { defineStore } from 'pinia'

export default defineStore('auth', 
  {
  persist: true,
  state: () => {
    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 0,
    }
  },
  actions: {
    clear: function () {
      this.accessToken = ''
      this.refreshToken = ''
      this.expiresIn = 0
    },
    setAccessToken: function (payload) {
      this.accessToken = payload
    },
    setRefreshToken: function (payload) {
      this.refreshToken = payload
    },
    setExpires: function (payload) {
      this.expiresIn = payload
    }
  },
  getters: {
    getAccessToken: function (payload) {
      return this.accessToken
    },
    getRefreshToken: function (payload) {
      return this.refreshToken
    },
    getExpiresIn: function (payload) {
      return this.expiresIn
    }
  }
})
