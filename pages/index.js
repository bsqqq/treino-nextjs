import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// componente next Principal (home)
export default function Home({ results }) {
  // essa props sao buscadas do retorno da funçao abaixo do componente (getServerSideProps()), e estas props sao frutos do SSR
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em destaque da semana
        </h1>

        {/* Componente <Link> para redirecionar para a rota do atributo do href */}
        <Link href={"/busca"}>Ir para a busca</Link>

        {/* Lista nao ordenada dos filmes buscados da API, pelo getServerSideProps() {em const {filmes} = ...} */}
        <ul style={{ listStyle: "none", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingRight: '40px'}}>

          {/* após buscar os filmes e pegar em props.results, faço um map() {pois é um array} 
          passando os parametros 'filme' e 'index' (auto-explicativos) */}

          {/* {results.map((filme, index) => (
            <li key={index} style={{ margin: "20px" }}>
              <Link href={`/filme/${filme.id}`}>
                <div>
                  <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} style={{ width: '230px', cursor: 'pointer' }} />
                  <p style={{ margin: 0, maxWidth: "240px" }}>{filme.title}</p>
                </div>
              </Link>

            </li>
          ))} */}
        </ul>
      </main>

    </div>
  )
}

// export async function getStaticProps() {
  // funçao que vai fazer a busca dos filmes (e meu nome) em SSR (server-side-rendering)
  // const filmes = await fetch('http://localhost:3000/api/trending')
  // const { results } = await filmes.json()
  // depois de pegar as informaçoes, é necessário passar no formato de JSON.
  // quanto a funçao buscar as coisas e retornar os resultados, vai ser dentro de um objeto com o atributo props,
  // onde vai ficar localizado os filmes e meu nome
  // return {
    // props: {
      // results
    // }
  // }
// }
