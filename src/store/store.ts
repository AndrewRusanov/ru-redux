import { combineReducers, createStore } from 'redux'
import { contactsReducer } from './contactsReducer'
import { groupContactsReducer } from './groupContacts'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
