import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <h1>HEADER</h1>
      <Outlet />
    </>
  )
}

export { Layout }
