import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
          <Image source={require('../../../assets/images/barquiliaNome.png')}
            style={{
              marginTop: 70,
              marginLeft: 10,
              width: 400,
              height: 55,
            }} />
        <Image source={require('../../../assets/images/isa.png')}
        style={{
            width: 30,
            height: 30,
            marginTop: 20,
            marginBottom: 45,
            width: 250,
            height: 250,
            borderRadius: 30,
            marginLeft: 80,
            }} />

        <ScrollView>
          <View style={styles.containerzinho}>
          <Text style={styles.descricao}>
          Oi, eu sou a Barquilia, 17 anos que estuda no SENAI Valinhos. Uma das coisas que mais amo fazer é ler. Não importa onde esteja, sempre tenho um livro comigo. Além disso, adoro ir à academia. É onde me sinto mais forte e confiante. A música também é uma grande parte da minha vida. Tenho uma playlist para cada momento e adoro descobrir novos artistas. E, é claro, sou apaixonada por esportes. Adoro jogar futebol com meus amigos e assistir a jogos de basquete. Essas atividades me fazem sentir viva e cheia de energia!</Text>
            </View>
          <Image source={require('../../../assets/images/hobbies.png')}
            style={{
              marginTop: 10,
              width: 300,
              height: 50,
              marginLeft: 50,
            }} />
          <Image source={require('../../../assets/images/biblioteca.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 20,
              width: 300,
              height: 290,
              borderRadius: 30,
              marginLeft: 60,
            }}
          />
             <View style={styles.containerzinho}>
          <Text style={styles.info}>
Em meio à densa floresta, escondida dos olhos curiosos, erguia-se a Biblioteca Mágica. Seus livros exalavam uma luz suave e convidativa, prometendo aventuras além da imaginação. Ao abri-los, viajantes perdiam-se em mundos encantados, onde sonhos se tornavam realidade e magia fluía livremente. Era um refúgio para os corações inquietos, um santuário para os amantes da fantasia. Na Biblioteca Mágica, os limites eram apenas uma ilusão, e as histórias eram o verdadeiro tesouro a ser descoberto. </Text>
          </View>
          <Image source={require('../../../assets/images/academia.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 20,
              width: 300,
              height: 290,
              borderRadius: 30,
              marginLeft: 60,
            }}
          />
             <View style={styles.containerzinho}>
          <Text style={styles.info}>
Em um bairro tranquilo, entre casas comuns, existe uma academia diferente de todas as outras: a Academia Mágica. Não é apenas um lugar para exercitar o corpo, mas também a mente e o espírito. Seus equipamentos reluzem com uma aura especial, e os treinos são conduzidos por instrutores que dominam técnicas ancestrais de fortalecimento interior. Na Academia Mágica, os limites físicos são desafiados, os sonhos são alimentados e a magia do autodesenvolvimento se torna palpável.</Text>
         </View> 
         <Image source={require('../../../assets/images/musica.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 20,
              width: 300,
              height: 290,
              borderRadius: 30,
              marginLeft: 60,
            }}
          />
             <View style={styles.containerzinho}>
          <Text style={styles.info}>A música mágica é como um raio de luz em uma noite escura, uma corrente elétrica que percorre o corpo e a alma. Ela transcende as palavras e alcança os recônditos mais profundos do ser. Cada nota é um feitiço, tecido com emoção e harmonia, capaz de transportar o ouvinte para terras desconhecidas e emoções indescritíveis. Na música mágica, encontramos um refúgio onde os sonhos dançam livremente e as preocupações se dissipam como fumaça ao vento. É uma jornada de descoberta interior, onde cada melodia é um convite para explorar os mistérios do universo e se perder na magia do momento presente. </Text>

</View>

          <Image source={require('../../../assets/images/esportes.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 20,
              width: 300,
              height: 290,
              borderRadius: 30,
              marginLeft: 60,
            }}
          />
             <View style={styles.containerzinho}>
          <Text style={styles.info}>
Nos campos verdejantes onde a luz do sol dança, há um esporte mágico que transcende os limites da imaginação: o Quidditch. Neste jogo de bruxos, jogadores voam em suas vassouras, buscando capturar a glória enquanto perseguem a vassoura mágica, driblando Bludgers e desviando-se do terrível Balaço.</Text>
      </View>
        </ScrollView>
      </View>
    </View>
  );
}
