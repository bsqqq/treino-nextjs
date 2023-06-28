import { api_base, api_key } from "../../lib/tmdb";
// import '../../styles/filmeSelecionado.css'

export default function FilmeSelecionado({ json }) {

  return (
    <>
      <div style={{ padding: "20px", display:"inline-block" }}>
        <img
          src={`https://image.tmdb.org/t/p/original${json.backdrop_path}`}
          width={"900px"}
          style={{ borderRadius: "30px" }}
        />
        <h1 className="title">
          {json.title} ({json.original_title})
        </h1>
        <h3 style={{ maxWidth: "800px" }} className="subtitle">{json.overview}</h3>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const filme = await fetch(
    `${api_base}/movie/${context.params.id}?api_key=${api_key}&language=pt-BR`
  );
  const json = await filme.json();
  // console.log("json", json)
  return {
    props: {
      json,
    },
  };
}
