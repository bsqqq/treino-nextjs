import { api_base, api_key } from '../../../lib/tmdb'
// importando as keys para buscar da API externa...
export default async function handler(req, res) {
    // como neste caso estou fazendo uma consulta a um filme especifico na API, vou passar o id da query da minha requisiçao, que é o id do filme.
    const busca = await fetch(`${api_base}/movie/${req.query.id}?api_key=${api_key}&language=pt-BR`)
    const result = await busca.json() // após buscar os dados, passo em formado de JSON
    res.status(200).json({
        result
    })
}