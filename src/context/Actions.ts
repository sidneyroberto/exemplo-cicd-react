import { Dispatch } from 'react'
import { Word } from '../models/Word'
import { Action, ActionType } from './UserReducer'

export const setWords = (dispatch: Dispatch<Action>, words: Word[]) =>
  dispatch({
    payload: words,
    type: ActionType.SET_WORDS,
  })
