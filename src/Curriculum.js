import PropTypes from 'prop-types'
import React, { Component } from 'react'
import siit_logo from './pic/siit_logo.png';
import siit_1 from './pic/siit_1.jpg';
import siit_2 from './pic/siit_2.jpg';
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

                <Menu.Item as='a' active >
                    Curriculum
                </Menu.Item>

                
                
                <Menu.Item as='a'>Map & Direction</Menu.Item>
               
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

const Curriculum = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Row width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            <Icon name='book' />
                SIIT CURRICULUM
            </Header>
            
            <p style={{ fontSize: '1.33em',padding:'1em 0em' }}>
            
            <p>SIIT offers international programs leading to Bachelor of Engineering (B.Eng.) and Bachelor of Science (B.Sc.) in the following fields:
            </p>
            
            </p>
            
            <p style={{ fontSize: '1.33em'  }}>
            <b>Chemical Engineering (ChE)</b>
            <p></p>
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Civil Engineering (CE) </b>
            
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Mechanical Engineering (ME) </b>
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Industrial Engineering and Logistics Systems (IE)</b>
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Electrical Engineering (EE) </b>
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Computer Engineering (CPE) </b>
            
            </p>

            <p style={{ fontSize: '1.33em'  }}>
            <b>Digital Engineering (DE)</b>
            
            </p>

            

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
export default Curriculum