// UserProfileScreen.js
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const userData = {
    name: 'Ngô Minh Luân',
    studentId: '20110343',
    hobbies: 'Ngồi cafe chạy deadline & chill, xem phim, dạo phố,…',
    skills: 'Cầu lông, viết lách, thuyết trình.',
    contactInfo: {
      phoneNumber: '0912783733',
      facebook: 'https://web.facebook.com/profile.php?id=100005631678231',
    },
  };

  useEffect(() => {
    setTimeout(() => navigation.navigate('HOME' as never), 10000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên: {userData.name}</Text>
      <Text style={styles.label}>MSSV: {userData.studentId}</Text>
      <Text style={styles.label}>Sở thích: {userData.hobbies}</Text>
      <Text style={styles.label}>Sở trường: {userData.skills}</Text>
      <Text style={styles.label}>Thông tin liên lạc:</Text>
      <Text style={styles.info}>SĐT: {userData.contactInfo.phoneNumber}</Text>
      <TouchableOpacity onPress={() => {}} style={{}}>
        <Text style={styles.info}>FB: {userData.contactInfo.facebook}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
  link: {
    color: 'blue',
  },
});

export default UserProfileScreen;
