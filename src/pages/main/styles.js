import { StyleSheet, Dimensions } from "react-native";
import fonts from "../../styles/fonts";
import colors from "../../styles/colors"
import metrics from "../../styles/metrics";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    background: {
        width: width,
        minHeight: height,
        alignContent: "center",
        backgroundColor: colors.lightGrey,
        alignItems: "center",
        justifyContent: "flex-start",
    },

    menuContainer: {
        width: width * 0.95,
        height: width * 0.15,
        flexDirection: "row",
        marginTop: height * 0.15,
        alignItems: "center",
        justifyContent: "space-between"
    },

    mainContainer: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: metrics.border,
        borderBottomRightRadius: metrics.border,
        borderWidth: 0.3,
        width: width * 0.95,
        minHeight: height * 0.6,
        backgroundColor: colors.primary,
        justifyContent: "center",
        marginBottom: 50,
    },

    textMenu: {
        fontSize: fonts.button,
        fontWeight: "bold",
        color: colors.secondary,
        marginLeft: 4,
    },

    buttonMenuPressed: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: width * 0.14,
        width: width * 0.47,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,

    },

    buttonMenuUnpressed: {
        backgroundColor: colors.primaryLight,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: width * 0.14,
        width: width * 0.47,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,

    },

    menuImage: {
        width: 24,
        height: 24,
    },

    boxShadow: {
        elevation: 40,
        shadowColor: colors.shadow, 
    },

});

export default styles;