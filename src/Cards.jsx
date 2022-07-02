import Title from "./Title";
import Paragrafo from "./Paragrafo";
import Image from "./Image";

function Cards() {
  return (
    <>
      <div>
        <Title
          title="4 aprendizados na Reprograma"
          classtitle="skills"
        />
      </div>
      <div className="cards-container">
        <div className="cards">
          <Title title="Git" />
          <Image imgclass="image-card" image="../../img/git.gif" />
          <Paragrafo />O que é git? Git é um sistema de controle de versão de
          arquivos. Através deles podemos desenvolver projetos na qual diversas
          pessoas podem contribuir simultaneamente no mesmo, editando e criando
          novos arquivos e permitindo que os mesmos possam existir sem o risco
          de suas alterações serem sobrescritas.
        </div>

        <div className="cards">
          <Title title="HTML" />
          <Image imgclass="image-card" image="../../img/html.gif" />
          <Paragrafo />
          HTML (Linguagem de Marcação de Hipertexto) é o código que você usa
          para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo
          pode ser estruturado em parágrafos, em uma lista com marcadores ou
          usando imagens e tabelas.
        </div>

        <div className="cards">
          <Title title="CSS" />
          <Image imgclass="image-card" image="../../img/css.gif" />
          <Paragrafo />O Cascading Style Sheets (CSS) é uma "folha de estilo"
          composta por “camadas” e utilizada para definir a apresentação
          (aparência) em páginas da internet que adotam para o seu
          desenvolvimento linguagens de marcação (como XML, HTML e XHTML). O CSS
          define como serão exibidos os elementos contidos no código de uma
          página da internet e sua maior vantagem é efetuar a separação entre o
          formato e o conteúdo de um documento.
        </div>

        <div className="cards">
          <Title title="JavaScript" />
          <Image imgclass="image-card" image="../../img/js.gif" />
          <Paragrafo />
          JavaScript (abreviado como "JS") é uma linguagem de programação
          dinâmica cheia de recursos que quando aplicada em um documento HTML,
          pode fornecer interatividade dinâmica em sites. Foi inventada por
          Brendan Eich, co-fundador do projeto Mozilla, da Fundação Mozilla e da
          Corporação Mozilla.
        </div>
      </div>
    </>
  );
}

export default Cards;
