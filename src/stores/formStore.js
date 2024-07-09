import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    inputKG: '',
    inputNarrow: '',
    inputSuger:'',
    inputPortable: '',
    inputGiftWide: '',
    inputGiftNarrow: '',
    inputlipBalm: '',
    inputHoneyLoquat: '',
    inputPollenGrains: '',
    inputPropolis: '',
    inputQueen: '',
    inputFruit: '',
    inputhHoneyVinegar:'',
  }),
  actions: {
    setInputKG(value) {
      this.inputKG = value
    },
    setInputNarrow(value) {
        this.inputNarrow = value
    },
    setInputSuger(value) {
        this.inputSuger = value
    },
    setInputPortable(value) {
        this.inputPortable = value
    },
    setInputGiftWide(value) {
      this.inputGiftWide = value
    },
    setInputGiftNarrow(value) {
      this.inputGiftNarrow = value
    },
    setInputlipBalm(value) {
      this.inputlipBalm = value
    },
    setInputHoneyLoquat(value) {
      this.inputHoneyLoquat = value
    },
    setInputPollenGrains(value) {
      this.inputPollenGrains = value
    },
    setInputPropolis(value) {
      this.inputPropolis = value
    },
    setInputQueen(value) {
      this.inputQueen = value
    },
    setInputFruit(value) {
      this.iinputFruit = value
    },
    setInputhHoneyVinegar(value) {
      this.inputhHoneyVinegar = value
    }
  }
})
