import { ThunkAction } from 'redux-thunk'
import { ContactDto } from 'src/types/dto/ContactDto'
import { RootState } from './store'

export const SET_CONTACTS = 'SET_CONTACTS'
export const GET_CONTACTS = 'GET_CONTACTS'
export const SET_FAVORIT_CONTACTS = 'SET_FAVORIT_CONTACTS'

interface SetContacts {
  type: typeof SET_CONTACTS
  payload: {
    contacts: ContactDto[]
  }
}

interface GetContacts {
  type: typeof GET_CONTACTS
  payload: {
    contacts: ContactDto[]
  }
}

interface SetFavoritContacts {
  type: typeof SET_FAVORIT_CONTACTS
  payload: {
    favoritID: string[]
  }
}

export function setContacts(newContacts: ContactDto[]): SetContacts {
  return { type: SET_CONTACTS, payload: { contacts: newContacts } }
}

export function setFavoritContacts(favoritID: string[]): SetFavoritContacts {
  return { type: SET_FAVORIT_CONTACTS, payload: { favoritID: favoritID } }
}

export function fetchContacts(): ThunkAction<
  void,
  RootState,
  void,
  ContactsActions
> {
  return async dispatch => {
    const res = await fetch(
      'https://mocki.io/v1/f09f6fd8-a323-4fbc-b9a7-f575f6b3e0cb'
    )
    const data: ContactDto[] = await res.json()

    if (data.length) {
      dispatch(setContacts(data))
      dispatch(setFavoritContacts(data.map(contact => contact.id).slice(0, 4)))
    }
  }
}

export type ContactsActions = SetContacts | GetContacts | SetFavoritContacts
