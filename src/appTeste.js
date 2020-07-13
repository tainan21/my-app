import React from './node_modules/react'
import { Breadcrumb } from './node_modules/semantic-ui-react'

const BreadcrumbExample = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExample
