export default {
  template: `
    <v-app>
      <v-content class="white">
        <div class="pull-top">
        </div>
        <div class="presentation">
          <v-layout row wrap>
            <v-flex xs2>
              <h1 class="small-title">Nori Beydon</h1>
            </v-flex>
            <v-flex xs10>
              <h4 class="emphasis">
                I'm a web developer from Paris. <br>
                I design the web of tomorrow.
              </h4>
              <a class="link">contact me</a>
            </v-flex>
          </v-layout>
        </div>
      </v-content>
      <v-footer class="white pa-3">
        <v-spacer></v-spacer>
        <div>&copy; 2015 – {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  `,
  data: () => ({ drawer: false })
}
