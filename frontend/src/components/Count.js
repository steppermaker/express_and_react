import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button, ButtonGroup, SvgIcon } from '@material-ui/core';
import styled from 'styled-components';

import { getCount, increment, decrement } from '../actions/counts/countAction'
 
function Count() {
  console.log("Count")
  const dispatch = useDispatch()
  const count = useSelector(store => store.countReducer)
  useEffect(() => {
    dispatch(getCount())
  },[dispatch]);

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <div>
      <CustomButtonGroup color="primary">
        <Button href="http://localhost:3000/"
                endIcon={<HomeIcon />}>
          home
        </Button>
        <Button>saga{count.count}</Button>
        <Button onClick={() => dispatch(increment())}>
          <b>+</b>
        </Button>
        <Button onClick={() => dispatch(decrement())}>
          <b>-</b>
        </Button>
      </CustomButtonGroup>
      { count.fetching ? <Fetching>Fetching...</Fetching> : "" }
    </div>

  );
}

export default Count;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-bottom: 10px;
`;

const Fetching = styled.div`
  font-family: cursive;
  margin-bottom: 5px;
`;