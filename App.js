import { SafeAreaView, Text, StyleSheet } from 'react-native'
import {Album} from './components/Album.js'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Albuns da Bando Oficina G3</Text>

      <Album 
      albumName={'Indiferença'}
      year={'(1996)'}
      musics={['1. Davi,\n', '2. Fé,\n', '3. Magia Alguma,\n', '4. Glória,\n', '5. Profecias']}
      />

      <Album 
      albumName={'Além do os olhos podem ver'}
      year={'(2004)'}
      musics={['1. Intro,\n', '2. Mais Alto,\n', '3. Reu ou Juiz,\n', '4. Meu Legado,\n', '5. Através da Porta']}
      />

      <Album 
      albumName={'Depois da guerra'}
      year={'(2008)'}
      musics={['1. D.AG,\n', '2. Meus Próprios Meios,\n', '3. Eu Sou,\n', '4. Meus Passos,\n', '5. Continuar']}
      />

    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: '700'
  }
})