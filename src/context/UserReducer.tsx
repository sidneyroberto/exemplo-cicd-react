import { Word } from '../models/Word'

export enum ActionType {
  SET_WORDS = 'SET_WORDS',
}

export type Action = {
  type: ActionType
  payload: Word[]
}

export type State = {
  words: Word[]
}

const UserReducer = (state: State, action: Action): State => {
  const { payload, type } = action

  switch (type) {
    case ActionType.SET_WORDS:
      return {
        ...state,
        words: payload,
      }
    default:
      throw new Error()
  }
}

export default UserReducer
