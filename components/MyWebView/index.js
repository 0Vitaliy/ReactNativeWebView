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

    const setUrlStorage = async (value) => {
        try {
            await AsyncStorage.setItem('url', value)
        } catch (e) {
            console.log(e)
        }
    }

    const getUrlStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('url')

            setUrlValue(value)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUrlStorage()
    }, [])

    const navigationStateChange = (navState) => {
        setUrlStorage(navState.url)
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
