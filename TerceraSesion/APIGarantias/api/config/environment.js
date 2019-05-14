process.env.PORT = process.env.PORT || 3000;

process.env.SECRET = process.env.SECRET || "esta-es-mi-clave-secreta";

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if(process.env.NODE_ENV == "production"){
    process.env.MONGOURL = 'mongodb://root_garantias:juan123456@ds151124.mlab.com:51124/dbgarantias';
}else{
    process.env.MONGOURL = 'mongodb://localhost:27017/garantias';
}


