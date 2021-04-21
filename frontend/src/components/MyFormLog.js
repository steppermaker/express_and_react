import React from 'react';
import { useForm } from 'react-hook-form';

const MyFormLog = () => {
  console.log("MyFormLog")
  const { register, handleSubmit, watch, reset, formState: {errors}, setValue, formState } = useForm();

  async function onLog(value) { 
    const a = await new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
      })
    console.log(a);
    reset();
   }

  const onError = (errors, e) => console.log(errors);

  return (
    <div>
      <p>{watch("log")}</p>
      <form onSubmit={handleSubmit(onLog, onError)}>
        <input type="text" placeholder="..." 
          aria-invalid={errors.log ? "true" : "false"}
          {...register("log",{
            required: "need input [log]",
            maxLength: { value: 20, message: "too long [log]" }})
            } />
        <input type="submit" value="console log" disabled={formState.isSubmitting} />
      </form>

      <button
        onClick={() =>
          setValue("log", "setted", {
            shouldValidate: true,
            shouldDirty: true
          })
        }
      >{"set value for input"}</button>

      {errors.log && errors.log.type === "required" && (
        <span role="alert">This is required[log]</span>
      )}
      {errors.log && errors.log.type === "maxLength" && (
        <span role="alert">Max length exceeded[log]</span>
      )}
    </div>
  );
}

export default MyFormLog;