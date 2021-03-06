import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function EntStripTwoImg() {
    const data = useStaticQuery(
        graphql`
            query {
                striptwo: file(
                    relativePath: { eq: "ent-strip-2-services.png" }
                ) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    return <Img fluid={data.striptwo.childImageSharp.fluid} />
}
