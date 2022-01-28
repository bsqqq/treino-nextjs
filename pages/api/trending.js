// dadas as chaves abaixo, posso fazer as buscas na API externa e exibir os dados no front
import { api_base, api_key } from '../../lib/tmdb'
export default async function handler(req, res) { //como nao necessariamente preciso de um dado da requisiçao neste caso, a variavel req fica sem uso.
    const resultado = await fetch(`${api_base}/trending/movie/week?api_key=${api_key}&language=pt-BR`) // faço um fetch para este endereço, passando a rota /trending/movie/week passando as variaveis api_key e language
    const { results } = await resultado.json() // após buscar os dados, capturo o que eu quero fazendo uma desestruturaçao do retorno do resultado.json()...
    // e mando para o res pelo método .json({results}) para retornar para o front
    res.status(200).json({
        results
    })
}
