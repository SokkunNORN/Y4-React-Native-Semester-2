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
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // dimentsions
    width,
    height
}

export const FONTS = {

}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme