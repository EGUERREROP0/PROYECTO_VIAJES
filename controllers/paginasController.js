import { Testimonial } from "../models/Testimonial.js"
import { Viajes } from "../models/Viaje.js"

const paginaInicio = async (req, res) => {
    const promiseDB = []
    promiseDB.push(Viajes.findAll({ limit: 3 }))
    promiseDB.push(Testimonial.findAll({ limit: 3 }))

    try {
        const resultado = await Promise.all(promiseDB)
        /*const [viajes, testimoniales] = await Promise.all([
            Viajes.findAll({ limit: 3 }),
            Testimonial.findAll({ limit: 3 })
        ])*/
        res.render('Inicio', {
            pagina: 'Inicio',
            clase: 'home',
            /*viajes,
            testimoniales*/
            viajes: resultado[0],
            testimoniales: resultado[1],
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => {

    //Pasar variables
    // const variable = 'Pasando variables'
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    //Conectar DB y hacer consulta
    const viajes = await Viajes.findAll()
    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll()
        console.log(testimoniales)
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }

}

const paginaDetalleViaje = async (req, res) => {
    const { viaje } = req.params
    try {
        const resultado = await Viajes.findOne({ where: { slug: viaje } })
        res.render('detalleViaje', {
            pagina: 'Detalles Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}