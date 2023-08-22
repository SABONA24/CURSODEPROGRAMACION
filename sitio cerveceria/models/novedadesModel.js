var pool = require('./bd');

async function getNovedades() {
        var query = 'select * from novedades';
        var rows = await pool.query(query);
        return rows;

    } 

    async function deleteNovedadesById(Id) {
        var query = 'delete from novedades where id = ?';
        var rows = await pool.query(query, [Id]);
        return rows;
    } 


module.exports ={ getNovedades, deleteNovedadesById } 
