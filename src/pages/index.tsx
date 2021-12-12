import { useEffect, useState } from 'react'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import { ApiGithub } from '../services/api'

import * as S from '../styles/homeStyles'

export interface githubInfos {
  avatar_url?: string
  name?: string
  bio?: string
}

interface link {
  title: string
  link: string
}

export interface IUser {
  githubInfos?: githubInfos
  googleSheetsLinks?: [link]
}

export default function Home ( { githubInfos, googleSheetsLinks }: IUser ) {
  const [ userGithubInfos, setUserGithubInfos ] = useState<githubInfos>()
  const [ socialMediaLinks, setSocialMediaLinks ] = useState<[link]>()

  useEffect( () => {
    setUserGithubInfos( githubInfos )
    setSocialMediaLinks( googleSheetsLinks )
  }, [ githubInfos, googleSheetsLinks ] )

  return (
    <S.Container>
      {/* <S.Title>Gerenciador de links</S.Title> */}
      <S.UserInfos>
        <S.Image src={userGithubInfos?.avatar_url} />
        <S.Title>{userGithubInfos?.name}</S.Title>
        <S.Subtitle>{userGithubInfos?.bio}</S.Subtitle>
      </S.UserInfos>

      <S.LinksContainer>
        {socialMediaLinks?.map( item => (
          <S.Link
            href={item.link}
            key={item.title}
            target="_blank"
          >
            {item.title}
          </S.Link>
        ) )
        }
      </S.LinksContainer>
    </S.Container>
  )
}

export const getServerSideProps = async () => {
  const responseUserGithub = await ApiGithub.get( '' )
  const githubInfos = responseUserGithub.data

  async function getLinksGoogleSheetsApi () {
    const doc = new GoogleSpreadsheet( process.env.NEXT_PUBLIC_SHEETS_ID )

    await doc.useServiceAccountAuth( {
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL as string,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
    } )

    await doc.loadInfo() // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[ 0 ]
    const rows = await sheet.getRows()

    const googleSheetsLinks = rows.map( item => ( {
      title: item.Title,
      link: item.Links
    } ) )

    return googleSheetsLinks
  }

  const googleSheetsLinks = await getLinksGoogleSheetsApi()

  return {
    props: {
      githubInfos,
      googleSheetsLinks
    },
  }
}
