import * as S from '../styles/homeStyles'

import Prismic from 'prismic-javascript'
import { Client } from '../../prismic-configuration'

import { ApiGithub } from '../services/api'
import { useEffect, useState } from 'react'

export interface githubInfos {
  avatar_url?: string
  name?: string
  bio?: string
}

export interface IGithubUser {
  githubInfos: githubInfos
}

export interface prismicInfos {
  primary: { name: string; link: { url: string } }
  slice_type: string
}

export interface IPrismicUser {
  prismicInfos: prismicInfos[]
}

export interface IUser {
  githubInfos?: githubInfos
  prismicInfos?: [prismicInfos]
  titlePage?: string
}

const Home = ( { githubInfos, prismicInfos, titlePage }: IUser ) => {
  const [ userGithubInfos, setUserGithubInfos ] = useState<githubInfos>()
  const [ userPrismicInfos, setUserPrismicInfos ] = useState<[prismicInfos]>()

  useEffect( () => {
    setUserGithubInfos( githubInfos )
    setUserPrismicInfos( prismicInfos )
  }, [ githubInfos, prismicInfos ] )

  return (
    <S.Container>
      <S.Title>{titlePage}</S.Title>
      <S.Image src={userGithubInfos?.avatar_url} />
      <S.Text>{userGithubInfos?.name}</S.Text>
      <S.Text>{userGithubInfos?.bio}</S.Text>

      <S.LinksContainer>
        {userPrismicInfos?.map( ( item, index: number ) => {
          if ( item.slice_type === 'secao1' ) {
            return (
              <S.TitleLink key={index}>{item.primary.name}</S.TitleLink>
            )
          } else {
            return (
              <S.Link
                href={item.primary.link.url}
                key={index}
                target="_black">
                {item.primary.name}
              </S.Link>
            )
          }
        } )}
      </S.LinksContainer>
    </S.Container>
  )
}

export default Home

export const getServerSideProps = async () => {
  const responseGithub = await ApiGithub.get( '' )
  const userGithubInfos = responseGithub.data
  // console.log(userGithubInfos);

  const responsePrismic = await Client.query(
    Prismic.Predicates.at( 'document.type', 'centrallinks' ),
  )
  const userPrismicInfos = responsePrismic.results[ 0 ].data.body
  const titlePage = responsePrismic.results[ 0 ].data.title_page
  console.log( userPrismicInfos )

  return {
    props: {
      githubInfos: userGithubInfos,
      prismicInfos: userPrismicInfos,
      titlePage: titlePage,
    },
  }
}
