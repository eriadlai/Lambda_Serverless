const oConexion = require("../database");

module.exports.materiaCarrerasInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL CrearMateriaCarrerasSP("'+event.oSemestre+'","'+event.oCarreraID+'","'+event.oMateriaID+'");';
 oConexion.query(query,(err,rows,fields) =>{
  if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
 });
};
module.exports.materiaCarrerasGetAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'CALL GetMateriaCarrerasSP();';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows);
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaCarrerasGetById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "CALL GetMateriaCarrerasByIdSP('"+event.oID+"')";
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaCarrerasDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL DeleteMateriaCarreraSP("'+event.oID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.materiaCarrerasUpdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL UpdateMateriaCarrerasSP("'+event.oID+'","'+event.oSemestre+'","'+event.oCarreraID+'","'+event.oMateriaID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
