import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, FormControl, InputAdornment,
         TextField, ButtonGroup , SvgIcon } from '@material-ui/core';

import { fetchAddMessage,
         fetchMessages
       } from '../actions/messages/messageAction';
import ReduxMessage from './ReduxMessage';

const messageSelector = state => state.messages;

function MyFormRedux() {
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
  
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const name_error = errors.name ? true : false;
  const message_error = errors.message ? true : false;

  const list = messages.map((message) => {
    return <ReduxMessage key={message.id} message={message} />
  })
  
  return (
    <div>
      <MyButtonGroup color="primary">  
        <Button href="http://localhost:3000/"
                endIcon={<HomeIcon />}>home</Button>
        <Button onClick={() => alert("Hello")}>Alert</Button>
      </MyButtonGroup>  
      <FlexForm onSubmit={handleSubmit(onAddMessage)}>
        <TextField type="text" variant="outlined"
                   label="name" error={name_error}
                   helperText={name_error ? errors.name.message : "Input name!"}
                  {...register("name", {
                               required: "should not be blank",
                               maxLength: { value: 20,
                                            message: "max is 20" }
         })} />
        <TextField type="text" variant="outlined"
                   label="message" error={message_error}
                   helperText={message_error ? errors.message.message : "Input message!"}
                   {...register("message", {
                                required: "should not be blank",
                                maxLength: { value: 20,
                                            message: "max is 20" }
          })} />
        <FormControl>
        <Button type="submit" variant="contained"
                color="primary" size="small"
                disabled={formState.isSubmitting}>
          Submit
        </Button>
        </FormControl>
      </FlexForm>
      <ul>{list}</ul>
    </div>
  )
}

export default MyFormRedux;

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const MyButtonGroup = styled(ButtonGroup)`
  margin: 10px;
`;