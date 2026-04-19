// _layout.tsx (racine) — configuration du navigateur principal de l'app
// Stack = navigation en pile : chaque écran s'empile sur le précédent
// headerShown: false → pas de barre de titre native (on gère notre propre UI)

import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
