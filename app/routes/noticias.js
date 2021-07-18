module.exports = function(application){
    application.get('/noticias', function(req,res){
        var conn = application.config.database();
        var noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.getNoticias(function(error, result) {
            res.render('noticias/noticias',{noticias: result});
        });
    });
}