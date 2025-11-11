import React, { useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNewsViewModel } from "../viewmodel/useNewsViewModel";
import NewsCard from "./components/NewsCard";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const { query, setQuery, articles, loading, error, search } = useNewsViewModel();

  useEffect(() => {
    search(); // carrega na montagem
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Buscar notícias..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => search(query)}
          style={styles.input}
        />

        {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

        {error ? <Text style={{ color: "red", marginTop: 12 }}>{error}</Text> : null}

        <FlatList
          data={articles}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("NewsDetails", { article: item })}>
              <NewsCard article={item} />
            </TouchableOpacity>
          )}
          ListEmptyComponent={!loading ? <Text style={{ marginTop: 20 }}>Nenhuma notícia encontrada.</Text> : null}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  input: {
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
});
