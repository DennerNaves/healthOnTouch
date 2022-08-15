import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
   
    modalStyle: {
        justifyContent: "center",
    },

    modalContainer: {
        width: width * 0.8,
        height: width * 0.7,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: width * 0.5,
        borderRadius: metrics.border,
        borderWidth: 1,
    },

    modalTitle: {
        fontSize: fonts.modalTitle,
        marginBottom: metrics.mgVerticalTextField,
        color: colors.success,
        fontWeight: "bold",
    },

    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },

    modalText: {
        fontSize: fonts.tableRow,
        textAlign: "center",
        color: colors.standard
    },

    modalIcon: {
        marginVertical: metrics.mgVerticalTextField,
        width: 50,
        height: 50,
    },
    
    buttonContainer: {
        flexDirection: "row",
    },

    button: {
        backgroundColor: colors.secondary,
        width: width * 0.25,
        height: width * 0.12,
        borderRadius: metrics.border,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: metrics.mgVerticalTextField,
    },

    buttonText: {
        fontSize: fonts.tableRow,
        fontWeight: "bold",
        color: colors.primary,
        textAlign: "center",
    },

});

export default styles;