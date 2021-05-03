import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    // base colors
    primary: '#1C7C99',

    white: '#FFF',
    black: '#000'
}

export const SIZES = {
    // global sizes
    base: 8,
    font: (size = 14) => size,
    radius: (size = 30) => size,
    space: (size = 16) => size,

    // dimentsions
    width,
    height
}

export const FONTS = {

}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme