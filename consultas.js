const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "repertorio",
    port: 5432,
});



const insertar = async(datos) => {

    const consulta = {
        text: 'INSERT INTO repertorio(cancion, artista, tono) VALUES( $1, $2, $3)',
        values: datos,
    }
    try {
        const result = await pool.query(consulta)
        return result
    } catch (error) {
        return error
    }
}




const consultar = async() => {
    try {
        const result = await pool.query('SELECT * FROM repertorio')
        return result
    } catch (error) {
        return error
    }
}



//Funcion asíncrona para edición
const actualizar = async(datos, id) => {

    const consulta = {
        text: `UPDATE repertorio SET cancion = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *`,
        values: [datos, id]

    }
    try {
        const result = await pool.query(consulta)
        return result
    } catch (error) {
        return error
    }
}


const eliminar = async(id) => {
    try {
        const result = await pool.query(`DELETE FROM repertorio WHERE id = '${id}'`)
        return result
    } catch (error) {
        return error
    }
}


module.exports = { insertar, consultar, actualizar, eliminar }