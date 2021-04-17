import { useForm } from 'react-hook-form';
import styled from 'styled-components';


function Message(props) {
  const target = props.target
  const {register, handleSubmit, formState} = useForm()
  console.log("c");
  return (
    <MessageList>
      <span>{ target.id + " : " +
              target.name + " : " +
              target.message}
      </span>
      <FlexEditMessage>
        <form onSubmit={handleSubmit(props.onUpdate)}>
          <input type="hidden" value={target.id}
                {...register('id')} />
          <input type="text" 
                placeholder={target.message}
                {...register('message', {
                  required: "should be not blank",
                  maxLength: {
                    value: 20,
                    message: "Max is 20"
                  }
                })} />
          <input type="submit" value="update"
                disabled={formState.isSubmitting} />
        </form>
        <button id={target.id}
                  onClick={props.onDelete}>
            delete
        </button>
      </FlexEditMessage>
    </MessageList>
  )
}

export default Message

const FlexEditMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const MessageList = styled.li`
  list-style: none
`;