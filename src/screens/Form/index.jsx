import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

export default function Form({ route }) {
  const { user, edit } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setEmail(user.email);
      setFundacao(String(user.fundacao));
      setDescricao(user.descricao);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    // Validando entrada
    if (!name || !email || !fundacao) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos.");
      return;
    }

    const fundacaoInt = parseInt(fundacao);
    if (isNaN(fundacaoInt) || fundacaoInt <= 0) {
      Alert.alert("Valor inválido", "Digite uma data de fundação válida.");
      return;
    }

    if (isUpdate) {
      usersRepository.update(user.id, name, email, descricao, fundacaoInt);
      Alert.alert("Sucesso", "Usuário atualizado com sucesso.");
    } else {
      const newUser = new User(name, email, descricao, fundacaoInt);
      usersRepository.add(newUser);
      Alert.alert("Sucesso", "Usuário adicionado com sucesso.");
    }
    clearInputs();
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    setName("");
    setEmail("");
    setFundacao("");
    setDescricao("");
  };

  return (
    <View style={styles.container}>
      
 <Image source={require('../../../assets/images/afilacao.png')} 
        style={{ 
          marginTop: 30,
           width: 400, 
           height: 85,
           }} />
      <Title title={isUpdate ? "Editar Usuário" : ""} style={styles.text} />
      <View style={styles.containerzinho}>
      <View style={styles.inputContainer}>
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
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Digite a data de fundação da afiliação"
          style={styles.userInput}
          onChangeText={setFundacao}
          value={fundacao}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Digite a descrição da afiliação"
          style={styles.userInput}
          onChangeText={setDescricao}
          value={descricao}
        />

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
    </View>
  );
}
