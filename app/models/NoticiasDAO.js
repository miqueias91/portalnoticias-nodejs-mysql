function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var sql = "SELECT * FROM noticias ORDER BY datanoticia DESC";
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    var sql = "SELECT * FROM noticias WHERE id = '1'";
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.setNoticia = function(noticia, callback){
    this._conn.query("INSERT INTO noticias SET ? ",noticia, callback);
}

NoticiasDAO.prototype.getCincoUltimasNoticias = function(callback){
    var sql = "SELECT * FROM noticias WHERE 1 ORDER BY datanoticia DESC LIMIT 5";
    this._conn.query(sql, callback);
}

module.exports = function(){
    return NoticiasDAO;
}