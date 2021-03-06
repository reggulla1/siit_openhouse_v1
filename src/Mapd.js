import PropTypes from 'prop-types'
import React, { Component } from 'react'
import siit_logo from './pic/siit_logo.png';
import siit_1 from './pic/siit_1.jpg';
import siit_2 from './pic/siit_2.jpg';
import rangsit from './pic/rangsit.jpg';
import bangkadi from './pic/bangkadi.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */






/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 0, padding: '0em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' >
                  SIIT
                </Menu.Item>
                
                <Menu.Item as='a' >
                  Fact  
                </Menu.Item>

                <Menu.Item as='a' >
                  History  
                </Menu.Item>

                <Menu.Item as='a'>Curriculum</Menu.Item>

                
                
                <Menu.Item as='a' active >Map & Direction</Menu.Item>
               
                <Menu.Item position='right'>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    FAQ
                  </Button>
                  
                </Menu.Item>
              </Container>
            </Menu>
            
            <logo />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
      
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            SIIT
          </Menu.Item>
          <Menu.Item as='a'>Fact </Menu.Item>
          <Menu.Item as='a'>History </Menu.Item>
          <Menu.Item as='a'>Curriculum</Menu.Item>
          <Menu.Item as='a'>Map & Direction</Menu.Item>
          
          
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 0, padding: '0em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                 
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    FAQ
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <logo />
            
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Mapd = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Row width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            <Icon name='map' />
                SIIT MAP
            </Header>

            <p style={{ fontSize: '1.33em' , padding:'1em 0em'}}>
            <b>Rangsit Campus</b>
           
            </p>

            <Grid.Row>
            <Image bordered rounded centered size='massive'  
            src={rangsit} 
            href='https://www.google.co.th/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3/@14.0690077,100.6042421,17z/data=!4m2!3m1!1s0x30e27f8adde458f3:0x536c67b40b52eabe'
            />
            </Grid.Row>

            <p style={{ fontSize: '1.33em' , padding:'3em 0em'}}>
            <b>Bangkadi Campus</b>
           
            </p>

            <Grid.Row>
            <Image bordered rounded centered size='huge' 
            src={bangkadi} 
            href='https://www.google.co.th/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3+%E0%B8%A1.%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%94%E0%B8%B5/@13.9814782,100.5505503,17z/data=!4m7!1m4!3m3!1s0x30e2816a721fd66d:0x68d9fad49b1a9c85!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LiZ4Liy4LiZ4Liy4LiK4Liy4LiV4Li04Liq4Li04Lij4Li04LiZ4LiY4LijICjguKfguLTguJfguKLguLLguYDguILguJXguJrguLLguIfguIHguKPguLDguJTguLUp!3b1!3m1!1s0x0000000000000000:0xf745b6896833e708'
            />
            </Grid.Row>

           
          </Grid.Row>
         
        </Grid.Row>
        
      </Grid>
    </Segment>
    
    <Segment inverted vertical style={{ padding: '2em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Contact Us' />
              <List link inverted>
                <List.Item as='a'>Call : +66 2896 9009 Ext. 1002-1006</List.Item>
                <List.Item as='a'>E-mail : admission@siit.tu.ac.th</List.Item>
                <List.Item as='a'>Facebook : SIITTU</List.Item>
                <List.Item as='a'>Instagram : SIITTU</List.Item>
                <List.Item as='a'>Twitter : SIITTU</List.Item>
                <List.Item as='a'>Line : @siitadmission</List.Item>
              </List>
            </Grid.Column>
           
            
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default Mapd