import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/store/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const FavoritListPage = memo(() => {
  const { contactsState, favoriteState } = useAppSelector(
    state => state.contacts
  )
  const [contacts, setContacts] = useState<ContactDto[]>([])

  useEffect(() => {
    setContacts(() =>
      contactsState.filter(({ id }) => favoriteState.includes(id))
    )
  }, [contactsState, favoriteState])

  return (
    <Row xxl={4} className='g-4'>
      {contacts.map(contact => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  )
})
