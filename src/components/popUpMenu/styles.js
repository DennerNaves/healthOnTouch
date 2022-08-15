import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";


const styles = StyleSheet.create({
   
    optionsContainer: {
        borderRadius: 8,
        borderColor: "#333",
        borderWidth: 1,
        backgroundColor: colors.secondary,
        paddingHorizontal: 10,
        position: "absolute",
        left: 250,
    },

    optionsButton: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        
        marginVertical: metrics.mgVerticalTextLabel,
        
    },

    optionsLine :{
        marginHorizontal: metrics.mgTableRow,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1 
    },

    optionsIcons: {
        width: 24,
        height: 24,
        marginRight: metrics.mgTableRow
    },

    optionsText: {
        fontSize: fonts.tableRow,
        color: colors.standard
    },

    optionsIcon: {
        width: 34,
        height: 34,
    },

});

export default styles;