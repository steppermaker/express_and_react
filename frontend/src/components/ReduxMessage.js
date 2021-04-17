import { useDispatch } from 'react-redux';
import { fetchDeleteMessage,
         fetchUpdateMessage } from '../actions/messages/messageAction';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { Button } from '@material-ui/core';

function ReduxMessage(props) {
  const message = props.message
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onUpdateMessage = (target) => {
    dispatch(fetchUpdateMessage(target))
  };

  const onDeleteMessage = (e)=> {
    dispatch(fetchDeleteMessage(e.target.dataset.id))
  };

  return(
    <MessageList>
      {message.message}
      <FlexEditMessage>
        <FlexForm onSubmit={handleSubmit(onUpdateMessage)}>
          <input type="hidden" value={message.id} {...register("id")}  />
          <input type="text" placeholder="update message" 
            {...register("message", {
              required: "should not be blank",
              maxLength: { value: 20,
                          message: "max is 20" }
            })}
          />
          <input type="submit" value="submit" />
        </FlexForm>
        <Button variant="contained" color="primary"
                data-id={message.id}
                onClick={onDeleteMessage} >
          delete
        </Button>
      </FlexEditMessage>
    </MessageList>
  )
}

export default ReduxMessage

const FlexEditMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const MessageList = styled.li`
  list-style: none;
`;

const FlexForm = styled.form`
  display: flex;
`;