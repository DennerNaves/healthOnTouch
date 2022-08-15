/* Libraries */
import React from "react";
import { StatusBar, SafeAreaView } from "react-native"
/* Routes */
import StackNavigation from "./src/routes/routes";
import store from "./src/redux/store"
import { Provider } from "react-redux";

export default function App(){
  
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>      
          <StatusBar />
          <StackNavigation />
      </SafeAreaView>
    </Provider>
  )
}
