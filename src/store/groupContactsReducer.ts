import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import {
  GET_GROUP_CONTACTS,
  GroupContactsActions,
  SET_GROUP_CONTACTS,
} from './groupContactsActions'

interface InitialGroupContactsState {
  groupContactsState: GroupContactsDto[]
}

export const INITIAL_GROUP_CONTACTS: InitialGroupContactsState = {
  groupContactsState: [],
}

export function groupContactsReducer(
  state = INITIAL_GROUP_CONTACTS,
  action: GroupContactsActions
) {
  switch (action.type) {
    case SET_GROUP_CONTACTS:
      return { ...state, groupContactsState: action.payload.groupContacts }
    case GET_GROUP_CONTACTS:
      return { ...state, groupContactsState: action.payload.groupContacts }

    default:
      break
  }

  return state
}
