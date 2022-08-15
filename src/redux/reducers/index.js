import AsyncStorage from "@react-native-async-storage/async-storage";

export default function (state = 0, action) {
    
    switch(action.type){
        case "POST":
        
            return action.payload;

        /*case "GET":
            async function getAllPatients() {
                const allKeys = await AsyncStorage.getAllKeys();
                teste = await AsyncStorage.multiGet(allKeys);
                return action.payload
            }

           return getAllPatients();*/

        default: 
            return state;
    }
}