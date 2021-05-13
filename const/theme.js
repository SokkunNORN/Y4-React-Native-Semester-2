import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    // base colors
    primary: '#1C7C99',
    secondary: '#F0F0F0',
    secondary1: '#808080',

    white: '#FFF',
    black: '#000'
}

export const SIZES = {
    // global sizes
    base: (times = 2) => times * 8,
    height: 44,
    radius: 8,
    font: (size = 14) => size,
    radius: (size = 30) => size,
    space: (size = 16) => size,

    // dimentsions
    width,
    height
}

export const FONTS = {

}