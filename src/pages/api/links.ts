// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import credentials from '../../credentials/google-sheets-api.json'

interface link {
  title: string
  link: string
}

type Data = {
  data: Array<link>
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const doc = new GoogleSpreadsheet( '1EdMDQrvUtWqTtan9aUUVcFymYxNSiHe1iPAmbR9hrIc' )

  await doc.useServiceAccountAuth( {
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  } )

  await doc.loadInfo() // loads document properties and worksheets
  const sheet = doc.sheetsByIndex[ 0 ]
  const rows = await sheet.getRows()

  const links = rows.map( item => ( {
    title: item.Title,
    link: item.Links
  } ) )

  res.status( 200 ).json( {
    data: links
  } )
}
