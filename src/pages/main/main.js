/* Libraries */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
/* Pages */
import PatientList from "../patientList/patientList";
import AddPatient from "../addPatient/addPatient";
/* Assets */
import Add_icon from "../../assets/icons/add_icon.png";
import List_icon from "../../assets/icons/list_icon.png";
/* Style */
import styles from "./styles";

export default function Main() {

    const [listPatients, setListPatients] = useState(true);
    const [addPatients, setAddPatients] = useState(false);

    const toggleListPatients = () => {
        if(!listPatients){
            setAddPatients(!addPatients)
            setListPatients(!listPatients)
        }
    }

    const toggleAddPatients = () => {
        if(!addPatients){
            setListPatients(!listPatients)
            setAddPatients(!addPatients)
        }
    }


    return (
            <ScrollView>
                <View style={styles.background}>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity 
                            style={listPatients ? styles.buttonMenuPressed : styles.buttonMenuUnpressed}
                            onPress={() => toggleListPatients()}>

                            <Image source={List_icon} style={styles.menuImage} />
                            <Text style={styles.textMenu}>Pacientes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                           style={addPatients ? styles.buttonMenuPressed : styles.buttonMenuUnpressed}
                            onPress={() => toggleAddPatients()}>

                            <Image source={Add_icon} style={styles.menuImage} />
                            <Text style={styles.textMenu}>Novo paciente</Text>
                        </TouchableOpacity> 
                    </View>

                    <View style={[styles.mainContainer, styles.boxShadow]}>
                        { listPatients &&<PatientList /> }
                        { addPatients && <AddPatient /> }
                    </View>

                </View>  
            </ScrollView>      
    )
}
