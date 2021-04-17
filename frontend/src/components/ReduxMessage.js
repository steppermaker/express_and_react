import { useDispatch } from 'react-redux';
import { fetchDeleteMessage,
         fetchUpdateMessage } from '../actions/messages/messageAction';
import { useForm } from 'react-hook-form'

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
    <li>
      {message.message}
      <form onSubmit={handleSubmit(onUpdateMessage)}>
        <input type="hidden" value={message.id} {...register("id")}  />
        <input type="text" placeholder="update message" 
          {...register("message", {
            required: "should not be blank",
            maxLength: { value: 20,
                         message: "max is 20" }
          })}
        />
        <input type="submit" value="submit" />
      </form>
      <button data-id={message.id}
              onClick={onDeleteMessage} >
        delete
      </button>
    </li>
  )
}

export default ReduxMessage