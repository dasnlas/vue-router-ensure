export default {
    name: 'user/message',
    path: '/user/message',
    meta: {
        title: '消息'
    },
    component: r => require.ensure([], () => r(require('../views/user/message')), 'User')
}