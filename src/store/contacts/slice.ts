import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'

const BASE_URL =
  'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/280/h/3f9021c6ea91fc0306ceb0e9c2f2e56c.json'

export const contactsSlice = createApi({
  //TODO: заменить название
  reducerPath: 'contactsSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getContacts: builder.query<ContactDto[], void>({
      query() {
        return {
          url: '/',
        }
      },
    }),
  }),
})
