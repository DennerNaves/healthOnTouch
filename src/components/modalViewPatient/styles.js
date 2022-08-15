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
        width: width * 0.9,
        minHeight: height,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: width * 0.15,
        borderRadius: metrics.border,
        borderWidth: 1,
        marginBottom: width * 0.15,
    },

    modalTitle: {
        fontSize: 26,
        marginBottom: metrics.mgVerticalTextField,
        color: colors.secondary,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: metrics.mgVerticalTextField,
    },

    modalText: {
        fontSize: fonts.tableRow,
        textAlign: "center"
    },

    buttonContainer: {
        flexDirection: "row",
        marginVertical: metrics.mgVerticalButton,
    },

    button: {
        backgroundColor: colors.secondary,
        width: width * metrics.buttonModalWidth,
        height: width * metrics.buttonModalHeight,
        borderRadius: metrics.border,
        alignSelf: "center",
        justifyContent: "center",
    },

    buttonText: {
        fontSize: fonts.tableRow,
        fontWeight: "bold",
        color: colors.primary,
        textAlign: "center",
    },

    inputContainer: {
        marginTop: metrics.mgVerticalTextField,
        width: width * 0.8,
        justifyContent: "center"
    },

    textFieldContainer: {
        backgroundColor: colors.secondary,
        width: width * 0.8,
        height: width * 0.13,
        borderRadius: metrics.border,
        alignItems: "center",
        justifyContent: "center"
    },

    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },

    textField: {
        fontSize: fonts.default,
        fontWeight: "500",
        alignSelf: "flex-start",
        marginLeft: metrics.mgHorizontalTextHading
    },

    textLabel: {
        fontSize: fonts.default,
        fontWeight: "400",
        color: colors.secondary,
        marginBottom: metrics.mgVerticalTextLabel
    },

});

export default styles;