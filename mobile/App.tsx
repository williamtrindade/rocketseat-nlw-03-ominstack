import React from 'react';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import Router from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   <Router></Router>
  );
}



//-29.6918979,-53.856333,15z