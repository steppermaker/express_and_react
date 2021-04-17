import React from 'react';
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';

import Message from './Message.js'

function MyForm() {

  const [messages, setMessages] = useState([]);
  const { register, handleSubmit, watch, reset, formState: {errors}, setValue, getValues, trigger, formState, clearErrors, setError } = useForm();

  useEffect(() => {
    fetch('/api/v1/list')
    .then((res) => res.json())
    .then((data) => setMessages(data));
  },[])

  function onSubmit(value) {
    fetch('/api/v1/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value)
    })
    .then((res) => res.json())
    .then((data) => {
      setMessages(data)
      // reset({message: "reset input!!"});
      reset()
    });
  }

  function onDelete(e) {
    fetch(`/api/v1/item/${e.target.id}`, {
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
    .then((data) => setMessages(data) )
  }

  function onUpdate(value) {
    fetch(`/api/v1/item/${value.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: value.message})
    })
    .then((res) => res.json())
    .then((data) => setMessages(data))
  }

  const onError = (errors, e) => console.log(errors);

  let message_list = messages.map((target) => {
    return <Message key={target.id.toString()}
                    target={target}
                    onUpdate={onUpdate}
                    onDelete={onDelete} />});
  console.log("a")
  return (
    <div>
      <p>{watch("message")}</p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input type="text" placeholder="name" 
          aria-invalid={errors.log ? "true" : "false"}
          {...register("name",{
            required: "need input [name]",
            maxLength: { value: 20, message: "too long [name]" }})
            }/>
        <input type="text" placeholder="message" 
          aria-invalid={errors.message? "true" : "false"}
          {...register("message",{
            required: true,
            maxLength: 20})} />
        <input type="submit" value="submit" disabled={formState.isSubmitting} />
      </form>

      <button
        onClick={() =>
          setValue("message", "setted", {
            shouldValidate: true,
            shouldDirty: true
          })
        }
      >{"set value for input"}</button>

      <button
        type="button"
        onClick={() => {
          console.log(getValues()); // { name: "name-input", message: "message-input" }
          console.log(getValues("message")); // "message-input"
          console.log(getValues(["name", "message"]));
          // ["name-input","message-input"]
        }}
      >Get Values</button>

      <button type="button" onClick={() => { trigger("message"); }}>Trigger required</button>
      <button type="button" onClick={() => { trigger(["message", "name"]); }}>Trigger Multiple</button>
      <button type="button" onClick={() => { trigger(); }}>Trigger error All</button>

      <button type="button" onClick={() => { setError("message", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!"
          }); }}>Trigger manual error message</button>

      <button type="button" onClick={() => clearErrors()}>
        Clear All Errors
      </button>

      {errors.message && errors.message.type === "required" && ( 
        <span role="alert">This is required[message]</span>
      )}
      {errors.message && errors.message.type === "maxLength" && (
        <span role="alert">Max length exceeded[]message</span>
      )}
      {errors.message && errors.message.type === "manual" && (
        <span role="alert">{errors.message.message}</span>
      )}

      {errors.name && errors.name.type === "required" && (
        <span role="alert">This is required[log]</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span role="alert">Max length exceeded[log]</span>
      )}

      <ul>{ message_list }</ul>
    </div>
  );
}

export default MyForm;