import { PlantProvider } from "../src/context/PlantContext";
import AppNavigation from "../src/navigation/AppNavigation";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from '../src/context/ThemeContext';

export default function Page() {
  return (
    <ThemeProvider> 
      <PlantProvider>
          <AppNavigation />
      </PlantProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
