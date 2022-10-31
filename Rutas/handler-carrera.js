const oConexion = require("../database");

module.exports.carreraInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL CrearCarreraSP("'+event.oNombre+'");';
 oConexion.query(query,(err,rows,fields) =>{
  if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
 });
};
module.exports.carreraGetAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'CALL GetCarreraSP();';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows);
   }else{
    console.log(err);
   }
   
 });
};
module.exports.carreraGetById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "CALL GetCarreraByIdSP('"+event.oID+"')";
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.carreraDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL DeleteCarreraSP("'+event.oID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.carreraUpdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL UpdateCarreraSP("'+event.oID+'","'+event.oNombre+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
