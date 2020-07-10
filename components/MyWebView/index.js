import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';
import { url } from '../../utils/constants';


export const MyWebComponent = () => {

    const [urlValue, setUrlValue] = useState('');

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('url', value)
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('url')

            setUrlValue(value)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const navigationStateChange = (navState) => {
        storeData(navState.url)
    }

    return (
        <WebView
            source={{
                uri: urlValue || url
            }}
            onNavigationStateChange={navigationStateChange}
            onLoadStart={() => {
                console.log("LOAD START ");
            }}
        />
    );
};
