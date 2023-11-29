

import {
  createBrowserRouter
  ,createRoutesFromElements
  ,Route,
  RouterProvider
    } from 'react-router-dom'


import {SignUp} from './components/signup'
import {LogIn, loginAction} from './components/login'
import {Home} from './components/home'

import {UserMessages} from './components/userMessages'
import {JoinRooms} from './components/joinRoom'

import {CreateRooms,createRoomAction} from './components/createRoom'
import {Error} from './components/Error'


import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' errorElement={<Error />}>
      <Route index element={<SignUp />} />
      <Route path='login' element={<LogIn />} action={loginAction} />
      <Route path='home' element={<Home />}  />
      <Route path='home/:id' element={<UserMessages />}  />
      <Route path='joinRooms' element={<JoinRooms />}  />
      <Route path='createRooms' element={<CreateRooms />} action={createRoomAction} />
      <Route path='*' element={<Error />}  />
    </Route>
  )
)
function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
