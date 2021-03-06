  
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import siit_logo from './pic/siit_logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fact from './Fact';
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


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image  src={siit_logo} size='small' centered   />
    <Header
    

    
      as='h1'
      content='Sirindhorn International Institute of Technology'
      
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3.5 em',
        
      }}
    />
    <Header
      as='h2'
      content='Thammasat University'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

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
      <Router>
        <div>
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
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
              <Menu.Item as={Link} to="/homepagelayout"active Link >
                  SIIT
                </Menu.Item>
                
                <Menu.Item as={Link} to="/Fact" >
                  Fact  
                </Menu.Item>

                <Menu.Item as='a' >
                  History  
                </Menu.Item>

                <Menu.Item as='a'>Curriculum</Menu.Item>

                
                
                <Menu.Item as='a'>Map & Direction</Menu.Item>
                
                <Menu.Item position='right'>
                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    FAQ
                  </Button>
                  
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
            <logo />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
      <Switch>
          <Route path="/Home">
            <HomepageLayout />
          </Route>
          <Route path="/Fact">
            <Fact />
          </Route>
      </Switch>
      </div>
      </Router>  
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
          <Menu.Item as='a'>Fact</Menu.Item>
          <Menu.Item as='a'>History</Menu.Item>
          <Menu.Item as='a'>Map & Direction</Menu.Item>
          <Menu.Item as='a'>Curriculum</Menu.Item>
          
          
          
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
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
            <HomepageHeading mobile />
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

const HomepageLayout = () => (
  <ResponsiveContainer>
    
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          SIIT Fact & History
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        <b>Sirindhorn International Institute of Technology (SIIT)</b> 
        <p>offers undergraduate and graduate programs (master and doctoral 
        levels) leading to the Bachelor of Engineering (B.Eng.), 
        Bachelor of Science (B.Sc.), Master of Engineering (M.Eng.),
        Master of Science (M.Sc.), and Doctor of Philosophy (Ph.D.). </p>
         


        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>....</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Curriculum
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        <b>Intro
        </b>
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
       
      </Container>
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
export default HomepageLayout