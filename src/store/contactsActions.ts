import { ContactDto } from 'src/types/dto/ContactDto'

export const SET_CONTACTS = 'SET_CONTACTS'

interface SetContacts {
  type: typeof SET_CONTACTS
  payload: {
    contacts: ContactDto[]
  }
}

export function setContacts(newContacts: ContactDto[]): SetContacts {
  return { type: SET_CONTACTS, payload: { contacts: newContacts } }
}

export type ContactsActions = SetContacts
