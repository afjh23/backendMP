import User from '../models/User.js'
import fs from 'fs/promises'
import path from 'path'

export const find = async (req, res) => {
    try {
        const { id } = req.params
        const usuario = await User.getById(id)
        if (usuario.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }
        res.json(usuario)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createU = async (req, res) => {
    console.log("wey llewgue aqui")
    try {
        console.log(req.body)
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ message: "Faltan Datos" })
        const nuevoUsuario = await User.createUser({
            email,
            password
        })
        if(nuevoUsuario[0].affectedRows === 1) return res.json({message: "Usuario guardado"})
        
        res.status(500).json({message: "Error al guardar el usuario"})

        } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const updatePU = async (req, res) => {
   console.log(req.body)
    try {
        const { id } = req.params
        const { name, bio, phone, email, password } = req.body

        const filename = req.file ? req.file.filename : null

        const usuario = await User.getById(id)
        if (!usuario) return res.status(404).json({ message: 'El usuario no existe' })

        const updatedUserData = {
            id,
            name,
            email,
            password,
            bio,
            phone,
            photo: filename || usuario.photo 
        }

       
        const updateUser = await User.updatePartial(updatedUserData)

        if (updateUser[0].affectedRows === 1) return res.json({ message: 'Usuario actualizado' })

        res.status(500).json({ message: 'Error al actualizar el usuario' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const showImage = async (req, res) =>{
   console.log("Hi")
    try {
        const {nombre} = req.params
        const ruta = path.resolve(`./uploads/${nombre}`)
        await fs.access(ruta)
        res.sendFile(ruta)

    } catch (error) {
        if(error.errorno === -4058){
            return res.status(404).json({message: 'No se encontro la imagen'})

        }
        res.status(500).json({message: error.message})
    }
}