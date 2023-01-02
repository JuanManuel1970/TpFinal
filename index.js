const express = require (`express`);
const app = express();
const mysql = require (`mysql2`);
const hbs = require (`hbs`);
const path = require (`path`);
const nodemailer = require (`nodemailer`);
const { application } = require("express");
require(`dotenv`).config();


const PORT = process.env.PORT || 9000;

console.log({PORT})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,`public`)));





app.set(`view engine`,`hbs`);



app.set(`views`, path.join(__dirname,`views`));



hbs.registerPartials(path.join(__dirname,`views/parcials`)); 








/*-----PARA QUE FUNCIONE CON LA BASE DE DATOS HAY QUE DESCOMENTAR----
-------LO QUE ESTA COMENTADO AHORA Y COMENTAR LAS LINEAS ----
-------121 - 122 Y  123 */



/*const conexion = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
port:process.env.DBPORT
});

conexion.connect((err) =>{
   if(err) throw err;
  console.log(`Conectado a la Base de datos de : ${process.env.DATABASE}`);
})*/







app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Home'
    })
})




app.get('/calculadora', (req, res) => {
    res.render('calculadora', {
        titulo: 'calculadora'
    })
})



app.get('/sprint1', (req, res) => {
    res.render('sprint1', {
        titulo: 'sprint1'
    })
})



app.get('/matias', (req, res) => {
    res.render('matias', {
        titulo: 'matias'
    })
})







app.post('/', (req, res) =>{
  /*const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const mensaje = req.body.mensaje;


    
    async function envioMail(){
        //Configuramos la cuenta del envío
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAILPASSWORD
            }
        */res.json({
            probando: ` deploy sin la base de datos`
        })
        });/*

       
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: `${email}`,
            subject: "Gracias por contactarme!!!",
            html:`Muchas gracias por visitar mi página <br>
            Me pondre en contacto con vos , lo antes posible ...Saludos!!! <br>`
        })
    }

    let datos = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        mensaje : mensaje
    }

    let sql = "INSERT INTO contactos set ?";

    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log(`Se ha registrado un ingreso de datos`);
            //Email
            envioMail().catch(console.error);
            res.render('enviado')
        })

})*/


app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el Puerto: ${PORT}`);
})

