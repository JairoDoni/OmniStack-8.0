const { Schema, model } = require('mongoose')

const DevSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    user:{
        type:String,
        required: true
    },
    //quando não é obrigatorio pode-se passar diretamente o tipo do caracter
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
}, {
    //timestamps gera uma coluna chamada createdAt e outra coluna updatedAt
    //createdAt: vai armazenar de forma automatica a data de criação de um registro dentro do banco de dados 
    //updatedAt armazena a data da ultima alteração de registro
    timestamps: true
})

module.exports = model('Dev', DevSchema)
