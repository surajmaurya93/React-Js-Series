//----Today We Learn-----
// Basic Form Handling :-
// 1.Create Form
// 2.Register The Fields
// 3.onSubmit Handle
// 4.Validation - minLength, maxLength, Patterns
// 5.Error Handling
// 6.Styling Errors
// 7. Prevent Multiple Submission


import './App.css'
import {useForm} from "react-hook-form"

function App() {
  
  const{ register, handleSubmit, watch, formState: {errors, isSubmitting}, } = useForm();


 async function onSubmit(data){
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Submitting the form", data)
 }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input 
        className={errors.firstName ? "input-error": ""}
        {...register("firstName", 
        { 
          required: true, 
          minLength:{value:3, message: 'min len atleast 3'}, 
          maxLength:{value:6, message: 'max len atmost 6'}
          })} />
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input 
        className={errors.middleName ? "input-error": ""}
        {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input 
        className={errors.lastName ? "input-error": ""}
        {...register("lastName", {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Last name is not as per the rules"
          }
        })} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit" }/>
    </form>
  )
}

export default App
