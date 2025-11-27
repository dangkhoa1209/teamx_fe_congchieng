import auth from './admin-url/auth';
import newsAdmin from './admin-url/news.js';
import accountAdmin from './admin-url/account.js';
import profileAdmin from './admin-url/profile.js';
import featuredNewsAdmin from './admin-url/featured-news.js';

import news from './url/news.js';
import featuredNews from './url/featured-news.js';

export default {
  auth,
  news,
  featuredNews,
  admin: {
    news: newsAdmin,
    account: accountAdmin,
    profile: profileAdmin,
    featuredNews: featuredNewsAdmin,
  },
};
