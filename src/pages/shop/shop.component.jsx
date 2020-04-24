import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    // destructuring values from collections
    const {collections} = this.state;
    return (
      <div className='shop-page'>
          {
            // destructuring the 'title' and 'items' from SHOP_DATA in otherCollectionProps and passing it to CollectionPreview component to be filtered and mapped over in the CollectionPreview component
            collections.map(({id, ...otherCollectionProps}) => {
              return <CollectionPreview key={id} {...otherCollectionProps}/>
            })
          }
      </div>

      )

  }
}





export default ShopPage;
