
  render() {
    const { listData } = this.state;

    if (listData.length != 0) {
      return (
        <View style={styles.container}>
          <SafeAreaView
            style={{
              marginTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
          />
          <ImageBackground
            source={require("../assets/bg.png")}
            style={{ flex: 1, paddingTop: 20 }}
          >
            <View style={styles.upperContainer}>
              <Text style={styles.headerText}>Mundo dos Planetas</Text>
            </View>
            <View style={styles.lowerContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.listData}
                renderItem={this.renderItem}
                numColumns={2}
              />
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ flex: 1, paddingTop: 20 }}
        >
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={styles.headerText}>Carregando...</Text>
          </View>
        </ImageBackground>
      );
    }
  }
}
