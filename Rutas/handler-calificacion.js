const oConexion = require("../database");

module.exports.calificacionInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL CrearCalificacionSP("'+event.oEvaluacion+'");';
 oConexion.query(query,(err,rows,fields) =>{
  if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
 });
};
module.exports.calificacionGetAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'CALL GetCalificacionSP();';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows);
   }else{
    console.log(err);
   }
   
 });
};
module.exports.calificacionGetById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "CALL GetCalificacionByIdSP('"+event.oID+"')";
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.calificacionDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL DeleteCalificacionSP("'+event.oID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.calificacionUpdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL UpdateCalificacionSP("'+event.oID+'","'+event.oEvaluacion+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
