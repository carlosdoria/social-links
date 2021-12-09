import { useEffect, useState } from 'react'

import { ApiGithub, ApiGoogleSheets } from '../services/api'

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
      <S.Title>Gerenciador de links</S.Title>
      <S.Image src={userGithubInfos?.avatar_url} />
      <S.Text>{userGithubInfos?.name}</S.Text>
      <S.Text>{userGithubInfos?.bio}</S.Text>

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
  const responseGithub = await ApiGithub.get( '' )
  const githubInfos = responseGithub.data

  const responseApiGoogleSheets = await ApiGoogleSheets.get( '/links' )
  const googleSheetsLinks = responseApiGoogleSheets.data.links

  return {
    props: {
      githubInfos,
      googleSheetsLinks
    },
  }
}
