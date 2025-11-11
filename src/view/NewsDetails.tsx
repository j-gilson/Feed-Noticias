import React from "react";
import { View, Text, ScrollView, Image, Button, Linking, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Article } from "../model/entities/Article";

type Props = NativeStackScreenProps<RootStackParamList, "NewsDetails">;

export default function NewsDetails({ route }: Props) {
  const { article } = route.params as { article: Article };

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage ? <Image source={{ uri: article.urlToImage }} style={styles.image} /> : null}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.desc}>{article.description || article.content}</Text>

      <View style={{ marginTop: 16 }}>
        <Button title="Abrir notícia no navegador" onPress={() => Linking.openURL(article.url)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12, flex: 1 },
  image: { width: "100%", height: 220, borderRadius: 8 },
  title: { marginTop: 12, fontSize: 20, fontWeight: "bold" },
  desc: { marginTop: 8, fontSize: 16, lineHeight: 22 },
});
