import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab,
         Box} from '@material-ui/core';
import { Link } from 'react-router-dom'

// import MyFormRedux from './MyFormRedux.js';
// import Count from './Count.js';
// import MyForm from "./MyForm.js";
// import MyFormLog from "./MyFormLog.js";

import { useHistory } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");

  const handleChange = (event, newValue) => {
    history.push(newValue)
    setValue(history.location.pathname);
  };

  const history = useHistory();
  
  return (
    <div className={classes.root}>
      <CustomAppBar position="fixed" >
        {/* TabsのvalueはTabの先頭からの配置の順番 Tabにvalue設定可 */}
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Redux message"
               component={Link} to="/" value="/" />
          <Tab label="Saga count"
               component={Link} to="/count" value="/count" />
          <Tab label="Thunk message" 
               component={Link} to="/myform" value="/myform"  />
          <Tab label="myformlog" 
               component={Link} to="/myformlog" value="/myformlog"  />
        </Tabs>
      </CustomAppBar>
      {/* <TabPanel value={value} index={0}>
        <MyFormRedux />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Count />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <MyFormLog />
          <MyForm />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>Press this button to go to the home page</h2>
        <Button href="http://localhost:3000/"
                endIcon={<HomeIcon />}
                color="primary"
                variant="contained">
          home
        </Button>
      </TabPanel> */}
    </div>
  );
}

const CustomAppBar = styled(AppBar)`
  align-items: center;
`;