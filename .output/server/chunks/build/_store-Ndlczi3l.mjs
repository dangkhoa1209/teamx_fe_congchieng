import { defineStore } from 'pinia';
import { d as useNuxtApp } from './server.mjs';

const auth = defineStore("auth", {
  persist: true,
  state: () => {
    return {
      accessToken: "",
      refreshToken: "",
      expiresIn: 0,
      user: {}
    };
  },
  actions: {
    clear: function() {
      this.accessToken = "";
      this.refreshToken = "";
      this.expiresIn = 0;
      this.user = {};
    },
    setAccessToken: function(payload) {
      this.accessToken = payload;
    },
    setRefreshToken: function(payload) {
      this.refreshToken = payload;
    },
    setExpires: function(payload) {
      this.expiresIn = payload;
    },
    setUser: function(payload) {
      this.user = payload;
    }
  },
  getters: {
    getAccessToken: function(payload) {
      return this.accessToken;
    },
    getRefreshToken: function(payload) {
      return this.refreshToken;
    },
    getExpiresIn: function(payload) {
      return this.expiresIn;
    },
    getUser: function(payload) {
      return this.user;
    }
  }
});

const $store = () => {
  const { $pinia } = useNuxtApp();
  return {
    auth: auth($pinia)
  };
};

export { $store as $ };
//# sourceMappingURL=_store-Ndlczi3l.mjs.map
