import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

export default function Form({ route }) {
  let { user, edit } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fundacao, setfundacao] = useState("");
  const [descricao, setdescricao] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setEmail(user.email);
      setfundacao(String(user.fundacao));
      setdescricao(user.descricao)
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.update(user.id, name, email, descricao, parseInt(fundacao) || 0);
      clearInputs();
    } else {
      const newUser = new User(name, email, descricao, parseInt(fundacao) || 0);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setEmail("");
    setfundacao("");
    setdescricao("");
  };

  return (
    <View style={styles.container}>
       <Image source={require('../../../assets/images/afilacao.png')} 
        style={{ 
          marginTop: 30,
           width: 400, 
           height: 85,
           }} />
      <Title title={isUpdate ? "Editar Usuário" : ""}/>
      <View style= {styles.inputContainer} >
      <TextInput
        placeholder="Digite o nome da afiliação"
        style={styles.userInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite o email da afiliação"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite a data de fundação da afiliação"
        style={styles.userInput}
        onChangeText={setfundacao}
        value={fundacao}
        keyboardType="numeric"
      />
        {/* <TextInput
        placeholder="Digite a descrição da afiliação"
        style={styles.userInput}
        onChangeText={setdescricao}
        value={descricao}
      /> */}

      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
      </View>
    </View>

  );
}
