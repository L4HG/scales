import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'


export class SubCategories extends React.Component {

  render() {
    const { params } = this.props
    const subCategorylArray = [
      {
        key: 'Banana',
        value: '/img/bananas.jpg'
      },
      {
        key: 'Apple',
        value: '/img/apple.jpg'
      },
      {
        key: 'Orange',
        value: '/img/orange.jpg'
      },
      {
        key: 'Pineapple',
        value: '/img/pineapple.jpg'
      },
      {
        key: 'Lemon',
        value: '/img/lemon.jpg'
      },
      {
        key: 'Melon',
        value: '/img/melon.jpg'
      },
      {
        key: 'Watermelon',
        value: '/img/watermelon.jpg'
      },
      {
        key: 'Pear',
        value: '/img/pear.jpg'
      }
    ]
    return (
      <ProductsView
        productType={params.id}
        imgArray={subCategorylArray}
        headerType=''
        linkTo='products'
      />
    )
  }
}
SubCategories.propTypes = {

}

export default SubCategories