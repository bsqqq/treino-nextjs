import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { api_base, api_key } from '../lib/tmdb'


// componente next para buscar os filmes da API, este componente usa CSR (Client-Side-Rendering)
export default function Busca() {
  // os states aqui servem para settar um estado(palavra) para a palavra-chave de busca (searchText, inicialmente como: '')
  // E o outro state para poder controlar os resultados que chegam depois da requisiçao que é settado em resultFromSearch
  const [searchText, setSearchText] = useState("");
  const [resultsFromSearch, setResultsFromSearch] = useState(null);

  // esta funçao serve para fazer a busca dos filmes dado um termo no input digitado, é assincrona pois precisa fazer a consulta na API
  const handleSearch = async () => {
    if (searchText != false) {
      // se searchText for diferente de qualquer valor falsy
      const busca = await fetch(
        `${api_base}/search/movie?api_key=${api_key}&language=pt-BR&query=${searchText}`
      ); //vai buscar os filmes que tem aquela palavra-chave no input
      const { results } = await busca.json(); // depois da busca, passar pra JSON
      setResultsFromSearch(results); // se saiu como esperado, usar a funcao do state com o valor de results
      document.getElementById("input").value = ""; // depois limpar o input
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Consultor de Filmes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>
        <div className={styles.inputs}>
          <input
            type="search"
            id="input"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar filme</button>
        </div>
        Termo de busca: {searchText}
        <Link href={"/"}>Ir para o menu principal</Link>
        {/* se os resultados da pesquisa voltar algum valor truly, irá dar display na lista... */}
        {resultsFromSearch && (
          <div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {resultsFromSearch.map((item, index) => (
                <li key={index} style={{ margin: "20px" }}>
                  <Link href={`/filme/${item.id}`}>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                        style={{ width: "16rem" }}
                      />
                      <p style={{ maxWidth: "190px" }}>{item.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
