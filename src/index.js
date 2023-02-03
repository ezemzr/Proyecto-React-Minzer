import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './db/firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} >
    <ChakraProvider>
            <App />
    </ChakraProvider>
  </FirebaseAppProvider>
);
