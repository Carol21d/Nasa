import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils' 
import Menu from '../components/Menu.vue'

describe('Menu', ()  =>{
  it('display modal content when button is clicked', async ()=>{
     const wrapper = mount (Menu);

     const modalContent = wrapper.find('.modal-content');
   


     expect(modalContent.exists()).toBe(true);
     const modalToggleComet = wrapper.find('#modal-toggle-comet');
     await modalToggleComet.trigger('click');


   

  });
});


