const oConexion = require("../database");

module.exports.alumnoInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL CrearAlumnoSP("'+event.oNombre+'","'+event.oApellido+'","'+event.oMatricula+'","'+event.oFecha_Nacimiento+'","'+event.oSemestre+'","'+event.oCarreraID+'");';
 oConexion.query(query,(err,rows,fields) =>{
  if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
 });
};
module.exports.alumnoGetAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const query = 'CALL GetAlumnoSP();';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows);
   }else{
    console.log(err);
   }
   
 });
};
module.exports.alumnoGetById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = "CALL GetAlumnoByIdSP('"+event.oID+"')";
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.alumnoDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL DeleteAlumnoSP("'+event.oID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
module.exports.alumnoUpdate = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const query = 'CALL UpdateAlumnoSP("'+event.oID+'","'+event.oNombre+'","'+event.oApellido+'","'+event.oMatricula+'","'+event.oFecha_Nacimiento+'","'+event.oSemestre+'","'+event.oCarreraID+'");';
 oConexion.query(query,(err,rows,fields) =>{
   if(!err){
    callback(null,rows)
   }else{
    console.log(err);
   }
   
 });
};
