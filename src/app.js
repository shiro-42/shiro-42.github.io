import Home from './pages/home.js'
import Footer from './components/footer.js'

export default {
  template: `
    <v-app>
      <Home />
      <Footer />
    </v-app>
  `,
  components: { Home, Footer }
}
