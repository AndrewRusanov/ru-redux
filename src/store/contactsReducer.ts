import { ContactDto } from 'src/types/dto/ContactDto'
import { DATA_CONTACT } from '../__data__'
import { ContactsActions, SET_CONTACTS } from './contactsActions'

interface InitialContactsState {
  contactsState: ContactDto[]
  favoriteState: ContactDto['id'][]
}

export const INITIAL_CONTACTS: InitialContactsState = {
  contactsState: DATA_CONTACT,
  favoriteState: DATA_CONTACT.map(contact => contact.id).slice(0, 4),
}

export function contactsReducer(
  state = INITIAL_CONTACTS,
  action: ContactsActions
) {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload.contacts }

    default:
      break
  }

  return state
}
