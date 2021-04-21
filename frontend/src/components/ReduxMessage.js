import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteMessage,
         fetchUpdateMessage } from '../actions/MessageActions';
import { useForm} from 'react-hook-form'
import styled from 'styled-components';
import { Button, FormControl, InputLabel, Input, FormHelperText,
       } from '@material-ui/core';

function ReduxMessage(props) {
  console.log("ReduxMessage")
  const message = props.message
  const { register, handleSubmit, formState: {errors}, formState } = useForm();
  const dispatch = useDispatch();

  const onUpdateMessage = (target) => {
    dispatch(fetchUpdateMessage(target))
  };

  const onDeleteMessage = (e)=> {
    dispatch(fetchDeleteMessage(e.currentTarget.dataset.id))
  };

  const error = errors.message ? true : false

  return(
    <li>
      <span><b>{message.message}</b></span>
      <FlexEditMessage>
        <FlexForm onSubmit={handleSubmit(onUpdateMessage)}>
          <NoShrink>
            <input type="hidden" value={message.id} {...register("id")} />
            <FormControl color="primary"  error={error} >
              <InputLabel htmlFor="my-input">{message.message}</InputLabel>
              <Input id="my-input" 
              {...register("message",
                           { required: "should not be blank",
                             maxLength: { value: 20,
                                          message: "max is 20" }
              })}/>
              <FormHelperText id="my-helper-text">
                {error ? errors.message.message : "Update message"}  
              </FormHelperText>
            </FormControl>
          </NoShrink>
          <Button type="submit" variant="contained"
                  color="primary" size="small"
                  disabled={formState.isSubmitting}>
            Update
          </Button>
          <Button variant="contained" color="secondary" size="small"
                  data-id={message.id}
                  onClick={onDeleteMessage} >
            delete
          </Button>
        </FlexForm>
      </FlexEditMessage>
    </li>
  )
}

export default ReduxMessage

const FlexEditMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexForm = styled.form`
  display: flex;
  align-items: center;

`;

const NoShrink = styled.div`
  flex-shrink: 0;
`;