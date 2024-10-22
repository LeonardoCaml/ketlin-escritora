import Image from "next/image";

import borboleta from "./image/borboleta.jpg";
import historia from "./image/historia.jpg";

export default function Home() {
  return (
    <div>
      <div className="bg-orange-100 h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-center lg:text-7xl text-4xl lg:mb-20 mb-10 font-playfair">
          Olá, sou Keltin Tainara<br></br>e sou escritora.
        </h1>
        <h1 className="lg:text-xl text-xs font-poppins">
          Me deixe contar um pouco da minha história
        </h1>
      </div>

      <div className="bg-orange-200 w-full sm:flex flex-row-reverse items-center justify-between">
        <div className="h-screen w-full sm:pl-24 flex flex-col sm:items-start items-center justify-center gap-16">
          <h1 className="font-playfair lg:text-7xl text-4xl sm:text-start text-center lg:w-[560px] w-96">
            Uma história de superação
          </h1>
          <p className="font-poppins lg:text-xl text-xs sm:text-start text-center sm:w-[640px] w-96">
            Tive a sorte de viver uma infância tranquila, cercada de mato e de
            natureza com meus pais e meu irmão em Estrela, no interior do Rio
            Grande do Sul. Eu era feliz e sabia.
            <br></br>
            <br></br>
            Perdi meu chão aos 12 anos, no 5º ano da escola, quando descobri em
            uma avaliação neuropsicopedagógica que tinha uma deficiência mental
            leve. Não quis acreditar, foram anos de não aceitação, sem vontade
            de saber de nada, sem vontade de viver a vida.
            <br></br>
            <br></br>
            No Ensino Fundamental sofria com bullying pesado dos colegas todos
            os dias. Eu não sabia falar direito, fazia provas diferentes das
            deles, e aí vinham a humilhação, as piadas e os gritos. O Ensino
            Médio foi ainda pior. Tinha dias em que chorava para meus pais
            porque não queria mais ir à aula
          </p>
        </div>
        <div className="bg-red-300 sm:h-screen h-screen sm:w-3/4 w-full">
          imagem
        </div>
      </div>

      <div className="bg-orange-100 w-full sm:flex items-center justify-between">
        <div className="h-screen w-full sm:pl-24 flex flex-col sm:items-start items-center justify-center gap-16">
          <h1 className="font-playfair lg:text-7xl text-4xl sm:text-start text-center lg:w-[560px] w-96">
            A volta por cima
          </h1>
          <p className="font-poppins lg:text-xl text-xs sm:text-start text-center sm:w-[640px] w-96">
            Meu maior sonho era me formar e escrever um e-book, mas não sabia
            sobre o quê. Uma noite sonhei com o nome 'A Borboleta que Aprendeu a
            Voar Sozinha', escrevi num guardanapo ao acordar no meio da
            madrugada. No outro dia chamei meus pais, disse 'vou escrever um
            livro'
            <br></br>
            <br></br>
            Foram nove meses escrevendo à mão, e mais um mês transcrevendo para
            o computador. Fiz tudo sozinha todas as noites. Minha estreia ficou
            com 115 páginas.
            <br></br>
            <br></br>
            Fiquei feliz com as vendas de 'A Borboleta que Aprendeu a Voar
            Sozinha' no Linkedin. Foi a porta de entrada para eu começar a
            vender meus livros a distância. Sonho ter esse livro reconhecido no
            Brasil inteiro por professores, empresas, setores de RH, mentores e
            palestrantes. Que ele voe como uma borboleta.
          </p>
        </div>
        <div className="bg-red-300 sm:h-screen h-screen sm:w-3/4 w-full">
          imagem
        </div>
      </div>

      <div className="bg-orange-100 sm:h-screen w-full sm:flex flex flex-col items-center justify-evenly">
        <div>
          <h1 className="font-playfair sm:text-7xl text-3xl my-10">
            Amostras do Meu Trabalho
          </h1>
        </div>
        <div className="md:flex sm:flex my-10 sm:gap-32 gap-24">
          <a
            href="https://www.amazon.com.br/borboleta-que-aprendeu-voar-sozinha-ebook/dp/B0B7CFLGB2"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:my-5 mb-10"
          >
            <Image src={borboleta} className="lg:w-72 md:w-60 w-56 mb-4 shadow-lg" />
            <p className="sm:w-72 w-56 sm:text-xl text-base font-poppins text-center sm:mb-5 mb-10">
              A borboleta que aprendeu a voar sozinha
            </p>
          </a>
          <a
            href="https://www.amazon.com.br/hist%C3%B3ria-m%C3%A3e-que-descobriu-gravidez-ebook/dp/B0CTKZJR7D"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:my-5 my-10"
          >
            <Image src={historia} className="lg:w-72 md:w-60 w-56 mb-4 shadow-lg" />
            <p className="sm:w-72 w-56 sm:text-xl text-base font-poppins text-center sm:mb-5 mb-10">
              A historia da mãe que descobriu a sua gravidez
            </p>
          </a>
        </div>
      </div>

      <div className="bg-orange-200 h-screen w-full flex flex-col items-center justify-evenly">
        <div>
          <h1 className="sm:text-7xl text-4xl mt-14 sm:w-[680px] w-80 text-center font-playfair">
            Eu adoraria falar com você
          </h1>
        </div>
        <div>
          <p className="sm:text-3xl text-lg sm:mb-5 text-center font-poppins">
            (51) 99479-5436
          </p>
          <p className="sm:text-3xl text-lg sm:mb-5 text-center font-poppins">
            exemplo@gmail.com.br
          </p>
        </div>
      </div>
    </div>
  );
}
