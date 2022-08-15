const db =require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { array } = require('../../middlewares/multerMiddleware');


const usersAPIController={
'search':(req,res)=>{
    db.Usuario.findOne({
        where:{
            email:req.query.keyword}})
    .then(usuario=>{
        if(usuario){
            return res.status(200).json({
                email:usuario.email,
                id:usuario.id,
                status:200,
                //msg:'ok'
            })
        }else{
            return res.status(404).json({status:404,msg:'Email no encontrado'});
        }
    
    })
   .catch(error=>{
    return res.status(500).json({status:500,msg:error});
   })
},
'list': (req,res)=>{
    db.Usuario.findAll({attributes:["id","first_name","last_name","email","image"]})
 /*   let promUsuariosDetalle =db.Usuario.findAll({attributes:["id"]});
   Promise
   .all([promUsuarios,promUsuariosDetalle]) */
    .then(usuarios=>{  
         if(usuarios){
                    let respuesta ={
                        meta:{ 
                        status:200,
                        total:usuarios.length,
                        table:"Usuarios"
                        },
                        users:usuarios
                    }
                    res.json(respuesta);
    
        }else{
            return res.status(404).json({status:404,msg:'No hay resultado para tu busqueda'});
        }
       
    })
    .catch(error =>{
        return res.status(500).json({status:500,msg:error});
    })
    
},
<<<<<<< HEAD
'detail':(req,res)=>{
    db.Usuario.findOne({
        where:{
            id:req.params.id}})
    .then(usuario=>{
        if(usuario){
            return res.status(200).json({
                email:usuario.email,
                first_name:usuario.first_name,
                last_name:usuario.last_name,
                id:usuario.id,
                image:`/images/users/${usuario.image}`,
                status:200,
                //msg:'ok'
            })
        }else{
            return res.status(404).json({status:404,msg:'Usuario no encontrado'});
        }
    
    })
   .catch(error=>{
    return res.status(500).json({status:500,msg:error});
   })
}
=======
>>>>>>> 844b50357fc37a64d9954bc97c59b7865fd7c04b

}



module.exports = usersAPIController;