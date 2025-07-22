import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  contactsMiddleware,
  contactsReducerPath,
  contactsReducer as newContactsReducer,
} from './contacts'
import { ContactsActions } from './contactsActions'
import { contactsReducer } from './contactsReducer'
import { GroupContactsActions } from './groupContactsActions'
import { groupContactsReducer } from './groupContactsReducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  [contactsReducerPath]: newContactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([contactsMiddleware])
  },
})

export type RootState = ReturnType<typeof rootReducer>

export type ProjectActions = ContactsActions | GroupContactsActions
