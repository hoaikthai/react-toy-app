import { Link } from "react-router-dom"
import styled from "styled-components"

export const Home = () => {
  return (
    <Root>
      <Link to="/react-toy-app/heavy-table">Heavy table</Link>
    </Root>
  )
}

const Root = styled.div`
  padding: 32px;
`
