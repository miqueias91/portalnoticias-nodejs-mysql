module.exports.noticias = function(application, req, res){
    var conn = application.config.database();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);
    
    noticiasModel.getNoticias(function(error, result) {
        res.render('noticias/noticias',{noticias: result});
    });
}

module.exports.noticia = function(application, req, res){
    var conn = application.config.database();  
    var noticiasModel = new application.app.models.NoticiasDAO(conn);
    var id = req.query.id;

    noticiasModel.getNoticia(id, function(error, result) {
        res.render('noticias/noticia',{noticia: result});
    });
}
