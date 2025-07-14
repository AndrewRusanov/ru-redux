import { ContactDto } from 'src/types/dto/ContactDto'
import { DATA_CONTACT } from '../__data__'

interface InitialContactsState {
  contacts: ContactDto[]
  favorite: ContactDto['id'][]
}

export const INITIAL_CONTACTS: InitialContactsState = {
  contacts: DATA_CONTACT,
  favorite: DATA_CONTACT.map(contact => contact.id).slice(0, 4),
}

export function contactsReducer(state = INITIAL_CONTACTS, action) {
  return state
}
