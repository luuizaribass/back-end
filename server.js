// Habilita o CORS para evitar bloqueios no navegador
app.use(cors());
// A nuvem (Render/Railway) injeta a própria porta via process.env.PORT
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
console .log(`🚀🚀API rodando na porta ${PORT}`);
});