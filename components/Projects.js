import TabContentHeader from './TabContentHeader';
import {
    List,
    ListItem,
    Divider,
    Fieldset
} from 'react95';

const Projects = () => {
    return(
        <div>
            <TabContentHeader header="Some of my stuff!" /> 
            <Fieldset style={{fontWeight: 'bold', marginBottom: '1rem'}} label="Disclaimer">
                Unfortunately, many of my recent project details and source code is locked behind NDA&apos;s. Please inquire for more details about the things I&apos;ve done!
            </Fieldset>
            <List fullWidth>
                <ListItem style={{fontWeight: 'bold'}} as='a' href='https://github.com/Nashtronaut/discord-code-formatter'>Discord Code Formatter!</ListItem>
                <Divider />
                <ListItem style={{fontWeight: 'bold'}} as='a' href="https://github.com/Nashtronaut/react95personalweb">This website!</ListItem>
                <Divider />
                <ListItem style={{fontWeight: 'bold'}} as='a' href="https://github.com/Nashtronaut/web-portfolio">My old website with less class!</ListItem>
                <Divider />
                <ListItem style={{fontWeight: 'bold'}} as='a' href="https://github.com/Nashtronaut/Noah-Law">Noah&apos;s Law website!</ListItem>
                <Divider />
                <ListItem style={{fontWeight: 'bold'}} as='a' href="https://github.com/Nashtronaut/App-dev-final-project">First years final project!</ListItem>
                <Divider />
                <ListItem style={{fontWeight: 'bold'}} as='a' href="https://github.com/Nashtronaut">Check out my Github for more!</ListItem>
            </List>
        </div>
    );
};

export default Projects;