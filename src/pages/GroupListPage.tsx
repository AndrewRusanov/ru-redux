import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useAppSelector } from 'src/store/hooks'

export const GroupListPage = memo(() => {
  const { groupContacts } = useAppSelector(state => state.groupContacts)

  return (
    <Row xxl={4}>
      {groupContacts.map(groupContact => (
        <Col key={groupContact.id}>
          <GroupContactsCard groupContacts={groupContact} withLink />
        </Col>
      ))}
    </Row>
  )
})
