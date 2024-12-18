import { Testimonial } from "../models/Testimonial.js"

const testimonialEnvio = async (req, res) => {
    const errores = []
    const { nombre, correo, mensaje } = req.body

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' })
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' })
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' })
    }

    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores, nombre, correo, mensaje, testimoniales
        })
    } else {
        //Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre, correo, mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }
    console.log(errores)
    console.log(req.body)
}

export {
    testimonialEnvio
}