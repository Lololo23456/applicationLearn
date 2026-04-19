// (tabs)/_layout.tsx — configuration de la barre d'onglets en bas de l'écran
// Les deux onglets : Accueil (index.tsx) et Profil (profil.tsx)

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    // tabBarActiveTintColor : couleur de l'onglet sélectionné (violet de l'app)
    <Tabs screenOptions={{ tabBarActiveTintColor: '#634FCA' }}>

      {/* Onglet Accueil — affiche roads.tsx via index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* Onglet Profil — page vide pour l'instant */}
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
