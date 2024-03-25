import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00033D",
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  titulo: {
    color: "white",
    fontSize: 24,
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  user: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#6f82bd",
    borderRadius: 5,
  },
  userDetail: {
    marginBottom: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FF6347",
    minWidth: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
