import { api_base, api_key } from '../../lib/tmdb'
export default async function handler(req, res) {
    let q = req.query.q
    const resultado = await fetch(`${api_base}/search/movie?api_key=${api_key}&language=pt-BR&query=${q}`)
    const { results } = await resultado.json()
    res.status(200).json({
        results
    })
}