import { pool } from '../config/db.js'
import { hash } from 'bcrypt'

class User {
    static async all() {
        const usuarios = await pool.execute('SELECT * FROM users')
        return usuarios[0]
    }
    static async getById(id) {
        const usuario = await pool.execute('SELECT * FROM users WHERE user_id=?', [id])
        return usuario[0]
    }
    static async where(field, valor) {
        const usuario = await pool.execute(`SELECT * FROM users WHERE ${field}=?`, [valor])
        return usuario
    }
    static async createUser({ email, password, name, photo, bio, phone }) {
        const cryptPassword = await hash(password, 10)
        const fields = ['email', 'password']
        const values = [email, cryptPassword]

        const camposString = fields.join(', ')
        const placeholders = values.map(() => '?').join(', ')

        const nuevoUsuario = await pool.execute(`INSERT INTO users(${camposString}) VALUES (${placeholders})`, values)

        return nuevoUsuario
    }
    static async updatePartial({ id, email, password, photo, name, phone, bio }) {
        const fields = []
        const values = []
        if (email) {
            fields.push('email = ?');
            values.push(email);
        }

        if (password) {
            const newpassword= await hash(password, 10)
            fields.push('password = ?');
            values.push(newpassword);
        }

        if (photo) {
            fields.push('photo = ?');
            values.push(photo);
        }

        if (name) {
            fields.push('name = ?');
            values.push(name);
        }

        if (phone) {
            fields.push('phone = ?');
            values.push(phone);
        }

        if (bio) {
            fields.push('bio = ?');
            values.push(bio);
        }

        if (fields.length === 0) {
            throw new Error('No se proporcionaron campos para actualizar');
        }

        const fieldsString = fields.join(', ')
        const usuarioActualizado = await pool.execute(`UPDATE users SET ${fieldsString} WHERE user_id=?`,[...values, id])
        return usuarioActualizado
    }
    static async getByEmail(value){
       console.log(value)
        const usuario = await pool.execute('SELECT * FROM users WHERE email = ?',[value])

        return usuario[0]

    }
}
export default User