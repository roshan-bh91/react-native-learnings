import { Image, Platform, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowRadius: 10,
        shadowOpacity: 0.6,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
  },
  hp: {
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    // Looks similar to object fit property of CSS
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  moves: {
    marginVertical: 10,
  },
  movesContent: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

const PokemonCard = ({ name, image, type, hp, moves, weaknesses }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={styles.typeContainer}>
        <View
          style={[
            styles.badge,
            { borderColor: getTypeDetails(type).borderColor },
          ]}
        >
          <Text>{getTypeDetails(type).emoji}</Text>
          <Text>{type}</Text>
        </View>
      </View>
      <View style={styles.moves}>
        <Text style={styles.movesContent}>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text style={styles.movesContent}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
};

export default PokemonCard;
