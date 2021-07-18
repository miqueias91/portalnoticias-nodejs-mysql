module.exports = function(application){
    application.get('/noticia', function(req,res){
        var conn = application.config.database();  
        var noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.getNoticia(function(error, result) {
            res.render('noticias/noticia',{noticia: result});
        });
    });
}