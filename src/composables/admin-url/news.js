export default {
  list: {
    method: 'post',
    url: '/admin/news/list',
  },
  detail: {
    method: 'get',
    url: '/admin/news/:id',
  },
  create: {
    method: 'post',
    url: '/admin/news',
  },
  update: {
    method: 'put',
    url: '/admin/news/:id',
  },
  delete: {
    method: 'delete',
    url: '/admin/news',
  },
  changeStatus: {
    method: 'patch',
    url: '/admin/news/:id/status',
  },
};
