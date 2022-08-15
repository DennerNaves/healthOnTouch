/* Libraries */
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
/* Components */
import ModalSuccess from "../../components/modalSuccess/modalSuccess";
import ModalWarning from "../../components/modalWarning/modaWarning";
/* Style */
import styles from "./styles";


export default function AddPatient() {

    const [openModalSuccess, setOpenModalSuccess] = useState(false);
    const [openWarningModal, setOpenWarningModal] = useState(false);
    const [nameError, setNameError] = useState();
    const [cpfError, setCpfError] = useState();
    const [birthDateError, setBirthDateError] = useState();
    const [sexError, setSexError] = useState();
    const [weightError, setWeightError] = useState();
    const [pressureError, setPressureError] = useState();
    const moment = require('moment');
    const [patientData, setPatientData] = useState({
        name: "",
        cpf: "",
        birthDate: "",
        sex: "",
        weight: "",
        pressure: "",
        observations: "",
    });

    const toggleAdd = () => {

        if(nameError || cpfError || birthDateError || sexError || weightError || pressureError){
            setOpenWarningModal(true)
        }
        else {

            async function createId() {
                    const allId = await AsyncStorage.getAllKeys()

                    if(allId <= 0){
                        return 1;
                    }
                    else{
                        return allId.length + 1;
                    }
                }  
            
               async function postPatient() {
                    const newId = (await createId()).toString();
                    await AsyncStorage.setItem(newId, JSON.stringify(patientData))
                }

                postPatient();
                setOpenModalSuccess(true)
                setTimeout(() => {
                    setOpenModalSuccess(false);
                }, 2500);
        }
            
    }
    

    useEffect(() => {

        if(!patientData.name){
            setNameError("O campo Nome é obrigatório!");
        }
        else{
            if(!patientData.name.match(/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/)){
                setNameError("O campo Nome deve conter nome e sobrenome!");
            }
            else{
                setNameError("");
            }
        }

        if(!patientData.cpf){
            setCpfError("O campo CPF é obrigatório!");
        }
        else{
            if(!patientData.cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)){
                setCpfError("O campo CPF deve estar no formato correto!");
            }
            else{
                setCpfError("");
            }
        }

        if(!patientData.birthDate){
            setBirthDateError("O campo Data de Nascimento é obrigatório!");
        }
        else{
            var today = moment().format("DD/MM/YYYY")
            var compareDate = moment(today, "DD/MM/YYYY").isBefore(moment(patientData.birthDate,"DD/MM/YYYY"));
            var limitDate = moment(patientData.birthDate , "DD/MM/AAAA").subtract(120, 'years').calendar()
            var limiteDateSplited = limitDate.split("/");
            var limiteDateYear = limiteDateSplited[2];
            var thisYearSplited = patientData.birthDate.split("/");
            var thisYear = thisYearSplited[2];

            if(!patientData.birthDate.match(/^\d{2}\/\d{2}\/\d{4}$/)){
                setBirthDateError("O campo Data de Nascimento deve estar no formato correto!");
            }
            else if(patientData.birthDate != moment(patientData.birthDate, "DD/MM/yyyy").format("DD/MM/yyyy")){
                setBirthDateError("Data de nascimento incorreta!"); 
            }
            else if(compareDate){
                setBirthDateError("A data de nascimento não pode ser posterior a data de hoje!");
            }
            else if(thisYear < limiteDateYear){
                setBirthDateError("Data de nascimento incorreta!");                
            }
            else{
                setBirthDateError("");
            }
        }

        if(!patientData.sex){
            setSexError("O campo Sexo é obrigatório!");
        }
        else{
            if(patientData.sex === "Masculino" || patientData.sex === "Feminino" ||  patientData.sex === "Outro"){
                setSexError(""); 
            }
            else{
                setSexError("O campo Sexo deve estar no formato correto! (Masculino, Feminino ou Outro");
            }
        }

        if(!patientData.weight){
            setWeightError("O campo Peso é obrigatório!");
        }
        else{
            if(patientData.weight <= 0){
                setWeightError("O campo Peso está incorreto");
            }

            else if(patientData.weight > 200){
                setWeightError("O campo Peso está incorreto");
            }
            else{
                setWeightError("");
            }
        }

        if(!patientData.pressure){
            setPressureError("O campo Pressão é obrigatório!");
        }
        else{
            if(patientData.pressure.length <= 8){
                setPressureError("O campo Pressão deve estar no formato correto! (Ex: 120/080)");
            }
            else{
                setPressureError("");
            }
        }  

        
    }, [patientData]);


    return (
        <>  
            <View style={styles.addPatientContainer}>
                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>Nome</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInput 
                        style={styles.textField}
                        placeholder={"Nome completo do paciente"}
                        value={patientData?.name}
                        onChangeText={(text) => setPatientData({ ...patientData, name: text })}
                    />

                    {nameError && <Text style={styles.errorText}>{nameError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>CPF</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInputMask 
                        style={styles.textField}
                        placeholder={"CPF do paciente"}
                        keyboardType="numeric"
                        value={patientData?.cpf}
                        onChangeText={(text) => setPatientData({ ...patientData, cpf: text })}
                        type={"custom"}
                        options={{
                            mask: "999.999.999-99"
                        }}
                    />

                    {cpfError && <Text style={styles.errorText}>{cpfError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>Data de nascimento</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInputMask 
                        style={styles.textField}
                        keyboardType="numeric"
                        placeholder={"Data de nascimento do paciente"}
                        value={patientData?.birthDate}
                        onChangeText={(text) => setPatientData({ ...patientData, birthDate: text })}
                        type={"custom"}
                        options={{
                            mask: "99/99/9999"
                        }}
                    />

                    {birthDateError && <Text style={styles.errorText}>{birthDateError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>Sexo</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInputMask 
                        style={styles.textField}
                        placeholder={"(Masculino/Feminino/Outro)"}
                        value={patientData?.sex}
                        onChangeText={(text) => setPatientData({ ...patientData, sex: text })}
                        type={"custom"}
                        options={{
                            mask: "AAAAAAAAA"
                        }}
                    />

                    {sexError && <Text style={styles.errorText}>{sexError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>Peso</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInputMask 
                        style={styles.textField}
                        keyboardType="numeric"
                        placeholder={"Peso do paciente em Kg"}
                        value={patientData?.weight}
                        onChangeText={(text) => setPatientData({ ...patientData, weight: text })}
                        type={"custom"}
                        options={{
                            mask: "999"
                        }}
                    />

                    {weightError && <Text style={styles.errorText}>{weightError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>Pressão</Text ><Text style={styles.textLabelInfo}>*</Text>
                    </View>
                    <TextInputMask 
                        style={styles.textField}
                        keyboardType="numeric"
                        placeholder={"Sistolica/Diastolica em mmHg"}
                        value={patientData?.pressure}
                        onChangeText={(text) => setPatientData({ ...patientData, pressure: text })}
                        type={"custom"}
                        options={{
                            mask: "999 / 999"
                        }}
                    />

                    {pressureError && <Text style={styles.errorText}>{pressureError}</Text>}
                </View>

                <View  style={styles.inputContainer}>
                    <Text style={styles.textLabel}>Observações</Text>
                    <TextInput 
                        style={[styles.textField, {height:100}]}
                        placeholder={"Observações sobre a saúde do paciente (opcional)"}
                        multiline={true}
                        numberOfLines={5}
                        maxLength={200}
                        value={patientData?.observations}
                        onChangeText={(text) => setPatientData({ ...patientData, observations: text })}
                    />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => toggleAdd()}>Cadastrar</Text>
                </TouchableOpacity>

                {openModalSuccess && <ModalSuccess setOpenModalSuccess={setOpenModalSuccess} message={"Paciente cadastrado com sucesso!"}/>}
                {openWarningModal && <ModalWarning setOpenWarningModal={setOpenWarningModal} message={"Um ou mais campos foram preenchidos incorretamente!"} button={0}/>}
        
            </View>
        </>        
    )
}
