import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { ContactsActions } from './contactsActions'
import { contactsReducer } from './contactsReducer'
import { groupContactsReducer } from './groupContacts'
import { GroupContactsActions } from './groupContactsActions'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof rootReducer>

export type ProjectActions = ContactsActions | GroupContactsActions
