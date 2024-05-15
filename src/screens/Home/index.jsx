import { Text, View, Image, ScrollView } from "react-native";
// import TouchButton from "../../components/TouchButton";
import styles from "./styles";
import Title from "../../components/Title";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>

        <Image source={require('../../../assets/images/castelo.jpg')}
          style={{
            width: 30,
            height: 30,
            marginTop: 50,
            marginBottom: 45,
            width: 370,
            height: 250,
            borderRadius: 30,
            marginLeft: 20,
          }} />
           <Image source={require('../../../assets/images/titulo.png')}
          style={{
            marginTop: 10,
            width: 400,
            height: 55,
          }} />

        <ScrollView>
        <View style={styles.containerzinho}>
          <Text style={styles.descricao}>
            A Escola de Magia Vanguardht é uma instituição antiga situada em uma floresta encantada, conhecida por sua arquitetura que se mescla à natureza e suas torres de pedra antigas. Oferece um currículo amplo que abrange desde as artes mágicas fundamentais até estudos avançados em magia elemental e dimensões paralelas, atraindo estudantes de todo o mundo mágico. Seus professores são magos e bruxas renomados, e os alunos são escolhidos por seu potencial e caráter. Vanguardht é famosa por seus locais misteriosos, como a vasta biblioteca subterrânea e o labirinto de cristal, que são centros de aprendizado e aventura. É um lugar onde os alunos não só ganham conhecimento mágico mas também vivenciam o crescimento pessoal e formam amizades duradouras.</Text>
         </View>
          <Image source={require('../../../assets/images/sobre.png')}
            style={{
              marginTop: 10,
              width: 200,
              height: 40,
            }} />


<View style={styles.containerzinho}>
          <Text style={styles.info}>Conheça nossas criaturas misticas </Text>
          </View>
          <Image source={require('../../../assets/images/Maré.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/mareNome.png')}
            style={{
              marginBottom: 19,
              width: 130,
              height: 41,
            }} />
<View style={styles.containerzinho}>
          <Text style={styles.info}>Maré é um filhote de dragão brincalhão e curioso, cujas escamas reluzem como gotas de água à luz do sol. Ele é um nadador ágil e gracioso, navegando pelas correntes dos rios e oceanos com facilidade. Maré é conhecido por sua personalidade travessa e seu amor pela exploração das profundezas aquáticas, trazendo alegria e vitalidade a todos os lugares que visita.  </Text>
         </View>
          <Image source={require('../../../assets/images/Liríope.jpg')}
            style={{
              width: 30,
              height: 30,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/LiríopeNome.png')}
            style={{
              marginBottom: 19,
              width: 152,
              height: 41,
            }} />
<View style={styles.containerzinho}>
          <Text style={styles.info}>Liriope é a matriarca das fadas, conhecida por sua sabedoria e compaixão. Seu semblante gentil e sábio é reconhecido por todas as criaturas místicas. Como mãe de todas as fadas, ela é protetora e nutridora, sempre pronta para oferecer orientação e conselho. Seu toque é capaz de curar feridas físicas e emocionais, e sua presença irradia uma aura de tranquilidade e conforto.</Text>
         </View>
          <Image source={require('../../../assets/images/Áurea.jpg')}
            style={{
              width: 70,
              height: 90,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/AureaNome.png')}
            style={{
              marginBottom: 19,
              width: 152,
              height: 41,
            }} />
            <View style={styles.containerzinho}>
          <Text style={styles.info}>Áurea é a matriarca dos dragões, uma figura imponente e carinhosa que protege e cuida de sua prole com dedicação inabalável. Seus olhos flamejantes transmitem sabedoria ancestral, e seu rugido maternal ecoa através das montanhas. Ela é reverenciada como a guardiã dos laços familiares entre os dragões e como uma fonte de força e coragem para todos os que a conhecem.  </Text>
</View>


          <Image source={require('../../../assets/images/Eco.jpg')}
            style={{
              width: 70,
              height: 90,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/ecoNome.png')}
            style={{
              marginBottom: 19,
              width: 112,
              height: 41,
            }} />
            <View style={styles.containerzinho}>
          <Text style={styles.info}>Eco é um filhote de dragão encantador e musical, cujas asas batem em harmonia com os sons da natureza. Ele é capaz de criar melodias mágicas com suas vocalizações, que ressoam através das florestas e montanhas. Eco é um amante da música e da comunicação, sempre ansioso para compartilhar sua voz única com aqueles que têm a sorte de cruzar seu caminho.  </Text>
</View>

          <Image source={require('../../../assets/images/Galateia.jpg')}
            style={{
              width: 70,
              height: 90,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/GalateiaNome.png')}
            style={{
              marginBottom: 19,
              width: 180,
              height: 49,
            }} />
            <View style={styles.containerzinho}>
          <Text style={styles.info}>Galateia é uma fada graciosa e etérea, cujos cabelos parecem feitos de brisa suave e cujos passos dançam como folhas levadas pelo vento. Ela é conhecida por sua habilidade de controlar os ventos, desde os mais gentis suspiros até as tempestades mais poderosas. Sua presença traz uma sensação de renovação e frescor, e muitos marinheiros acreditam que sua bênção os protege durante suas jornadas pelo mar.

          </Text>
</View>



          <Image source={require('../../../assets/images/Íris.jpg')}
            style={{
              width: 70,
              height: 90,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/ÍrisNome.png')}
            style={{
              marginBottom: 19,
              width: 100,
              height: 55,
              marginLeft: 10,
            }} />
            <View style={styles.containerzinho}>
          <Text style={styles.info}>Íris é uma fada radiante e alegre, cujos vestidos são tecidos com pétalas de flores e cuja risada é como um suave murmúrio de riacho. Ela é a guardiã das flores e das plantas, responsável por sua beleza e vitalidade. Íris é vista dançando entre os campos floridos, espalhando cores e aromas que encantam todos que a encontram.  </Text>
</View>


          <Image source={require('../../../assets/images/Gryphor.jpg')}
            style={{
              width: 70,
              height: 90,
              marginTop: 50,
              marginBottom: 1,
              width: 190,
              height: 250,
              borderRadius: 30,
              marginLeft: 30,
            }}
          />
          <Image source={require('../../../assets/images/GryphorNome.png')}
            style={{
              marginBottom: 19,
              width: 190,
              height: 59,
              marginLeft: 10,
            }} />
            <View style={styles.containerzinho}>
          <Text style={styles.info}>Gryphor é um dragão imponente e majestoso, cujas escamas brilham como o mar e cujo rugido ressoa como trovão. Ele é reconhecido como o soberano dos dragões, possuindo uma sabedoria antiga e um poder inigualável. Sua presença inspira tanto temor quanto respeito, e ele é procurado por aqueles que buscam conselho em questões de grande importância.  </Text>
      </View>
        </ScrollView>
      </View>
    </View>
  );
}
