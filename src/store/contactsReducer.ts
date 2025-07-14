import { DATA_CONTACT } from '../__data__'

export const INITIAL_CONTACTS = {
  contacts: DATA_CONTACT,
  favorite: DATA_CONTACT.slice(0, 4),
}

export function contactsReducer(state = INITIAL_CONTACTS, action) {
  return state
}
