module.exports.index = function(application, req, res){
	var conn = application.config.database();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);
    
	noticiasModel.getCincoUltimasNoticias(function(error, result) {
        res.render('home/index',{noticias: result});
    });
}