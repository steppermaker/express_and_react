import { useForm } from 'react-hook-form';


function Message(props) {
  const target = props.target
  const {register, handleSubmit, formState} = useForm()
  console.log("c");
  return (
    <li>
      <span>{ target.id + " : " +
              target.name + " : " +
              target.message}
      </span>

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
        <button id={target.id}
                onClick={props.onDelete}>
          Delete
        </button>
      </form>
    </li>
  )
}

export default Message