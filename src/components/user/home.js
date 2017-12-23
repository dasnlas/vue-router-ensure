export default {
    name: 'User/index',
    path: '/user',
    meta: {
        title: '个人中心'
    },
    component: r => require.ensure([], () => r(require('../views/user/index')), 'User')
}