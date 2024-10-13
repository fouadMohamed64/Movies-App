import {  useRouteError } from 'react-router-dom'

export default function LoaderErrors() {

    const error = useRouteError()

  return (
    <>
        Loader Error {error.message}
    </>
  )
}
