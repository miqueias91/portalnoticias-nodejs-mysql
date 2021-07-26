module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;
        
    req.assert('titulo','Título obrigatório.').notEmpty();
    req.assert('resumo','Resumo obrigatório.').notEmpty();
    req.assert('datanoticia','Data obrigatória.').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('autor','Autor obrigatório.').notEmpty();
    req.assert('noticia','Notícia obrigatória.').notEmpty();

    var erros = req.validationErrors();
    if(erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    }

    var conn = application.config.database();  
    var noticiasModel = new application.app.models.NoticiasDAO(conn);
    
    noticiasModel.setNoticia(noticia, function(error, result) {
        res.redirect('/noticias');
    });
}