/* Libraries */
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
/* Components */
import PopUp from "../../components/popUpMenu/popUpMenu";
import ModalViewPatient from "../../components/modalViewPatient/modalViewPatient";
/* Style */
import styles from "./styles";


export default function PatientList() {

    const [openModal, setOpenModal] = useState(false);
    const [patientsList, setPatientsList] = useState({});
    
    async function getPatientsList () {
        const allKeys = await AsyncStorage.getAllKeys();
        const patients = await AsyncStorage.multiGet(allKeys);

        setPatientsList(patients)
    }

    useEffect(() => {
        getPatientsList();
    }, [])
    


    return (
        <>  
            <View style={styles.listPatientsContainer}>
                <View style={styles.tableHading}>
                    <Text style={styles.tableHadingText}>Pacientes:</Text>
                </View>

                {(patientsList && patientsList.length > 0) && patientsList.map((data, index) => {
                   var dataPatient = JSON.parse(data[1])

                    return (
                        
                        <View style={styles.tableBody} key={index}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableRowText}>{dataPatient.name}</Text>
                                <PopUp patientId={data[0]}/>
                            </View>
                        </View>
                )})}

                {openModal && <ModalViewPatient setOpenModal={setOpenModal}/>}

            </View>
        </>        
    )
}
