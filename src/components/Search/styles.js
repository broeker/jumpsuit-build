import styled, { css } from "styled-components"
import { Search } from "styled-icons/fa-solid/Search"

export const theme = {



  blue: `#1976d2`,
  darkBlue: `#002b4d`,
  lightBlue: `#279AF1`,

  green: `#6e9f23`,
  darkGreen: `#104F55`,
  lightGreen: `#00d69b`,

  yellow: `#f9ff00`,
  darkYellow: `#d0d500`,
  lightYellow: `#fbff6c`,

  orange: `#efbf00`,
  darkOrange: `#ff9100`,
  lightOrange: `#ffbe41`,

  gray: `#464849`,
  darkGray: `#282828`,
  lightGray: `#ebebeb`,
  veryLightGray: `#f7f7f7`,

  white: `white`,
  black: `black`,

  maxWidth: `40em`,

  smallBorder: `0.1em`,
  mediumBorder: `0.15em`,
  largeBorder: `0.2em`,

  smallBorderRadius: `0.2em`,
  mediumBorderRadius: `0.5em`,
  largeBorderRadius: `1em`,

  shortTrans: `0.3s`,
  mediumTrans: `0.6s`,
  longTrans: `1s`,
}


export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  font-family: Roboto;
  font-size: .8em;
`

export const SearchIcon = styled(Search)`
  width: 1.4em;
  pointer-events: none;
  margin-left: 2em;
  `

const focussed = css`
  background: white;
  color: ${theme.gray};
  cursor: text;
  width: 16em;
  + ${SearchIcon} {
    color: ${theme.lightGray};
    margin: 0.3em;
    margin-right: -.1em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  + ${SearchIcon} {
    color: ${theme.white};
  }
  &:hover + ${SearchIcon} {
      color: ${theme.blue};
  }
  ${props => props.focussed && focussed}
  margin-left: ${props => (props.focussed ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focussed ? `2.2em` : `1em`)};
  ::placeholder {
    color: ${theme.gray};
  }


`

const expand = css`
  background: ${theme.veryLightGray};
  color: ${theme.black};
  width: 6em;
  + ${SearchIcon} {
    margin: .5em;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  padding: .6em;
  font-size: 1em;
  background: transparent;
  transition: ${theme.shortTrans};
  border-radius: ${theme.smallBorderRadius};
  ${props => (props.collapse ? collapse : expand)};
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const list = css`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: calc(4em + 40vw);
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: ${theme.white};
  border-radius: ${theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${theme.lightGray};
  }
`

const grid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;
    li {
      padding: 0.3em 0.5em;
      background: ray};
      border-radius: ${theme.smallBorderRadius};
    }
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  background: ${theme.blue};
  ${props => (props.hitsAsGrid ? grid : list)};
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${theme.lightBlue};
    background: ${theme.lightGray};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: ${theme.white};
      background: ${theme.blue};
      padding: 0.1em 0.4em;
      border-radius: ${theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
  a {
    color: ${theme.blue};
  }
`

export const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`