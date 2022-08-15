import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
   
    addPatientContainer: {
        width: width * 0.9,
        minHeight: height * 0.55,
        alignSelf: "center",
        alignContent: "center",
        marginBottom: width * 0.1,
        marginTop: width * 0.05,
    },

    inputContainer: {
        marginTop: metrics.mgVerticalTextField,
        width: width * 0.8,
        alignSelf: "center"
    },

    textField: {
        backgroundColor: colors.secondary,
        width: width * 0.8,
        height: width * 0.13,
        alignSelf: "center",
        borderRadius: metrics.border,
        fontSize: fonts.default,
    },

    textLabel: {
        fontSize: fonts.default,
        fontWeight: "400",
        color: colors.secondary,
        marginBottom: metrics.mgVerticalTextLabel
    },

    textLabelInfo: {
        fontSize: fonts.default,
        fontWeight: "400",
        color: colors.error,
        marginBottom: metrics.mgVerticalTextLabel
    },

    textLabelContainer: {
        flexDirection: "row",
    },

    button: {
        backgroundColor: colors.secondary,
        width: width * 0.4,
        height: width * 0.12,
        borderRadius: metrics.border,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: metrics.mgVerticalButton,
    },

    buttonText: {
        fontSize: fonts.button,
        fontWeight: "bold",
        color: colors.primary,
        textAlign: "center",
    },

    errorText: {
        color: colors.error,
        marginTop: 5,
    }


});

export default styles;