import styled from 'styled-components'

export const Container = styled.main`
  padding-top: 2rem;
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
  display: flex;
  justify-content: center;

  font-size: 2rem;
  font-weight: bold;
`

export const Image = styled.img`
  height: 10rem;
  width: 10rem;

  margin: 2rem 0;

  box-shadow: .5px 1px .3rem #fff;
  border-radius: 50%;
`

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 2rem;
`

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 2rem;
`

export const LinksContainer = styled.div`
  margin-top: 1.6rem;

  width: 80%;
  max-width: 500px;

  transform: translate(0%);
`

export const TitleLink = styled.div`
  margin-bottom: 3rem;

  font-size: 2rem;
  font-weight: bold;
`

export const Link = styled.a`
  & + & {
    margin-top: 1rem;
  }

  position: relative;
  width: 100%;

  padding: 0.8rem;

  display: block;

  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 2px;

  color: #ecf1f8;
  /* background: none; */

  border: 1px solid #338ac4;
  /* border: 1px solid #ff7675; */
  /* border-radius: .2rem; */

  overflow: hidden;
  cursor: pointer;
  transition: all 1s ease;


  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform: translate(-50%, -50%) rotate(45deg); */
    z-index: -1;
    transition: all .6s ease;
    /* transition: all .8s ease; */

    background: #338ac4;
    /* background: #ff7675; */

    width: 100%;
    height: 0;
    opacity: 0;

  }
  :hover::before {
    height: 120%;
    /* height: 820%; */
    opacity: 1;

    @media screen and (max-width: 600px) {
      height: 600%;
    }  }
`
