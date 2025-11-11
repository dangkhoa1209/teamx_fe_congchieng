export default {
  list: {
    method: 'get',
    url: '/admin/news'
  },
  detail: {
    method: 'get',
    url: '/admin/news/:id'
  },
  create: {
    method: 'post',
    url: '/admin/news'
  },
  update: {
    method: 'put',
    url: '/admin/news/:id'
  },
  delete: {
    method: 'delete',
    url: '/admin/news/:id'
  },
  changeStatus: {
    method: 'patch',
    url: '/admin/news/:id/status'
  }
}

