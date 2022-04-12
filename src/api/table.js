import request from '@/utils/request'
import httpRequest from '@/utils/request-http'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
export function listItems(params) {
  return httpRequest({
    url: '/items',
    method: 'get',
    params
  })
}

