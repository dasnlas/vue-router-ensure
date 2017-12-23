export default {
    name: 'user/test',
    path: '/user/test',
    meta: {
        title: 'test'
    },
    component: r => require.ensure([], () => r(require('../views/user/test')), 'User')
}