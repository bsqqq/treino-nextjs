
import { api_base, api_key } from '../../lib/tmdb'
export default async function handler(req, res) {
    const resultado = await fetch(`${api_base}/trending/movie/week?api_key=${api_key}&language=pt-BR`)
    const { results } = await resultado.json()
    res.status(200).json({
        results
    })
}
