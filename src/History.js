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

                <Menu.Item as='a'active >
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

const History = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Row width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            <Icon name='history' />
                SIIT HISTORY
            </Header>
            
            <p style={{ fontSize: '1.33em' , padding:'2em 0em'}}>
            
            <p>During the 9th Japan-Thailand Joint Trade and Economic Committee Meeting held in Kobe, Japan in 1989, the delegates from the Japan Federation of Economic Organizations (Keidanren – now Nippon Keidanren) and the Federation of Thai Industries (FTI) realized that in order to enhance industrial development of Thailand, engineering programs, where all lecture and laboratory courses would be taught in English by highly qualified faculty members with doctoral degrees, needed to be established.
            </p>
            </p>
            
            <p style={{ fontSize: '1.33em' , }}>
            
            <p>A cooperation agreement among Keidanren, FTI, and Thammasat University was reached in 1992 to establish bachelor’s degree programs in engineering at Thammasat University with initial funds provided by Keidanren and FTI. After two years of successful operation, the “International Institute of Technology (IIT)” was founded on September 16, 1994. Her Royal Highness Princess Maha Chakri Sirindhorn graciously presided over the Cornerstone Laying Ceremony of a new building at the Rangsit Center of Thammasat University. His Majesty King Bhumibol Adulyadej of Thailand graciously granted the Institute a new name, “Sirindhorn International Institute of Technology (SIIT),” on June 28, 1996.
            </p>
            </p>

            <p style={{ fontSize: '1.33em' ,padding:'2em 0em' }}>
            
            <p>On October 2, 1997, Her Royal Highness Princess Maha Chakri Sirindhorn graciously presided over the Sirindhorn International Institute of Technology’s Inauguration Ceremony of its name and building. In 1999, FTI provided a parcel of land with an existing building at Bangkadi Industrial Park (BKD) for SIIT’s use for 30 years. In June 2001, the former Prime Minister Anand Panyarachun inaugurated a new building at Bangkadi for Information Technology and Computer Science programs.
            </p>
            </p>

            <p style={{ fontSize: '1.33em' ,}}>
            
            <p>Her Royal Highness Princess Maha Chakri Sirindhorn graciously presided over the inauguration of the Sirindhralai Building at Bangkadi on June 28, 2006. This new six-story building houses the School of Information, Computer, and Communication Technology (ICT), the School of Management Technology (MT), a library, a computer center, laboratories, and classrooms.
            </p>
            </p>


            <p style={{ fontSize: '1.33em' ,padding:'2em 0em' }}>
            <p>Backgrounds of the three founding organizations of Sirindhorn International Institute of Technology are briefly described as follows.
            </p>
            </p>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>....</a>
        </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>
                Thammasat University
            </Header>

            <p style={{ fontSize: '1.33em' ,padding:'2em 0em' }}>
            <p>Founded in 1934, Thammasat University was originally dedicated to the teaching of humanities and social sciences. The University has produced a large number of graduates who have greatly contributed to the development and progress of Thailand. Realizing the significant impact of science and technology on the country’s economic growth, in the 1980’s and 1990’s Thammasat University initiated degree programs in engineering, technology, physical sciences, and medical sciences at its Rangsit Center, Pathum Thani.
            </p>
            </p>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>....</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
            The Japanese Business Federation (Nippon Keidanren)
        </Header>
        
        <p style={{ fontSize: '1.33em' ,padding:'2em 0em' }}>
            <p>Through the merger of several economic and industrial organizations, the Japan Federation of Economic Organizations (Keidanren) was established in August 1946. Keidanren was a private, non-profit economic organization representing virtually all branches of economic activities in Japan. Keidanren has maintained close contact with both public and private sectors at home and abroad, and endeavored not only to find practical solutions to economic problems but also to contribute to the sound development of economies of Japan and countries around the world.
        </p>
        </p>

        <p style={{ fontSize: '1.33em'  }}>
            <p>In May 2002, Keidanren merged with Nikkeiren (Japan Federation of Employer’s Associations) to become Nippon Keidanren (The Japanese Business Federation). Headed by internationally distinguished leaders of the Japanese business community, Nippon Keidanren plays an active and influential role towards the achievement of harmonious economic prosperity for all mankind.
        </p>
        </p>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '2em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>....</a>
        </Divider>

        
        <Header as='h3' style={{ fontSize: '2em' }}>
        The Federation of Thai Industries
        </Header>

        <p style={{ fontSize: '1.33em' ,padding:'2em 0em'  }}>
            <p>Formerly known as the Association of Thai Industries (ATI), the Federation of Thai Industries (FTI) came into existence on December 29, 1987. It was a transformed body of ATI, which was created in 1967. FTI is an industrial private organization that brings together industrial leaders to promote Thailand’s socio economic development. The main objectives of FTI are to represent Thai manufacturers at both national and international levels, to help promote and develop industrial enterprises, to work with the government in setting up national policies, and to offer consulting services to members.
        </p>
        </p>

        <p style={{ fontSize: '1.33em'  }}>
            <p>FTI is a full-service organization that cooperates with the government to help mobilize Thai industries to reach international markets. It acts as a “match-maker” between foreign industrialists and Thai resources which combine the financial strength, planning ability, and persuasive power of Thailand’s industrialists.
        </p>
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
export default History