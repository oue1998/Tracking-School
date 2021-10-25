import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#203E5F',
            secondary: '#001F42',
            accent: '#E3C438',
            error: '#b71c1c',
            press:'#EDEAE4',
            full:'#4BB33E',
            wait:'#909FAF'
          },
        },
      },
});
