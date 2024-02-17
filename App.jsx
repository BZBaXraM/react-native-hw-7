import {StatusBar} from 'expo-status-bar';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from "./src/navigation/root";

// Не смог сделать хороший вид из-за того, что зарядного устройства не было и хотел быстро сделать и скинуть
const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <RootNavigation/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;