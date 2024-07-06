import { LinearGradient } from 'expo-linear-gradient';
import { BellRinging, CaretDown, MapPin } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Sun from "../../src/assets/01d.svg"
import Sun02d from "../../src/assets/02d.svg"

export function Home() {
  return (
    <LinearGradient colors={["#292A4E", "#715C77", "#C75C2E"]} style={styles.container}>

      <View style={styles.content}>

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color='#fff' size={30}/>
            <Text style={styles.headerLeftText}>Contagem</Text>
            <CaretDown color='#FFF' size={30} />
          </View>
          <BellRinging color='#FFF' size={30} />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTextUser}>Bom dia, Nilson!</Text>
          <Sun width="170" height="170" />
          <Text style={styles.infoTextClima}>18 °C</Text>
          <Text style={styles.infoTextMaxMin}>Min.: 18 °C   Máx.: 25 °C</Text>
        </View>


          <View style={styles.card}>
            <Text style={styles.cardText}>Previsão para os próximos 7 dias</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardTextDay}>Seg</Text>
                <Sun02d width={40} height={40} />
                <Text style={styles.cardTextPreview}>18 °C</Text>
              </View>

              </ScrollView>

          </View>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 35,
    alignItems: "center"
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  headerLeft:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  headerLeftText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    gap: 10
  },
  infoTextUser: {
    color: "white",
    fontSize: 32,
    fontWeight: "300"
  },
  infoTextClima: {
    fontSize: 100,
    fontWeight: "300",
    color: "#fff"
  },
  infoTextMaxMin: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff"
  },
  card: {
    width: "100%",
  },
  cardText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "200"
  },
  cardRow: {
    width: 99,
    height: 129,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 6,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginTop: 10,
  },
  cardTextDay: {
    fontSize: 16,
    fontWeight: "600"
  },
  cardTextPreview: {
    fontSize: 20,
    fontWeight: "300"
  }
});
