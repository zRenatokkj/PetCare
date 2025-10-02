import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function ShopScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const categories = [
    { title: 'Ração', icon: 'nutrition', color: '#FF9800' },
    { title: 'Brinquedos', icon: 'basketball', color: '#E91E63' },
    { title: 'Acessórios', icon: 'diamond', color: '#9C27B0' },
    { title: 'Higiene', icon: 'water', color: '#2196F3' },
  ];

  const products = [
    {
      name: 'Ração Premium Cães',
      category: 'Ração',
      price: 'R$ 89,90',
      image: '🐕',
      description: 'Ração super premium para cães adultos',
    },
    {
      name: 'Brinquedo Mordedor',
      category: 'Brinquedos',
      price: 'R$ 24,90',
      image: '🎾',
      description: 'Brinquedo resistente para cães',
    },
    {
      name: 'Coleira Ajustável',
      category: 'Acessórios',
      price: 'R$ 35,90',
      image: '🦴',
      description: 'Coleira confortável e resistente',
    },
    {
      name: 'Shampoo Pet',
      category: 'Higiene',
      price: 'R$ 18,90',
      image: '🧴',
      description: 'Shampoo para todos os tipos de pelo',
    },
    {
      name: 'Ração Gatos Filhotes',
      category: 'Ração',
      price: 'R$ 65,90',
      image: '🐱',
      description: 'Ração específica para gatos filhotes',
    },
    {
      name: 'Arranhador para Gatos',
      category: 'Brinquedos',
      price: 'R$ 75,90',
      image: '🪵',
      description: 'Arranhador vertical para gatos',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Loja</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="bag" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#999" />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar produtos..."
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.categoryCard, { backgroundColor: category.color }]}
              activeOpacity={0.9}
            >
              <Ionicons name={category.icon as any} size={28} color="#ffffff" />
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products */}
        <Text style={styles.sectionTitle}>Produtos em Destaque</Text>
        <View style={styles.productsContainer}>
          {products.map((product, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.productCard}
              activeOpacity={0.9}
            >
              <View style={styles.productImage}>
                <Text style={styles.productEmoji}>{product.image}</Text>
              </View>
              
              <View style={styles.productInfo}>
                <Text style={styles.productCategory}>{product.category}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
              
              <TouchableOpacity style={styles.addToCartButton}>
                <Ionicons name="add" size={20} color="#ffffff" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Delivery Info */}
        <View style={styles.deliveryInfo}>
          <View style={styles.deliveryItem}>
            <Ionicons name="bicycle" size={24} color="#4CAF50" />
            <Text style={styles.deliveryText}>Entrega rápida</Text>
          </View>
          <View style={styles.deliveryItem}>
            <Ionicons name="card" size={24} color="#2196F3" />
            <Text style={styles.deliveryText}>Pagamento seguro</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2E7D8F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cartButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginBottom: 16,
    marginTop: 8,
  },
  categoriesScroll: {
    paddingLeft: 20,
    marginBottom: 32,
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 8,
  },
  productsContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  productCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  productEmoji: {
    fontSize: 24,
  },
  productInfo: {
    flex: 1,
  },
  productCategory: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  deliveryInfo: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  deliveryItem: {
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    fontWeight: '500',
  },
});