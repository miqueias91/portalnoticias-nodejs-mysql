module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;
        var conn = application.config.database();  
        var noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.setNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
        });
    });
}