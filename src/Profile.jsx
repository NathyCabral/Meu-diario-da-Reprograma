import Image from "./Image";
import Title from "./Title";
import Paragrafo from "./Paragrafo";

function Profile() {
  return (
    <section className="container_perfil">
      <Image imgclass="profile-img" image="../../img/eu.png" />
      
      <div className="about">
        <Title
          title="Saudações Kriptoniana por Nathy Cabral!"
          classtitle="container-title"
        />

        <Paragrafo className="Paragrafo-perfil">
          Paulistana! Tatuadora e Kriptoniana nas horas vagas. Atualmente estudo
          programação e me deparo cada dia com a realidade que programador deve
          ser tudo doido... Sob a luz da lua cheia, adotei 3 gatos. Reza a lenda
          que são filhotes de gatos misticos, mas nunca saberemos não é mesmo?
          Espero que futuramente possa dividir um pouco da minha loucura em
          programação com outras mulheres, juntas seremos mais fortes!
        </Paragrafo><hr></hr>
      </div>
    </section>
  );
}

export default Profile;
