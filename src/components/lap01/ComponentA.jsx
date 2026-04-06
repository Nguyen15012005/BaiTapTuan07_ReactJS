import React from 'react'
import { useRecoilState } from 'recoil'
import { CountState } from '../../recoil/CountState'

const ComponentA = () => {
    const count= useRecoilState(CountState)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default ComponentA