import express from 'express'
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from '../controllers/paginasController.js'
import { testimonialEnvio } from '../controllers/testimonialController.js'

const router = express.Router()

//Mostrar el Hola mundo en pantalla
//? res --> Lo que expres responde : req --> Lo que enviamos
router.get('/', paginaInicio)
router.get('/nosotros', paginaNosotros)
router.get('/viajes', paginaViajes)
router.get('/testimoniales', paginaTestimoniales)

//Detalle viaje
router.get('/viajes/:viaje', paginaDetalleViaje)

//Post testimonial
router.post('/testimoniales', testimonialEnvio)
//router.get('/testimoniales', showTestimonial)


export default router;