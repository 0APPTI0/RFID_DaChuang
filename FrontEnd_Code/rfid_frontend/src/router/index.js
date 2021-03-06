import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main/analysis'
  }, {
    path: '/main',
    name: '',
    meta: {
      nav: '',
      activeItem: '1-1'
    },
    component: () =>
      import('../views/Main'),
    children: [{
      path: 'device',
      component: () =>
        import('../views/device/device/List.vue'),
      name: 'Device',
      meta: {
        nav: '设备列表',
        activeItem: '3-1'
      }
    }, {
      path: 'device/edit/:devId?',
      component: () =>
        import('../views/device/device/Edit.vue'),
      name: 'DeviceEdit',
      meta: {
        nav: '设备编辑',
        activeItem: '3-1'
      }
    }, {
      path: 'device/connect/:devId?',
      component: () =>
        import('../views/device/device/Connect.vue'),
      name: 'DeviceConnect',
      meta: {
        nav: '设备链接',
        activeItem: '3-1'
      }
    },
    {
      path: 'device/arg',
      name: 'DevArgList',
      component: () =>
        import('../views/device/devArg/List.vue'),
      meta: {
        nav: '设备参数',
        activeItem: '3-3'
      }
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () =>
        import('../views/analysis/Analysis.vue'),
      meta: {
        nav: '数据分析',
        activeItem: '1-1'
      }
    },
    {
      path: 'ruleEngine/data',
      name: 'DataRule',
      component: () => import('../views/ruleEngine/DataRule/rule.vue'),
      meta: {
        nav: '数据转发',
        activeItem: '4-1'
      }
    },
    {
      path: 'ruleEngine/equipment',
      name: 'EquipmentRule',
      component: () => import('../views/ruleEngine/EquipmentRule/rule.vue'),
      meta: {
        nav: '设备联动',
        activeItem: '4-2'
      }
    },
    {
      path: 'ruleEngine/data/add',
      name: 'AddDataRule',
      component: () => import('../views/ruleEngine/DataRule/add.vue'),
      meta: {
        nav: '增加数据转发规则',
        activeItem: '4-3'
      }
    },
    {
      path: 'ruleEngine/data/modify',
      name: 'ModifyDataRule',
      component: () => import('../views/ruleEngine/DataRule/modify.vue'),
      meta: {
        nav: '修改数据转发规则',
        activeItem: '4-3'
      }
    },
    {
      path: 'ruleEngine/equipment/add',
      name: 'AddEquipmentRule',
      component: () => import('../views/ruleEngine/EquipmentRule/add.vue'),
      meta: {
        nav: '增加设备联动规则',
        activeItem: '4-4'
      }
    },
    {
      path: 'ruleEngine/equipment/modify',
      name: 'ModifyEquipmentRule',
      component: () => import('../views/ruleEngine/EquipmentRule/modify.vue'),
      meta: {
        nav: '修改设备联动规则',
        activeItem: '4-4'
      }
    } 
  ]
}

]

const router = new VueRouter({
  routes
})

export default router
