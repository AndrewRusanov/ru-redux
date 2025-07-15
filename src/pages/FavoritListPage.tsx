import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { setContacts } from 'src/store/contactsActions'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'

export const FavoritListPage = memo(() => {
  const { contactsState, favoriteState } = useAppSelector(
    state => state.contacts
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getNewContacts = () =>
      contactsState.filter(({ id }) => favoriteState.includes(id))
    dispatch(setContacts(getNewContacts()))
  }, [contactsState, favoriteState, dispatch])

  console.log('####FavoritListPage:', contactsState)

  return (
    <Row xxl={4} className='g-4'>
      {contactsState.map(contact => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
