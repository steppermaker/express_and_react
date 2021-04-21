import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab,
         Box, SvgIcon, Button } from '@material-ui/core';

import MyFormRedux from './MyFormRedux.js';
import Count from './Count.js';
import MyForm from "./MyForm.js";
import MyFormLog from "./MyFormLog.js";


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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CustomAppBar position="fixed" >
        {/* TabsのvalueはTabの先頭からの配置の順番 */}
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Redux message" {...a11yProps(1)} />
          <Tab label="Saga Count" {...a11yProps(1)} />
          <Tab label="Thunk message" {...a11yProps(2)} />
          <Tab label={<HomeIcon />} {...a11yProps(3)} />
        </Tabs>
      </CustomAppBar>
      <TabPanel value={value} index={0}>
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
      </TabPanel>
    </div>
  );
}

const CustomAppBar = styled(AppBar)`
  align-items: center;
`;