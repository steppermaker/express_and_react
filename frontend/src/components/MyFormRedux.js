import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

import { fetchAddMessage,
         fetchMessages
       } from '../actions/MessageActions';
import ReduxMessage from './ReduxMessage';

const messageSelector = store => store.message.messages;

function MyFormRedux() {
  console.log("MyFormRedux")
  const { handleSubmit, register, 
          formState, formState: {errors},
          reset } = useForm();
  const dispatch = useDispatch();
  const messages = useSelector(messageSelector);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch])

  const onAddMessage = (target) => {
    dispatch(fetchAddMessage(target));
    reset();
  };

  const name_error = errors.name ? true : false;
  const message_error = errors.message ? true : false;

  const list =  messages.map((message) => {
    return <ReduxMessage key={message.id} message={message} />
  })
  
  return (
    <div>
      <h2>Message form</h2>
      <FlexForm onSubmit={handleSubmit(onAddMessage)}>
        <TextField type="text" variant="outlined" size="small"
                   label="name" error={name_error}
                   helperText={name_error ? errors.name.message : " "}
                  {...register("name", {
                               required: "should not be blank",
                               maxLength: { value: 20,
                                            message: "max is 20" }
         })} />
        <TextField type="text" variant="outlined" size="small"
                   label="message" error={message_error}
                   helperText={message_error ? errors.message.message : " "}
                   {...register("message", {
                                required: "should not be blank",
                                maxLength: { value: 20,
                                            message: "max is 20" }
          })} />
        <Button type="submit" variant="contained"
                color="primary" size="small"
                disabled={formState.isSubmitting}>
          Submit
        </Button>
      </FlexForm>
      <MessageDiv>
        <h2>Messages</h2>
        <ul>{list}</ul>
      </MessageDiv>
    </div>
  )
}

export default MyFormRedux;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const MessageDiv = styled.div`
  margin-top: 30px;
`;