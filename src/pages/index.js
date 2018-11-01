import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import 'typeface-roboto'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
var drawerState = false;

function toggleDrawer(open) {
  drawerState = open


};

const pages = (
  <div>
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/*<IconButton className={classes.menuButton} onClick={toggleDrawer()} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>*/}
            <Drawer open={drawerState} onClose={toggleDrawer(true)}>
              <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {pages}
              </div>
            </Drawer>
            <Typography variant="title" color="inherit" className={classes.grow}>
              Laguna Hills High School Esports Club
          </Typography>
            <div>
              <img
                src={require('../images/lh.png')} width="60" height="42"
              /></div>
          </Toolbar>
        </AppBar>
        <div display="inline"
          float="none">
          <iframe styles={{ width: 123 }} src="https://calendar.google.com/calendar/embed?src=42754uki8qmtnfuva13rrk44vs%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div></div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);