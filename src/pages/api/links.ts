// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

interface link {
  title: string
  link: string
}

type Data = {
  links: Array<link> | any
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const doc = new GoogleSpreadsheet( '1EdMDQrvUtWqTtan9aUUVcFymYxNSiHe1iPAmbR9hrIc' )

    await doc.useServiceAccountAuth( {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL as string,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
    } )

    await doc.loadInfo() // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[ 0 ]
    const rows = await sheet.getRows()

    const links = rows.map( item => ( {
      title: item.Title,
      link: item.Links
    } ) )

    res.status( 200 ).json( {
      links
    } )
  } catch ( err ) {
    res.status( 400 ).json( {
      links: err
    } )
  }
}
