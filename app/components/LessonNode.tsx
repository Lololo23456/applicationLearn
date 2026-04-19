// LessonNode.tsx — nœud circulaire représentant une leçon sur l'écran Roads

import { TouchableOpacity, StyleSheet, Text} from "react-native";
import { Lessons } from '../data/lessons';
import { useRouter } from 'expo-router';

export function LessonNode({ lesson }: { lesson: Lessons }) {
    const router = useRouter();  // permet de naviguer vers une autre page

    // Couleur de fond selon l'état de la leçon
    const colors = {
        completed:  '#EAF3DE',   // vert clair  — leçon terminée
        available:  '#EEEDFE',   // violet clair — leçon disponible
        locked:     '#F1EFE8',   // gris         — leçon verrouillée
    };

    // Couleur de la bordure (plus intense que le fond pour le contraste)
    const borderColors = {
        completed: '#3B6D11',
        available: '#534AB7',
        locked:    '#B4B2A9',
    };

    const isLocked = lesson.status === 'locked';

    return (
      <TouchableOpacity
        style={[
            styles.node,
            {
              backgroundColor: colors[lesson.status],
              borderColor: borderColors[lesson.status],
              opacity: isLocked ? 0.4 : 1,
            }
        ]}
        onPress={() => !isLocked && router.push(lesson.route as any)}
        disabled={isLocked}
      >
        <Text>{lesson.title}</Text>
        <Text>{lesson.cards.length} cartes</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    node: {
      // Taille fixe — le borderRadius à 50 (= moitié de 100) donne un cercle parfait
      width: 100,
      height: 100,
      borderRadius: 50,

      // Centrer le texte à l'intérieur du cercle
      alignItems: 'center',
      justifyContent: 'center',

      // Centrer le nœud horizontalement + espace entre les nœuds
      alignSelf: 'center',
      marginVertical: 12,

      // Bordure classique + bordure basse plus épaisse = effet "bouton 3D"
      borderWidth: 1.5,
      borderBottomWidth: 10,

      // Ombre portée — Android
      elevation: 4,

      // Ombre portée — iOS (Android ignore ces propriétés)
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.12,
      shadowRadius: 6,
    }
});
