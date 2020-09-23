import React, { Component } from "react";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={this.state.username}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(Username) => {
              this.setState({ email: email });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => {
              this.setState({ email: email });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password "
            value={this.state.password}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({ password: password });
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password again"
            value={this.state.password}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({ password: password });
            }}
          />
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dontHaveAccount}>
          <Text style={styles.dontHaveAccountText}>
            You already have account?
          </Text>
          <Text style={styles.dontHaveAccountText1}>Log in</Text>
        </View>
      </ScrollView>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  loginText: {
    fontSize: 45,
    marginBottom: 70,
    marginHorizontal: 50,
    fontWeight: "bold",
    color: "#5e00b5",
  },
  inputContainer: {
    marginHorizontal: 30,
    marginBottom: 60,
  },
  input: {
    fontSize: 20,
    marginBottom: 20,
    borderBottomColor: "#5e00b5",
    borderBottomWidth: 3,
    paddingBottom: 25,
  },
  forgotPasswordText: {
    alignSelf: "flex-end",
    color: "blue",
  },
  button: {
    height: 60,
    width: 250,
    backgroundColor: "#5e00b5",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 50,
  },
  buttonText: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 30,
    color: "white",
  },
  dontHaveAccount: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dontHaveAccountText: {
    fontSize: 15,
    margin: 5,
  },
  dontHaveAccountText1: {
    fontSize: 15,
    margin: 5,
    color: "#5e00b5",
  },
});
