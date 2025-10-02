import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  const menuOptions = [
    {
      title: 'SERVIÇOS',
      subtitle: 'Banho, tosa, veterinário e mais',
      icon: 'medical',
      color: '#4CAF50',
      route: '/services',
    },
    {
      title: 'LOJA',
      subtitle: 'Produtos, ração, brinquedos',
      icon: 'storefront',
      color: '#2196F3',
      route: '/shop',
    },
    {
      title: 'CONSULTAS',
      subtitle: 'Agende sua consulta veterinária',
      icon: 'calendar',
      color: '#FF9800',
      route: '/appointments',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logoSection}>
            <Ionicons name="paw" size={32} color="#ffffff" />
            <Text style={styles.appTitle}>PetCare</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Olá! O que você precisa hoje?</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          {menuOptions.map((option, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.menuCard, { backgroundColor: option.color }]}
              onPress={() => router.push(option.route)}
              activeOpacity={0.9}
            >
              <View style={styles.cardIcon}>
                <Ionicons name={option.icon as any} size={48} color="#ffffff" />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{option.title}</Text>
                <Text style={styles.cardSubtitle}>{option.subtitle}</Text>
              </View>
              <View style={styles.cardArrow}>
                <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.8)" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Ionicons name="time" size={24} color="#4CAF50" />
            <Text style={styles.infoTitle}>Horário de Funcionamento</Text>
            <Text style={styles.infoText}>Seg - Sex: 8h às 18h</Text>
            <Text style={styles.infoText}>Sáb: 8h às 16h</Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons name="location" size={24} color="#2196F3" />
            <Text style={styles.infoTitle}>Localização</Text>
            <Text style={styles.infoText}>Rua dos Pets, 123</Text>
            <Text style={styles.infoText}>Centro - Cidade</Text>
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
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
  profileButton: {
    padding: 4,
  },
  welcomeText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  menuContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardIcon: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  cardArrow: {
    marginLeft: 8,
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});