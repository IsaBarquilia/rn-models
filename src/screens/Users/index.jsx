import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/UserRepository";

export default function Users() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/images/afilacao.png')} 
        style={{ 
          marginTop: 30,
           width: 400, 
           height: 85,
           }} />

      <View style= {styles.inputContainer} >
      {allUsers.length > 0 ? (
        <View style={styles.userList}>
          {allUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View>
                <Text style={styles.userName}>{user.name}</Text>
                
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: user })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
                
              </View>
            </View>
            
          ))}
          
        </View>
        
      ) : (
        <Text>Não há afiliações cadastrados</Text>
      )}
       
                  

      </View>
    </View>
  );
}
