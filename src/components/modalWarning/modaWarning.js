/* Libraries */
import React, { useState } from "react";
import {Modal, Text, Image, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
/* Components */
import ModalSuccess from "../modalSuccess/modalSuccess";
/* Assets */
import Warning_icon from "../../assets/icons/warning_icon.png";
/* Style */
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";


export default function ModalWarning({setOpenWarningModal, message, button, patientId }) {

    const [openModalSuccess, setOpenModalSuccess] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState();
    const messageWarning = message; 
    const navigation = useNavigation();


    const toggleReturn = () => {
        setOpenWarningModal(false)
    }

    async function DeletePatientById () {
        await AsyncStorage.removeItem(patientId);
    }

    const toggleConfirm = () => {
        if(messageWarning === "Os dados do paciente serão permanentemente alterados, deseja prosseguir?")
        {   
            setMessageSuccess ("Os dados do paciente foram alterados!")
            setOpenModalSuccess(true)
            setTimeout(() => {
                setOpenModalSuccess(false);
                }, 2500);
            setTimeout(() => {
                setOpenWarningModal(false);
                }, 2700);
        }
        else
        {   
            DeletePatientById();
            setMessageSuccess ("Os dados do paciente foram deletados!")
            setOpenModalSuccess(true)
            setTimeout(() => {
                setOpenModalSuccess(false);
                }, 2500);
            setTimeout(() => {
                setOpenWarningModal(false);
                var reaload1 = () => navigation.navigate("Login")
                reaload1()
                }, 2700);
                setTimeout(() => {
                    setOpenWarningModal(false);
                    var reaload2 = () => navigation.navigate("Main")
                    reaload2()
                    }, 2710);
                
        }          
    }

    return(
        <>
            <Modal
                animationType="slide"
                transparent
            >   
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Image source={Warning_icon} style={styles.modalIcon} />

                        <Text style={styles.modalTitle}>Atenção!</Text>

                        <Text style={styles.modalText}>{messageWarning}</Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, {marginRight: 25}]} onPress={() => toggleReturn()}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            
                            {button === 1 ? ([
                            <TouchableOpacity style={styles.button} onPress={() => toggleConfirm()} key={"true"}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity> ]) : 
                            ([ <View key={"false"}></View> ])}
                        </View>
                    </View>
                    
                </View>        
            </Modal>

            {openModalSuccess && <ModalSuccess setOpenModalSuccess={setOpenModalSuccess} message={messageSuccess}/>}
        </>
    )
}