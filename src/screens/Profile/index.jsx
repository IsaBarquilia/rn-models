import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editUser = () => {
    navigation.navigate("Form", { user: data, edit: true });
  };

  const deleteUser = () => {
    usersRepository.remove(data.id);
    navigation.navigate("Users");
  };

  return (
    <View style={styles.container}>
     <Image source={require('../../../assets/images/titulo.png')} 
        style={{ 
          marginTop: 30,
           width: 400, 
           height: 55,
           }} />

      {data ? (
        <Text></Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.email}</Text>
          {/* <Text style={styles.text}>{data.descricao}</Text> */}
          <Text style={styles.text}>{data.fundacao}</Text>
        </View>

        <View style={styles.userActions}>
          <TouchableOpacity style={styles.editButton} onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
