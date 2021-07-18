function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var sql = "SELECT * FROM noticias";
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    var sql = "SELECT * FROM noticias WHERE id = '1'";
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.setNoticia = function(noticia, callback){
    this._conn.query("INSERT INTO noticias SET ? ",noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}