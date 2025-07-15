import { useEffect } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import {
  ContactListPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
  GroupPage,
} from 'src/pages'
import { fetchContacts } from 'src/store/contactsActions'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import './MainApp.scss'

export const MainApp = () => {
  const dispatch = useAppDispatch()
  const { contactsState } = useAppSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  console.log('####:', contactsState)

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path='contact'>
              <Route index element={<ContactListPage />} />
              <Route path=':contactId' element={<ContactPage />} />
            </Route>
            <Route path='groups'>
              <Route index element={<GroupListPage />} />
              <Route path=':groupId' element={<GroupPage />} />
            </Route>
            <Route path='favorit' element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
