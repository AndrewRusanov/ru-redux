import { Formik } from 'formik'
import { FormikConfig } from 'formik/dist/types'
import { memo } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useAppSelector } from 'src/store/hooks'

export interface FilterFormValues {
  name: string
  groupId: string
}

interface FilterFormProps extends FormikConfig<Partial<FilterFormValues>> {}

export const FilterForm = memo<FilterFormProps>(
  ({ onSubmit, initialValues = {} }) => {
    const { groupContacts } = useAppSelector(state => state.groupContacts)

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} onChange={handleSubmit}>
            <Row xxl={4} className='g-4'>
              <Col>
                <InputGroup className='mb-3'>
                  <Form.Control
                    id={'name'}
                    name={'name'}
                    onChange={handleChange}
                    placeholder='name'
                    aria-label='name'
                  />
                </InputGroup>
              </Col>
              <Col>
                <Form.Select
                  id={'groupId'}
                  name={'groupId'}
                  aria-label='Поиск по группе'
                  onChange={handleChange}
                >
                  <option>Open this select menu</option>
                  {groupContacts.map(groupContact => (
                    <option value={groupContact.id} key={groupContact.id}>
                      {groupContact.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Button variant={'primary'} type={'submit'}>
                  Применить
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    )
  }
)
