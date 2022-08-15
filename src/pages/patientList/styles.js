import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({

    listPatientsContainer: {
        width: width * 0.9,
        minHeight: height * 0.55,
        alignSelf: "center",
        alignContent: "center",
        marginBottom: width * 0.1,
    },

    tableHading: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: colors.standard,
        flexWrap: "wrap",
        marginTop: width * 0.05,
    },

    tableHadingText: {
        fontSize: fonts.default,
        marginRight: metrics.mgHorizontalTextHading,
        color: colors.secondary,
        marginBottom: metrics.mgVerticalTextLabel,
        fontWeight: "bold",
    },

    tableBody: {
        marginTop: metrics.mgVerticalTextField

    },

    tableRow: {
        backgroundColor: colors.secondary,
        marginBottom: metrics.mgTableRow,
        borderRadius: metrics.border,
        height: width * 0.15,
        marginHorizontal: metrics.mgTableRow,
        borderColor: colors.standard,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    tableRowText: {
        fontSize: fonts.tableRow,
        color: colors.standard,
        fontWeight: "500",
        marginLeft: 20,

    },

    optionsButton: {
        width: 34,
        height: 34,
        marginRight: 10,
    },

});

export default styles;