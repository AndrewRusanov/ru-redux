import { ThunkAction } from 'redux-thunk'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { RootState } from './store'

export const SET_GROUP_CONTACTS = 'SET_GROUP_CONTACTS'
export const GET_GROUP_CONTACTS = 'GET_GROUP_CONTACTS'

interface SetGroupContacts {
  type: typeof SET_GROUP_CONTACTS
  payload: {
    groupContacts: GroupContactsDto[]
  }
}

interface GetGroupContacts {
  type: typeof GET_GROUP_CONTACTS
  payload: {
    groupContacts: GroupContactsDto[]
  }
}

export function setGroupContacts(
  newGroupContacts: GroupContactsDto[]
): SetGroupContacts {
  console.log('####newGroupContacts:', newGroupContacts)
  return {
    type: SET_GROUP_CONTACTS,
    payload: { groupContacts: newGroupContacts },
  }
}

export function fetchGroupContacts(): ThunkAction<
  void,
  RootState,
  void,
  GroupContactsActions
> {
  return async dispatch => {
    const res = await fetch(
      'https://mocki.io/v1/70a173bd-26ae-4633-b561-a7c58ed8b6b4'
    )
    const data: GroupContactsDto[] = await res.json()

    if (data.length) {
      dispatch(setGroupContacts(data))
    }
  }
}

export type GroupContactsActions = SetGroupContacts | GetGroupContacts
