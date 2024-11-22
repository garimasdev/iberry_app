import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';



const OutdoorOrderDetails = ({ route, navigation }) => {
    const { outdoorOrderId } = route.params;
    const [status, setStatus] = useState('ACTIVE');

    const handleStatusChange = (value) => {
        setStatus(value);
    };

    // Dynamic style based on the selected value
    const getSelectedTextStyle = () => {
        switch (status) {
        case "PROCESSING":
            return { color: '#FFA500', fontWeight: 'bold' };  // Orange for Processing
        case "COMPLETE":
            return { color: '#26a318', fontWeight: 'bold' };  // Green for Complete
        case "CANCEL":
            return { color: '#FF6347', fontWeight: 'bold' };  // Red for Cancel
        default:
            return { color: '#000', fontWeight: 'normal' };    // Default style
        }
    };


    // mock data
    const orderData = {
        outdoorOrderId: outdoorOrderId,
        outdoorOrderItems: [
            { name: 'Burger', quantity: 2, price: '$5.00' },
            { name: 'Fries', quantity: 1, price: '$2.50' },
            { name: 'Soda', quantity: 1, price: '$1.00' },
        ],
        instructions: 'No pickles on the burger.',
        status: 'PENDING',
        outdoorOrderTime: '2024-11-20 12:00 PM',
    };
  
    return (
    <SafeAreaView style={styles.container}>
        {/* header with hamburger icon */}
        <View style={styles.sidebarHeader}>
            <TouchableOpacity onPress={() => navigation.replace('OutdoorOrders')}>
                <FontAwesome name="arrow-left" size={30} color="#fff" padding="2" />
            </TouchableOpacity>
            <Text style={styles.sidebarHeaderTitle}>Outdoor Orders Details</Text>
        </View>

        <ScrollView style={styles.scrollView}>
            {/* Order Header */}
            <View style={styles.header}>
                <Text style={styles.outdoorOrderId}>Outdoor Order ID: {orderData.outdoorOrderId}</Text>
                <Text style={styles.outdoorOrderTime}>Order Time: {orderData.outdoorOrderTime}</Text>
            </View>
    
            {/* Order Items */}
            <View style={styles.outdoorOrderItemsContainer}>
                <Text style={styles.sectionTitle}>Order Items</Text>
                {orderData.outdoorOrderItems.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <Text style={styles.itemText}>{item.name} (x{item.quantity})</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                ))}
            </View>
    
            {/* Instructions */}
            <View style={styles.instructionsContainer}>
                <Text style={styles.sectionTitle}>User Instructions</Text>
                <Text style={styles.instructions}>{orderData.instructions}</Text>
            </View>
    
            <View style={styles.statusContainer}>
                <Text style={styles.orderText}  style={getSelectedTextStyle()}>
                    <Text style={styles.sectionTitle}>Current Status: </Text>{status}
                </Text>

                {/* Picker for selecting status */}
                <View style={styles.pickerContainer}>
                <Picker selectedValue={status} onValueChange={handleStatusChange} style={styles.picker}>
                    <Picker.Item label="PROCESSING" value="PROCESSING" /> 
                    <Picker.Item label="COMPLETE" value="COMPLETE" />    
                    <Picker.Item label="CANCEL" value="CANCEL" />  
                </Picker>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa', 
      padding: 16,
    },
    sidebarHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4154f1',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 8,
      elevation: 3, 
      marginBottom: 16,
    },
    sidebarHeaderTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    scrollView: {
      paddingBottom: 20,
    },
    header: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      marginBottom: 16,
    },
    outdoorOrderId: {
      fontSize: 18,
      fontWeight: '600',
      color: '#343a40', 
    },
    outdoorOrderTime: {
      fontSize: 14,
      color: '#6c757d', 
    },
    outdoorOrderItemsContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
      color: '#007bff', 
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomColor: '#e9ecef',
      borderBottomWidth: 1,
    },
    itemText: {
      fontSize: 16,
      color: '#495057', // Dark grey for item text
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#28a745', // Green for price
    },
    instructionsContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    instructions: {
      fontSize: 14,
      color: '#343a40', // Darker text for instructions
    },
    statusContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    orderText: {
      fontSize: 25,
      color: '#343a40',
      marginBottom: 10,
    },
    bold: {
      fontWeight: 'bold',
    },
    pickerContainer: {
      marginTop: 5,
    },
    label: {
      fontSize: 14,
      marginBottom: 5,
      color: '#495057',
    },
    picker: {
      height: 60,
      width: '100%',
      borderColor: '#ced4da',
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      fontSize: 12,
    },
  });


export default OutdoorOrderDetails;
