const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Garantir que o email seja único
    password: { type: String, required: true },
    role: { type: String, enum: ['client', 'lawyer'], required: true }, // Adicionar o campo de papel
});
