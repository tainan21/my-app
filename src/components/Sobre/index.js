import React from 'react'
import { Grid, Container, Icon, Image } from 'semantic-ui-react'

const About = () => (
  <div className="about">
      <Container Text>
      <div className="aboutTitle" textCenter> Sobre Nós</div>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} className="aboutGridCenter">
        <div className="aboutTitleText">
            Missão
          </div>
          <div className="aboutText">
            Oferecer aos associados maior rentabilidade e novas oportunidades de negócio.
          </div>
        </Grid.Column>
        <Grid.Column width={8} className="aboutGridCenter">
        <div className="aboutButton">
            <Icon name="rocket" className="aboutIcon"></Icon>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} className="aboutGridCenter">
          <div className="aboutButton">
            <Icon name="eye" className="aboutIcon"></Icon>
          </div>
        </Grid.Column>
        <Grid.Column width={8} className="aboutGridCenter">
        <div className="aboutTitleText">
            Visão
          </div>
          <div className="aboutText">
            Ser líder do mercado e referência, no segmento de construção civil;
          </div>
        </Grid.Column>
        
      </Grid.Row>
    </Grid>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} className="aboutGridCenter">
        <div className="aboutTitleText">
            Valores
          </div>
          <div className="aboutText">
            Meritocracia;<br></br>
            Responsabilidade;<br></br>
            Honestidade;<br></br>
            Paixão;<br></br>
          </div>
        </Grid.Column>
        <Grid.Column width={8} className="aboutGridCenter">
          <div className="aboutButton">
            <Icon name="list" className="aboutIcon"></Icon>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  </div>
)
export default About
