import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchAddMessage,
         fetchMessages
       } from '../actions/messages/messageAction';
import ReduxMessage from './ReduxMessage'

const messageSelector = state => state.messages;

function MyFormRedux() {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const messages = useSelector(messageSelector);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch])

  const onAddMessage = (target) => {
    dispatch(fetchAddMessage(target));
  };


  const list = messages.map((message) => {
    return <ReduxMessage key={message.id} message={message} />
  })

  return (
    <div>
      <form onSubmit={handleSubmit(onAddMessage)}>
        <input type="text" placeholder="name" {...register("name", {
          required: "should not be blank",
          maxLength: { value: 20,
                       message: "max is 20" }
        }) } />
        <input type="text" placeholder="message" {...register("message", {
          required: "should not be blank",
          maxLength: { value: 20,
                       message: "max is 20" }
        }) } />
        <input type="submit" value="submit" />
      </form>
      <ul>{list}</ul>
    </div>
   
    

  )
}

export default MyFormRedux;