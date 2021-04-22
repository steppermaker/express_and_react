import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';

import { getCount, increment, decrement } from '../actions/CountActions'
 
function Count() {
  console.log("Count")
  const dispatch = useDispatch()
  const count = useSelector(store => store.count)
  useEffect(() => {
    dispatch(getCount())
  },[dispatch]);

  return (
    <div>
      <h2>{count.count}</h2>
      <CustomButtonGroup color="primary">
        <Button onClick={() => dispatch(increment())}>
          <b>+</b>
        </Button>
        <Button onClick={() => dispatch(decrement())}>
          <b>-</b>
        </Button>
      </CustomButtonGroup>
      <h3>The - button is delayed by 1 seconds</h3>
      { count.fetching ? <Fetching>Fetching...</Fetching> : false }
    </div>

  );
}

export default Count;

const CustomButtonGroup = styled(ButtonGroup)`
  margin: 10px;
`;

const Fetching = styled.div`
  font-family: cursive;
  margin-bottom: 5px;
`;