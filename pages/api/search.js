import { api_base, api_key } from '../../lib/tmdb'
// apos importar as keys da API externa
export default async function handler(req, res) {
    // neste caso, como estou fazendo uma pesquisa, preciso passar dados do que eu quero pesquisar, que neste caso está dentro do objeto req nos parametros da funçao
    // consigo pegar a query (a busca) pelo req.query.q
    const resultado = await fetch(`${api_base}/search/movie?api_key=${api_key}&language=pt-BR&query=${req.query.q}`)
    const { results } = await resultado.json()
    res.status(200).json({
        results
    })
}