import { useEffect } from 'react'
import { Stack } from 'expo-router'
import { initStore } from './data/progressStore'

export default function RootLayout() {
  useEffect(() => {
    initStore()
  }, [])

  return <Stack screenOptions={{ headerShown: false }} />
}
