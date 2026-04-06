import React from 'react'
import { atom } from 'recoil'

export const CountState = atom({
    key : 'themeState',
    default : 'light'
})
