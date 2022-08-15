import { StyleSheet, Dimensions } from "react-native";
import metrics from "../../styles/metrics";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts"

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    
    loginContainer: {
        backgroundColor: colors.primary,
        width: width * 0.9,
        height: height * 0.81,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: metrics.border,
        marginTop: height * 0.03,
    },

    boxShadow: {
        elevation: 20,
        shadowColor: colors.shadow, 
    },
    
    signInImage: {
        alignSelf: "center",
        marginVertical: metrics.mgVerticalButton,
    },

    container: {
        marginTop: metrics.mgVerticalTextField,
        width: width * 0.8,
        alignSelf: "center"
    },

    button: {
        backgroundColor: colors.secondary,
        width: width * 0.4,
        height: width * 0.12,
        borderRadius: metrics.border,
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: metrics.mgVerticalButton,
    },

    buttonText: {
        fontSize: fonts.button,
        fontWeight: "bold",
        color: colors.primary,
        textAlign: "center",
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
        fontSize: fonts.button,
        fontWeight: "400",
        color: colors.secondary,
        marginBottom: metrics.mgVerticalTextLabel
    },

    link: {
        fontSize: fonts.default,
        color: colors.link,
        marginTop: metrics.mgVerticalTextField,
        alignSelf: "center",
    },

    passwordIcon: {
        width: 24,
        height: 24,
        alignSelf: "center",
        marginRight: 14,
    },

    passwordInput:{
        flexDirection: "row",
        backgroundColor: colors.secondary,
        width: width * 0.8,
        height: width * 0.13,
        alignItems: "center",
        borderRadius: metrics.border,
        justifyContent: "space-between",
    },

    passwordField:{
        fontSize: fonts.default,
    },
});

export default styles;