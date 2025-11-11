import React from "react";
import { View, Text, Image } from "react-native";
import { Article } from "../model/entities/Article";

type Props = { article: Article };

export default function NewsCard({ article }: Props) {
  return (
    <View style={{ flexDirection: "row", marginVertical: 8, borderRadius: 8 }}>
      {article.urlToImage ? (
        <Image
          source={{ uri: article.urlToImage }}
          style={{ width: 100, height: 80, borderRadius: 6 }}
        />
      ) : null}
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold" }} numberOfLines={2}>
          {article.title}
        </Text>
        <Text numberOfLines={2}>{article.description}</Text>
        <Text style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
          {typeof article.source === "string" ? article.source : article.source?.name}
          {article.publishedAt ? ` • ${new Date(article.publishedAt).toLocaleDateString()}` : ""}
        </Text>
      </View>
    </View>
  );
}
