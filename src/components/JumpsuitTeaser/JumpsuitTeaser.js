import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from 'gatsby-image';


export default (props) => {
  const data = useStaticQuery(graphql`
    query JumpsuitTeaserQuery {
      imageOne: file(relativePath: { eq: "doit.png" }) {
        id
        childImageSharp {
            fluid(maxWidth: 1000) {
            src
            ...GatsbyImageSharpFluid
            }
         }
       }
    }
  `)

  return (
      <CardActionArea 
       style={{ textDecoration: 'none' }}
       classes={{
      }} 
       >
      <Link style={{ textDecoration: 'none'}} to='/'>
        <Card>
            <CardContent>
            <Img fluid={data.imageOne.childImageSharp.fluid} />
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
  )
}