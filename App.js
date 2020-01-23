import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { AppLoading } from 'expo';
import { Container, List, ListItem, View, Thumbnail, Header, Fab, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Button, Title, ScrollableTab, Badge } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import TabCamera from './TabCamera';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
 
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
 
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
 
    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}} androidStatusBarColor="#075E54">

          <Body>
           <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
 

        
        <Tabs tabContainerStyle={{elevation:0}}>
        <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Icon name="camera" style={{color:'white'}}/></TabHeading>}>

          <TabCamera />
        </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Chat</Text></TabHeading>}>
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/elon.png')} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>My Falcon Heavy better than Saturn V.</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/jackma.png') } />
              </Left>
              <Body>
                <Text>Jack Ma</Text>
                <Text note>Morning Ma..</Text>
              </Body>
              <Right>
                <Text note>7:00 am</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/putin.png') } />
              </Left>
              <Body>
                <Text>Vladimir Putin</Text>
                <Text note>утро</Text>
              </Body>
              <Right>
                <Text note>7:11 pm</Text>
              </Right>
            </ListItem>
          </List>
             <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="text" />
          </Fab>
        </View>

          </Tab>  


          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Status</Text></TabHeading>}>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/me.png' )} />
                <Badge success style={{position:"absolute", right:0, bottom:0, width:21,height:21}}>
                  <Icon name="add" style={{ fontSize: 17, color: "#fff",marginBottom:-5,marginRight:-5}}/>
                </Badge>
              </Left>
              <Body>
                <Text>My Status</Text>
                <Text note>Tap to add new updates</Text>
              </Body>
            </ListItem>  
          <ListItem itemDivider style={{height:30}}>
              <Text note>New Updates</Text>
            </ListItem> 
            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/elon.png' )} style={{borderRadius: 50, borderColor: '#075E54' , borderWidth:2}} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>Today, 05:12</Text>
              </Body>
            </ListItem>
          <ListItem itemDivider style={{height:30}}>
              <Text note>Viewed Updates</Text>
          </ListItem> 
            <ListItem avatar>
              <Left>
                <Thumbnail source={ require('./assets/images/jackma.png' )}  style={{borderRadius: 50, borderColor: 'grey' , borderWidth:2}}/>
              </Left>
              <Body>
                <Text>Jack Ma</Text>
                <Text note>Yesterday, 18:21</Text>
              </Body>
            </ListItem>
            </List>
          <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="camera" />
            <Button disabled style={{ backgroundColor: 'grey' }}>
              <Icon name="create" />
            </Button>
          </Fab>
        </View>
          </Tab>





          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Calls</Text></TabHeading>}>
             <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('./assets/images/putin.png' )} style={{borderRadius: 50}} />
              </Left>
              <Body>
                <Text>Putin</Text>
                <Text note numberOfLines={1}>Today 20.00</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='call' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('./assets/images/elon.png' )} style={{borderRadius: 50}}/>
              </Left>
              <Body>
                <Text>Elon</Text>
                <Text note numberOfLines={1}>Yesterday 15.20</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='videocam' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="call"/>
          </Fab>
        </View>
          </Tab>
        </Tabs>

 
      </Container>
    );
  }
}