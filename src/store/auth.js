import { defineStore } from 'pinia'

export default defineStore('auth', 
  {
  persist: true,
  state: () => {
    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 0,
      user: {},
    }
  },
  actions: {
    clear: function () {
      this.accessToken = ''
      this.refreshToken = ''
      this.expiresIn = 0
      this.user = {}
    },
    setAccessToken: function (payload) {
      this.accessToken = payload
    },
    setRefreshToken: function (payload) {
      this.refreshToken = payload
    },
    setExpires: function (payload) {
      this.expiresIn = payload
    },
    setUser: function (payload) {
      this.user = payload
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
    },
    getUser: function (payload) {
      return this.user
    }
  }
})
