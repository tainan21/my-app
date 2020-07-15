import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const Footer = () => (
    <div className="footer">
        <div>@dinoTech</div>
        <div>Logo</div>
        <div>
            <Icon.Group size='' className="IconPatter">
                <Icon name='instagram' className="Footer" />
            </Icon.Group>
            <Icon.Group size='' className="IconPatter">
                <Icon name='facebook square'  className="Footer" />
            </Icon.Group>
            <Icon.Group size='' className="IconPatter">
            <Icon name='whatsapp'  className="Footer" />
            </Icon.Group>
        </div>
    </div>
)
export default Footer
