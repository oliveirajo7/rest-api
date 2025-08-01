import express from "express";


const apiDojoa = express();


apiDojoa.use(express.json());


var ultimoId = 1;
var usuarios = [];


apiDojoa.get("/usuarios", (req, res) => {
    res.send("Usuarios: ")


    res.status(200).json(usuarios)
})


apiDojoa.get("/rota/:id", (req, res) => {
    console.log("Você acessou a rota: ", req.params)
})


apiDojoa.post("/usuarios/cadastrar", (req, res) => {


    const { nome, email } = req.body;


    if(!nome || !email) {
        res.status(400).json( message = "Nome e email são obrigatórios");
        return;
    }


    const usuario = {
        id: ultimoId++,
        nome,
        email
    }
    usuarios.push(usuario)


    console.log("Usuario cadastrado: ")
    console.log(usuarios)


   
    console.log(usuarios)
    res.status(200).json(req.body)
})


apiDojoa.listen(3002);
