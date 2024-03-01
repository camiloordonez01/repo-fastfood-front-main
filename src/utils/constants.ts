export const BASE = '/'
export const LOGIN = '/login'
export const DASHBOARD = '/panel'
export const SERVICE = '/servicio'
export const SALES = '/ventas'
export const SERVICES = '/ventas/servicios'
export const TEXTLINKEDIT = 'editar'
export const TEXTLINKDELETE = 'eliminar'

// SELL
export const LISTSELL = '/ventas'

// PRODUCTS
export const LISTPRODUCTS = `${LISTSELL}/productos`

// CATEGORIES
export const LISTCATEGORIES = `${LISTPRODUCTS}/categorias`
export const EDITCATEGORIES = `${LISTCATEGORIES}/:id/${TEXTLINKEDIT}`

