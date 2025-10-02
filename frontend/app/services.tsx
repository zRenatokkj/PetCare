import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function ServicesScreen() {
  const router = useRouter();

  const services = [
    {
      title: 'Banho e Tosa',
      description: 'Banho completo, tosa higiênica e estética',
      price: 'A partir de R$ 50',
      icon: 'water',
      color: '#2196F3',
    },
    {
      title: 'Consulta Veterinária',
      description: 'Consultas de rotina e emergenciais',
      price: 'A partir de R$ 80',
      icon: 'medical',
      color: '#4CAF50',
    },
    {
      title: 'Vacinação',
      description: 'Vacinas obrigatórias e opcionais',
      price: 'A partir de R$ 60',
      icon: 'fitness',
      color: '#FF9800',
    },
    {
      title: 'Adestramento',
      description: 'Treinamento comportamental personalizado',
      price: 'A partir de R$ 120',
      icon: 'school',
      color: '#9C27B0',
    },
    {
      title: 'Hotel para Pets',
      description: 'Hospedagem com todo conforto e carinho',
      price: 'A partir de R$ 80/dia',
      icon: 'home',
      color: '#F44336',
    },
    {
      title: 'Exames Laboratoriais',
      description: 'Exames de sangue, urina e fezes',
      price: 'A partir de R$ 90',
      icon: 'flask',
      color: '#607D8B',
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
        <Text style={styles.headerTitle}>Serviços</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Nossos Serviços</Text>
        <Text style={styles.sectionSubtitle}>
          Oferecemos os melhores cuidados para o seu pet
        </Text>

        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.serviceCard}
              activeOpacity={0.9}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <Ionicons name={service.icon as any} size={32} color="#ffffff" />
              </View>
              
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
              
              <View style={styles.serviceArrow}>
                <Ionicons name="chevron-forward" size={20} color="#999" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Dúvidas sobre nossos serviços?</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="call" size={20} color="#ffffff" />
            <Text style={styles.contactButtonText}>Entre em contato</Text>
          </TouchableOpacity>
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
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    lineHeight: 22,
  },
  servicesContainer: {
    marginBottom: 32,
  },
  serviceCard: {
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
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4CAF50',
  },
  serviceArrow: {
    marginLeft: 8,
  },
  contactSection: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  contactButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
});