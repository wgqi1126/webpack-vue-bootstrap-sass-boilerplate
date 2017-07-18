import Vue from 'vue'
import Home from '@src/views/Home'
import store from '@src/store'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<home></home>',
      store,
      components: {
        'home': Home
      }
    }).$mount()
    expect(vm.$el.querySelector('.page p').textContent)
      .to.equal('To get started, edit files in ./src and save.')
  })
})
