import styled from 'styled-components'
import {
    Panel,
    Anchor
} from 'react95';

const positioning = {
    display: 'block',
    marginTop: '1.5rem',
    width: 'calc(100% - 1rem)'
};

const footerStyle = {
    display: 'block',
    width: 'calc(100% - 1rem)',
    margin: '0.1rem auto 0.5rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };

  const IconContainer = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4;
  min-width: 150px;
  border: none;
  background-color: transparent;

  i,
  :hover {
    cursor: pointer;
  }

  i {
    margin-bottom: 8;
  }

  :hover {
    box-shadow: out;
  }
`;

const Footer = () => {
    return (
        <div style={positioning}>
            <p style={{display: 'block', margin: '0 auto', textAlign: 'center', color: '#848584'}}>built with <Anchor style={{color: '#848584'}} href="https://react95.io/">react95</Anchor></p>
            <Panel style={footerStyle} variant='well'>
                <Anchor href="https://github.com/Nashtronaut">Github</Anchor>
                <Anchor href="https://www.linkedin.com/in/nash-boisvert/">LinkedIn</Anchor>
                <Anchor href="https://www.instagram.com/p/CO3ML6uLYMZMHn6y0_OtuS8hCah-R1b8c4Ga2U0/">My Dog</Anchor>
                <Anchor href="https://discord.com/users/305961086782275586">Discord</Anchor>
            </Panel>
        </div>
        
    );
};

export default Footer;