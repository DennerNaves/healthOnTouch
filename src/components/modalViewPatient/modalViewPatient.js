/* Libraries */
import React, { useEffect, useState } from "react";
import {Modal, Text, View, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
/* Component */
import ModalEditPatient from "../modalEditPatient/modalEditPatient";
/* Style */
import styles from "./styles";


export default function ModalViewPatient( {setOpenModalViewPatient, patientId} ) {
    
    const [openModalEditPatient, setOpenModalEditPatient] = useState(false);
    const [patientInfos, setPatientInfos] = useState();

    const toggleReturn = () => {
        setOpenModalViewPatient(false)
    }

    const toggleEdit = () => {
        setOpenModalEditPatient(true)            
    }

    async function getPatientById () {
        const patientInfo = await AsyncStorage.getItem(patientId);
        const patient = JSON.parse(patientInfo)
        setPatientInfos(patient)
    }


    useEffect(() => {
        getPatientById();
    }, [])


    return(
        <>
            <Modal
                animationType="slide"
                transparent
            >
                <ScrollView style={styles.modalBackground}>
                    <View  style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Informações do paciente</Text>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Nome:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.name}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>CPF:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.cpf}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Data de nascimento:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.birthDate}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Sexo:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.sex}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Peso:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.weight}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Pressão:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.pressure}
                                </Text>
                            </View>
                        </View>

                        <View  style={styles.inputContainer}>
                            <Text style={styles.textLabel}>Observações:</Text>
                            <View style={styles.textFieldContainer}>
                                <Text style={styles.textField}>
                                    {patientInfos?.observations}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, {marginRight: 25}]} onPress={() => toggleReturn()}>
                                <Text style={styles.buttonText}>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => toggleEdit()}>
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>               
            </Modal>

            {openModalEditPatient && <ModalEditPatient setOpenModalEditPatient={setOpenModalEditPatient} patientId={patientId} />}
        
        </>
    )
}