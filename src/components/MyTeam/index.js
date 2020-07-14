import React from 'react'
import { Grid, Image, Icon, Container } from 'semantic-ui-react'

const GridExampleDividedNumber = () => (
<div className="boxMYT">
    <Container Text>  
    <div className="boxMYTTitle">
        Quer fazer parte do nosso time?
    </div>
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <div className="boxMYTWapper">
            <div className="boxMYTItem">
                <Icon name="user" className="boxMYTIcon"></Icon>
            </div>
            <div className="boxMYTTextName">
                Nome
            </div>
            <div className="boxMYTText">
                lorem
            </div>
        </div>
      </Grid.Column>
      <Grid.Column>
           <div className="teamBox">
            <Icon name="user" className="aboutIcon"></Icon>
        </div>
      </Grid.Column>
      <Grid.Column>
           <div className="teamBox">
            <Icon name="user" className="aboutIcon"></Icon>
        </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
           <div className="teamBox">
            <Icon name="user" className="aboutIcon"></Icon>
        </div>
      </Grid.Column>
      <Grid.Column>
           <div className="teamBox">
            <Icon name="user" className="aboutIcon"></Icon>
        </div>
      </Grid.Column>
      <Grid.Column>
           <div className="teamBox">
            <Icon name="user" className="aboutIcon"></Icon>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  </div>
)

export default GridExampleDividedNumber