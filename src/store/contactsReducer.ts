import { ContactDto } from 'src/types/dto/ContactDto'
import {
  ContactsActions,
  GET_CONTACTS,
  SET_CONTACTS,
  SET_FAVORIT_CONTACTS,
} from './contactsActions'

interface InitialContactsState {
  contactsState: ContactDto[]
  favoriteState: ContactDto['id'][]
}

export const INITIAL_CONTACTS: InitialContactsState = {
  contactsState: [],
  favoriteState: [],
}

export function contactsReducer(
  state = INITIAL_CONTACTS,
  action: ContactsActions
) {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contactsState: action.payload.contacts }
    case GET_CONTACTS:
      return { ...state, contactsState: action.payload.contacts }
    case SET_FAVORIT_CONTACTS:
      return { ...state, favoriteState: action.payload.favoritID }

    default:
      break
  }

  return state
}
