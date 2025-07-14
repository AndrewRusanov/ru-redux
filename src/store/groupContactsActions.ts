import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const SET_GROUP_CONTACTS = 'SET_GROUP_CONTACTS'

interface SetGroupContacts {
  type: typeof SET_GROUP_CONTACTS
  payload: {
    groupContacts: GroupContactsDto[]
  }
}

export function setContacts(newContacts: GroupContactsDto[]): SetGroupContacts {
  return { type: SET_GROUP_CONTACTS, payload: { groupContacts: newContacts } }
}

export type GroupContactsActions = SetGroupContacts
