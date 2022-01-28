import { api_base, api_key } from '../../../lib/tmdb'
export default async function handler(req, res) {
    const busca = await fetch(`${api_base}/movie/${req.query.id}?api_key=${api_key}&language=pt-BR`)
    const result = await busca.json()
    res.status(200).json({
        info: result
    })
}