import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustonDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <Image
                    source={require('../img/foto.jpg')}
                    style={{ width: 80, height: 80, borderRadius: 100, borderColor: '#000', borderWidth: 1 }}
                />
                <View style={{ height: 80, justifyContent: 'flex-end' }}>
                    <Text style={{ color: '#000', marginBottom: 10, marginLeft: 12, fontSize: 16 }}>Menu de navegação</Text>
                </View>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        alignItems: 'flex-start',
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 20,
    },
});