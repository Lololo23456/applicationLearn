// roads.tsx — écran principal du parcours d'apprentissage
// Affiche la liste des leçons sous forme de nœuds circulaires

import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { ALL_LESSONS } from './data/lessons';
import { LessonNode } from './components/LessonNode'


export default function Roads(){
    const lessons = ALL_LESSONS;

    return(
      // ScrollView permet de faire défiler si la liste est longue
      <ScrollView>
        {lessons.map((lesson) => (
          // LessonNode affiche un nœud coloré selon le statut de la leçon
          <LessonNode key={lesson.id} lesson={lesson} />
        ))}
      </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      paddingVertical: 24,
    },
  });
