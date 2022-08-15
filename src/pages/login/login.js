/* Libraries */
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
/* Services */
/* Assets */
import Hide_password_icon from "../../assets/icons/hide_password.png"
import Show_password_icon from "../../assets/icons/show_password.png"
import SignIn_image from "../../assets/images/signIn.png"
/* Style */
import styles from "./styles"


export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState();
    const navigation = useNavigation();

    const toogleCreateAccount = () => {
        Linking.openURL("https://github.com/signup?source=login")
    };


    return(
        <>  
            <View style={[styles.loginContainer, styles.boxShadow]}>

                <Image source={SignIn_image} style={styles.signInImage}></Image>

                <View  style={styles.container}>
                    <Text style={styles.textLabel}>Login</Text>
                    <TextInput style={styles.textField}
                        name="login"
                        placeholder="Login"
                        keyboardType="default" 
                    />
                        
                </View>

                <View  style={styles.container}>
                    <Text style={styles.textLabel}>Senha</Text>
                    <View style={styles.passwordInput}>
                        <TextInput
                            name="password"
                            placeholder="Senha"
                            keyboardType="default"
                            style={styles.passwordField}
                            secureTextEntry={!showPassword}
                            onChangeText={setPassword}
                            value={password}
                        />
                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}>
                                {!showPassword ? <Image source={Show_password_icon} style={styles.passwordIcon}/> : 
                                                 <Image source={Hide_password_icon} style={styles.passwordIcon}/>}
                            </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity>
                    <Text style={styles.link} onPress={() => toogleCreateAccount()}>Criar conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                
            </View>
        </>
    )
}

