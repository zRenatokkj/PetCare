import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function AppointmentsScreen() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const services = [
    'Consulta Veterinária',
    'Vacinação',
    'Exames',
    'Cirurgia',
    'Check-up',
    'Emergência',
  ];

  const availableDates = [
    '2025-01-20',
    '2025-01-21',
    '2025-01-22',
    '2025-01-23',
    '2025-01-24',
  ];

  const availableTimes = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const handleSchedule = () => {
    if (!selectedService || !selectedDate || !selectedTime || !petName || !ownerName || !phone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert(
      'Consulta Agendada!',
      `Consulta de ${selectedService} agendada para ${selectedDate} às ${selectedTime}.\n\nEntraremos em contato em breve para confirmar.`,
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  };

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
        <Text style={styles.headerTitle}>Consultas</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Agendar Consulta</Text>
        <Text style={styles.sectionSubtitle}>
          Preencha os dados abaixo para agendar uma consulta veterinária
        </Text>

        {/* Service Selection */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Tipo de Serviço *</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsScroll}>
            {services.map((service, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.optionButton,
                  selectedService === service && styles.optionButtonSelected
                ]}
                onPress={() => setSelectedService(service)}
              >
                <Text style={[
                  styles.optionText,
                  selectedService === service && styles.optionTextSelected
                ]}>
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Date Selection */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Data Disponível *</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsScroll}>
            {availableDates.map((date, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.dateButton,
                  selectedDate === date && styles.optionButtonSelected
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text style={[
                  styles.optionText,
                  selectedDate === date && styles.optionTextSelected
                ]}>
                  {new Date(date).toLocaleDateString('pt-BR', { 
                    day: '2-digit', 
                    month: '2-digit' 
                  })}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Time Selection */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Horário Disponível *</Text>
          <View style={styles.timeGrid}>
            {availableTimes.map((time, index) => (
              <TouchableOpacity 
                key={index}
                style={[
                  styles.timeButton,
                  selectedTime === time && styles.optionButtonSelected
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  styles.optionText,
                  selectedTime === time && styles.optionTextSelected
                ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Nome do Pet *</Text>
          <TextInput
            style={styles.textInput}
            value={petName}
            onChangeText={setPetName}
            placeholder="Digite o nome do seu pet"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Seu Nome *</Text>
          <TextInput
            style={styles.textInput}
            value={ownerName}
            onChangeText={setOwnerName}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Telefone *</Text>
          <TextInput
            style={styles.textInput}
            value={phone}
            onChangeText={setPhone}
            placeholder="(11) 99999-9999"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.formLabel}>Observações</Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            value={notes}
            onChangeText={setNotes}
            placeholder="Descreva sintomas ou informações importantes..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Schedule Button */}
        <TouchableOpacity style={styles.scheduleButton} onPress={handleSchedule}>
          <Ionicons name="calendar" size={20} color="#ffffff" />
          <Text style={styles.scheduleButtonText}>Agendar Consulta</Text>
        </TouchableOpacity>

        {/* Emergency Contact */}
        <View style={styles.emergencySection}>
          <View style={styles.emergencyCard}>
            <Ionicons name="warning" size={32} color="#F44336" />
            <Text style={styles.emergencyTitle}>Emergência?</Text>
            <Text style={styles.emergencyText}>
              Para casos urgentes, entre em contato imediatamente:
            </Text>
            <TouchableOpacity style={styles.emergencyButton}>
              <Ionicons name="call" size={20} color="#ffffff" />
              <Text style={styles.emergencyButtonText}>(11) 9999-9999</Text>
            </TouchableOpacity>
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
  formSection: {
    marginBottom: 24,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  optionsScroll: {
    paddingVertical: 4,
  },
  optionButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  optionButtonSelected: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  dateButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minWidth: 60,
    alignItems: 'center',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: '22%',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  optionTextSelected: {
    color: '#ffffff',
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  scheduleButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  scheduleButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
  emergencySection: {
    marginBottom: 32,
  },
  emergencyCard: {
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
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: '#F44336',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  emergencyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 8,
  },
});