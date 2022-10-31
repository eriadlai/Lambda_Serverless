const oConexion = require("../database");

module.exports.materiaInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL CrearMateriaSP("'+event.oNombre+'","'+event.oIsTroncoComun+'");';
 oConexion.query(query,(err,rows,fields) =>{
  if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
 });
};
module.exports.materiaGetAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'CALL GetMateriaSP();';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows);
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaGetById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "CALL GetMateriaByIdSP('"+event.oID+"')";
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL DeleteMateriaSP("'+event.oID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaUpdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL UpdateMateriaSP("'+event.oID+'","'+event.oNombre+'","'+event.oIsTroncoComun+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
