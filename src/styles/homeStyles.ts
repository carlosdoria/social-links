import styled from 'styled-components'
import { device } from './breakpoints'

export const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media screen and ${device.tabletM} {
    padding: 4rem 0 0;
  }
`

export const Loading = styled.div`
  font-size: 2rem;
`

export const UserInfos = styled.div`
  margin-bottom: 2rem;
`

export const Image = styled.img`
  height: 8rem;
  width: 8rem;

  margin: 0 auto 1rem;

  box-shadow: .3px 1px 5px #fff;
  border-radius: 50%;

  @media screen and ${device.desktopS} {
    height: 10rem;
    width: 10rem;
  }
`

export const Title = styled.h1`
  margin-bottom: .5rem;

  display: flex;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;

  @media screen and ${device.tabletM} {
    font-size: 2.4rem;
  }

  @media screen and ${device.desktopS} {
    font-size: 2.8rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;

  filter: brightness(.85);

  @media screen and ${device.desktopS} {
    font-size: 1.4rem;
  }
`

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`

export const LinksContainer = styled.div`
  width: 100%;
  max-width: 550px;

  transform: translate(0%);
`

export const Link = styled.a`
  & + & {
    margin-top: 1rem;
  }

  position: relative;

  width: 100%;
  padding: .8rem;

  display: block;

  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;

  color: #ecf1f8;
  /* background: none; */

  border: 1px solid #338ac4;
  /* border: 1px solid #ff7675; */
  border-radius: 2px;

  overflow: hidden;
  cursor: pointer;
  transition: all 1s ease;

  @media screen and ${device.desktopS} {
    font-size: 1.4rem;
    letter-spacing: 3px;
  }

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: translate(-50%, -50%) rotate(45deg); */
    z-index: -1;
    transition: all .8s ease;
    /* transition: all .8s ease; */

    background: #338ac4;
    /* background: #ff7675; */

    width: 100%;
    height: 0;
    opacity: 0;
  }

  :hover::before {
    height: 120%;
    opacity: 1;
  }
`
