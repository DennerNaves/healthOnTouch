/* Libraries */
import React, { useRef, useState } from "react";
import { TouchableOpacity, View, Image, Modal, SafeAreaView, Text, Animated, Easing } from "react-native";
/* Components */
import ModalViewPatient from "../modalViewPatient/modalViewPatient";
import ModalEditPatient from "../modalEditPatient/modalEditPatient";
import ModalWarning from "../modalWarning/modaWarning";
/* Assets */
import View_icon from "../../assets/icons/show_password.png";
import Edit_icon from "../../assets/icons/edit_icon.png";
import Delete_icon from "../../assets/icons/delete_icon.png";
import Options_icon from "../../assets/icons/options_icon.png";
/* Style */
import styles from "./styles";


export default function PopUp({patientId}) {

    const [openModal, setOpenModal] = useState(false);
    const [openModalViewPatient, setOpenModalViewPatient] = useState(false);
    const [openModalEditPatient, setOpenModalEditPatient] = useState(false);
    const [openWarningModal, setOpenWarningModal] = useState(false);
    const [pageY, setPageY] = useState();
    const scale = useRef(new Animated.Value(0)).current;

    const toggleViewPatient = () => {
        setOpenModalViewPatient(true)
    }

    const toggleEditPatient = () => {
        setOpenModalEditPatient(true)
    }

    const toggleDeletePatient = () => {
        setOpenWarningModal(true)
    }

    function resizeBox(value, yCordinate) {
        if(yCordinate != null){
            setPageY(yCordinate - 40)
        }
        value === 1 && setOpenModal(true);
        Animated.timing(scale, {
            toValue: value,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear
        }).start(() => value === 0 && setOpenModal(false));
    }

    
    return(
        <>
            <TouchableOpacity onPress={(e) => resizeBox(1, e.nativeEvent.pageY)}>            
                <Image source={Options_icon} style={styles.optionsIcon}/>
            </TouchableOpacity>

            <Modal transparent visible={openModal} >
                <SafeAreaView style={{flex: 1}} onTouchStart={() => resizeBox(0)}>
                    <Animated.View style={[styles.optionsContainer, {top: pageY},
                        {opacity: scale.interpolate({inputRange: [0, 1], outputRange: [0, 1]})},
                        {
                            transform: [{scale}],
                        }]}>

                        <TouchableOpacity style={styles.optionsButton} onPress={() => toggleViewPatient()}>
                            <Image source={View_icon} style={styles.optionsIcons} />
                            <Text style={styles.optionsText}>Ver mais</Text>
                        </TouchableOpacity>

                        <View style={styles.optionsLine}></View>

                        <TouchableOpacity style={styles.optionsButton} onPress={() => toggleEditPatient()}>
                            <Image source={Edit_icon} style={styles.optionsIcons} />
                            <Text style={styles.optionsText}>Editar</Text>
                        </TouchableOpacity>

                        <View style={styles.optionsLine}></View>


                        <TouchableOpacity style={styles.optionsButton} onPress={() => toggleDeletePatient()}>
                            <Image source={Delete_icon} style={styles.optionsIcons} />
                            <Text style={styles.optionsText}>Deletar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </SafeAreaView>
                
            </Modal>

            {openModalViewPatient && <ModalViewPatient setOpenModalViewPatient={setOpenModalViewPatient} patientId={patientId}/>}
            {openModalEditPatient && <ModalEditPatient setOpenModalEditPatient={setOpenModalEditPatient}/>}
            {openWarningModal && <ModalWarning setOpenWarningModal={setOpenWarningModal} message={"Os dados do paciente serão permanentemente deletados, deseja prosseguir?"} patientId={patientId} button={1}/>}

        </>
    )
}