import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { DATA_GROUP_CONTACT } from '../__data__'

interface InitialGroupContactsState {
  groupContacts: GroupContactsDto[]
}

export const INITIAL_GROUP_CONTACTS: InitialGroupContactsState = {
  groupContacts: DATA_GROUP_CONTACT,
}

export function groupContactsReducer(state = INITIAL_GROUP_CONTACTS, action) {
  return state
}
