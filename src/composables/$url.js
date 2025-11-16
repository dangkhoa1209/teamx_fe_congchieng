import auth from './admin-url/auth'
import news from './admin-url/news.js'
import account from './admin-url/account.js'
import profile from './admin-url/profile.js'

export default {
  auth,
  admin: {
    news,
    account,
    profile
  }
}