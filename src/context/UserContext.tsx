import { Dispatch, ReactNode, createContext, useReducer } from 'react'
import { Word } from '../models/Word'
import UserReducer, { Action } from './UserReducer'

type InitialStateType = {
  words: Word[]
}

const initialState: InitialStateType = {
  words: [],
}

type UserContextType = {
  state: InitialStateType
  dispatch: Dispatch<Action>
}

const UserContext = createContext<UserContextType>({
  dispatch: () => null,
  state: initialState,
})

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
