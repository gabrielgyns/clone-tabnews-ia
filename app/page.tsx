import Confetti from "./confetti";

async function getTotalContents() {
  const response = await fetch(
    "https://www.tabnews.com.br/api/v1/contents?per_page=1&strategy=new",
    { cache: "no-store" },
  ).catch(() => null);

  const total = Number(response?.headers.get("x-pagination-total-rows"));
  return total ? total.toLocaleString("pt-BR") : null;
}

export default async function Home() {
  const total = await getTotalContents();

  return (
    <main>
      <Confetti />
      <h1>Em construção</h1>
      <p>
        Estamos nesse exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto
      </p>
      {total && (
        <div className="counter">
          <strong>{total}</strong>
          <span>conteúdos publicados no TabNews</span>
        </div>
      )}
      <a
        className="button"
        href="https://www.tabnews.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acesse o TabNews oficial
      </a>
    </main>
  );
}
