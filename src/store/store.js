import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
         state: {
           settings: {
             isPhotoAllowed: true,
             isNameAllowed: true,
             isMobileNumberAllowed: true,
           },
           name: "",
           phoneNumber: "",
           cityName: "",
           stateName: "",
         },
         mutations: {
           update(state, settings) {
             state.settings.isPhotoAllowed = settings.isPhotoAllowed;
             state.settings.isNameAllowed = settings.isNameAllowed;
             state.settings.isMobileNumberAllowed =
               settings.isMobileNumberAllowed;
           },
           setName(state, name) {
             state.name = name;
           },
           setPhoneNumber(state, phoneNumber) {
             state.phoneNumber = phoneNumber;
           },
           setCityName(state, city) {
             state.cityName = city;
           },
           setStateName(state, stateName) {
             state.stateName = stateName;
           },
         },
         getters: {
           settings: (state) => state.settings,
           name: (state) => state.name,
           phoneNumber: (state) => state.phoneNumber,
           cityName: (state) => state.cityName,
           stateName: (state) => state.stateName,
         },
       });