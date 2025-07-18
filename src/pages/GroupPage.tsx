import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { setContacts } from 'src/store/contactsActions'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const GroupPage = memo(() => {
  const { contactsState } = useAppSelector(state => state.contacts)
  const { groupContactsState } = useAppSelector(state => state.groupContacts)
  const dispatch = useAppDispatch()
  const { groupId } = useParams<{ groupId: string }>()

  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>()

  useEffect(() => {
    const findGroup = groupContactsState.find(({ id }) => id === groupId)
    const newContacts = () => {
      if (findGroup) {
        return contactsState.filter(({ id }) =>
          findGroup.contactIds.includes(id)
        )
      }
      return []
    }

    setGroupContacts(findGroup)
    dispatch(setContacts(newContacts()))
  }, [groupId])

  return (
    <Row className='g-4'>
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className='mx-auto'>
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className='g-4'>
              {contactsState.map(contact => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
