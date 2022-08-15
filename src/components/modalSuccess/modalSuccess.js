/* Libraries */
import React from "react";
import {Modal, Text, Image, View } from "react-native";
/* Assets */
import Success_icon from "../../assets/icons/success_icon.png";
/* Style */
import styles from "./styles";


export default function ModaSuccess( {setOpenWarningModal, message} ) {
    
    const toggleReturn = () => {
        setOpenWarningModal(false)
    }

    const toggleDelete = () => {
        setOpenWarningModal(false)            
    }


    return(
        <>
            <Modal
                animationType="slide"
                transparent
            >   
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Image source={Success_icon} style={styles.modalIcon} />
                        <Text style={styles.modalTitle}>Sucesso!</Text>
                        <Text style={styles.modalText}>{message}</Text>
                    </View>
                </View>
                
            </Modal>
        </>
    )
}