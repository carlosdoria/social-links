import styled from 'styled-components'

export const Container = styled.main`
  width: 80%;

  margin: 0 auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Loading = styled.div`
  font-size: 2rem;
`

export const Title = styled.h1`
  margin-top: 5rem;

  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
`

export const Image = styled.img`
  height: 10rem;
  width: 10rem;
  margin: 2rem 0;
  border-radius: 50%;
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

export const LinksContainer = styled.div`
  margin-top: 3rem;

  width: 80%;
  max-width: 500px;

  transform: translate(0%);
`

export const TitleLink = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

export const Link = styled.a`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: block;
  margin: 1.2rem auto;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #338ac4;
  border-radius: 0.6rem;
  color: #ecf1f8;
  background: none;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 0%;
    border-radius: 70% 70% 0 0;
    background: linear-gradient(#338ac4, #b8d2f7);
    transition: 1.2s;
  }
  :hover::before {
    height: 180%;
  }
`
