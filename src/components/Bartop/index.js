import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Bartop = () => (
  <div className="barTop">
      <Header as='h2'>
        <Icon.Group size='' className="IconPatter">
          <Icon name='instagram' className="iconBarTop" />
          <Icon corner name='add'  className="iconBarTop" />
        </Icon.Group>
        <Icon.Group size='' className="IconPatter">
          <Icon name='facebook square'  className="iconBarTop" />
          <Icon corner name='add'  className="iconBarTop" />
        </Icon.Group>
        <Icon.Group size='' className="IconPatter">
          <Icon name='whatsapp'  className="iconBarTop" />
          <Icon corner name='add'  className="iconBarTop" />
        </Icon.Group>
      </Header>
  </div>
)
export default Bartop
