import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { useAppSelector } from 'src/store/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactListPage = memo(() => {
  const { contactsState } = useAppSelector(state => state.contacts)
  const { groupContactsState } = useAppSelector(state => state.groupContacts)
  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contactsState)

  useEffect(() => {
    setFilteredContacts(contactsState)
  }, [contactsState])

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contactsState

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(({ name }) =>
        name.toLowerCase().includes(fvName)
      )
    }

    if (fv.groupId) {
      const groupContacts = groupContactsState.find(
        ({ id }) => id === fv.groupId
      )

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id)
        )
      }
    }

    setFilteredContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className='mb-3'>
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className='g-4'>
          {filteredContacts.map(contact => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
