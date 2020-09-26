import Vue from 'vue'
import VueRouter from 'vue-router'
import SeleccionSede from '../views/SeleccionSede.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'SeleccionSede',
    component: SeleccionSede
  },
  {
    path: '/motivo/:sede/:calificacion',
    name: 'Motivo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "motivo" */ '../views/Motivo.vue')
  },
  {
    path: '/confirmacion/:sede/:calificacion/:motivo', 
    name: 'Confirmacion',
    component: () => import(/* webpackChunkName: "confirmacion" */ '../views/Confirmacion.vue')
  },
  {
    path: '/razon/:sede/:calificacion/:motivo',
    name: 'Razon',
    component: () => import(/* webpackChunkName: "razon" */ '../views/Razon.vue')
  },
  {
    path: '/sede/:id',
    name: 'Emojis',
    component: () => import(/* webpackChunkName: "emojis" */ '../views/Emojis.vue')
  },
  {
    path: '/agradecimiento',
    name: 'Agradecimiento',
    component: () => import(/* webpackChunkName: "agradecimiento" */ '../views/Agradecimiento.vue')
  },
  {
    path: '/panel',
    name: 'Panel',
    component: () => import(/* webpackChunkName: "panel" */ '../views/admin/Panel.vue'),
  },
  {
    path: '/crear-sede',
    name: 'CrearSede',
    component: () => import(/* webpackChunkName: "crearsede" */ '../views/admin/CrearSede.vue')
  },
  {
    path: '/crear-motivo',
    name: 'CrearMotivo',
    component: () => import(/* webpackChunkName: "crearmotivo" */ '../views/admin/CrearMotivo.vue')
  },
  {
    path: '/encuestas-sedes',
    name: 'EncuestasSedes',
    component: () => import(/* webpackChunkName: "encuestassedes" */ '../views/admin/EncuestasSedes.vue')
  },
  {
    path: '/editar-nombre-sede',
    name: 'EditarNombreSede',
    component: () => import(/* webpackChunkName: "seleccionarsedeeditar" */ '../views/admin/SeleccionarSedeEditar.vue')
  },
  {
    path: '/editar-nombre-sede:id',
    name: 'EditarNombreSedeEnParticular',
    component: () => import(/* webpackChunkName: "editarnombresede" */ '../views/admin/EditarNombreSede.vue')
  },
  {
    path: '/eliminar-sede',
    name: 'EliminarSede',
    component: () => import(/* webpackChunkName: "eliminarsede" */ '../views/admin/EliminarSede.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
