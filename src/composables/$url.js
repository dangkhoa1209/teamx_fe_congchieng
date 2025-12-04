import auth from './admin-url/auth';
import newsAdmin from './admin-url/news.js';
import accountAdmin from './admin-url/account.js';
import profileAdmin from './admin-url/profile.js';
import featuredNewsAdmin from './admin-url/featured-news.js';
import imagePageAdmin from './admin-url/image-page.js';

import news from './url/news.js';
import featuredNews from './url/featured-news.js';
import imagePage from './url/image-page.js';
import contact from './url/contact.js';

export default {
  auth,
  news,
  featuredNews,
  image_page: imagePage,
  contact,
  admin: {
    news: newsAdmin,
    account: accountAdmin,
    profile: profileAdmin,
    featuredNews: featuredNewsAdmin,
    image_page: imagePageAdmin,
  },
};
