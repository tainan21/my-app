import React, { Component } from 'react'
import { Menu, Segment, Image, Icon } from 'semantic-ui-react'
export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="menuBG">
      <Segment className="menuHeader">
        <Menu pointing secondary  className="">
          <Menu.Item
            name='Inicio'
            className="menuHeaderItem"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}            
          />
          <Menu.Item
            name='Oportunidades'
            className="menuHeaderItem"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}            
          />
          <Menu.Item
            name='Galeria'
            className="menuHeaderItem"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}            
          />
          <Menu.Item
            name='Faq'
            className="menuHeaderItem"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}            
          />
          <Menu.Item
            name='Contato'
            className="menuHeaderItem"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}            
          />
        </Menu>
      </Segment>
      <div className="menuBGItems">
        <Image></Image> 
        <div className="menuBGText">Logo </div>
        {/* APAGA SAPORRA DPS MINEIRO */}
        <div className="menuBGText">
          Slogan
        </div>
        <div className="menuBGButton">
        <Icon.Group size='big'>
          <Icon name='whatsapp' />
        </Icon.Group>
        Vamos conversar?
        </div>
      </div>
      </div>
    )
  }
}
