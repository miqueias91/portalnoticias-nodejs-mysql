module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;


        req.assert('titulo','Título obrigatório.').notEmpty();
        req.assert('resumo','Resumo obrigatório.').notEmpty();
        req.assert('datanoticia','Data obrigatória.').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('autor','Autor obrigatório.').notEmpty();
        req.assert('noticia','Notícia obrigatória.').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia", {validacao: erros});
            return;
        }

        var conn = application.config.database();  
        var noticiasModel = new application.app.models.NoticiasDAO(conn);
        
        noticiasModel.setNoticia(noticia, function(error, result) {
            res.redirect('/noticias');
        });
    });
}