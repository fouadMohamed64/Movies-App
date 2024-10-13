import React, { useContext } from 'react'
import { langContext } from '../../Context/langContext'
import { StringManeger } from '../../../StringManeger'




export default function ContactUs() {
  const {lang } = useContext(langContext)

  return (
    <div>{lang=='en'? StringManeger.contact.en: StringManeger.contact.ar }</div>

  )
}
