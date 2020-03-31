import React, { Component } from 'react';
import { Container,StatusBar, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Product from '../screens/Product';
import Recipe from '../screens/Recipe';

export default class Favorite extends Component {
  render() {
    return (
      <>
      
      <Container>
        
        <Header hasTabs style={{backgroundColor:'green'}}/>
        <Tabs >
          <Tab heading={ <TabHeading style={{backgroundColor:'green'}}><Text>Product</Text></TabHeading>}>
            <Product />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'green'}}><Text>Recipe</Text></TabHeading>}>
            <Recipe />
          </Tab>
         
        </Tabs>
      </Container>
      </>
    );
  }
}