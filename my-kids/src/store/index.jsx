import create from 'zustand'

export const useButtonStore = create(set => ({
  buttonText: [],
  increaseButton: () =>
    set(state => ({ buttonText: [...state.buttonText, { name: 'Boton 4' }] })),
  removeAllButton: () => set({ buttonText: [] })
}))
