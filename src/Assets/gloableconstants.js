import { Dimensions } from 'react-native'

export const images={

    sampleimage:require('./images/sampleimg.png')
}

const Height = Dimensions.get("window").height
const Width = Dimensions.get("window").width
export const ratioX = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;

const base_unit = 14;

const unit = base_unit * ratioX;

export const winsize = Width
function em(value) {
    return unit * value;
    // return value * ratio;
}

export const fontSize = {
    extrasmallest: em(0.55),
    smallest: em(0.7),
    smaller: em(0.8),
    small: em(0.9),
    normal: em(1),
    medium: em(1.1),
    large: em(1.2),
    larger: em(1.3),
    largest: em(1.4), //titlefont is largest
    extralarge: em(1.6),
    extralarger: em(1.8),
    extralargest: em(2),
    superlargest: em(2.5)
}

console.log('h',Height,'w',Width);
