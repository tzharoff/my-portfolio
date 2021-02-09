import React, { useState, useEffect } from 'react';
import UseForm, { useForm } from 'react-hook-form';

export default function Form ({_id}) {
    const [formData, setFormData] = useState();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = async data => {
        setIsSubmitting(true)
              
        setFormData(data)
              
        try {
          await fetch('/api/createComment', {
            method: 'POST',
           body: JSON.stringify(data),
           type: 'application/json'
          })  
          setIsSubmitting(false)
          setHasSubmitted(true)
        } catch (err) {
          setFormData(err)
        }
      }

    if(isSubmitting){
        return <h3>Submitting comment...</h3>
    }

    if(hasSubmitted){
        return (
            <>
                <h3>Thank you for your comment!</h3>
                <ul>
                    <li>
                        Name: {formData.name} <br />
                        Email: {formData.email} <br />
                        Comment: {formData.comment} <br />
                    </li>
                </ul>
            </>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg" disable>
            <input ref={register} type="hidden" name="_id" value={_id} />
            <label className="block mb-5">
                <span className="text-gray-700">Name</span>
                <input name="name" ref={register({required:true})} className="form-input mt-1 block w-full" placeholder="John Appleseed" />
            </label>
            <label className="block mb-5">
                <span className="text-gray-700">Email</span>
                <input name="email" type="email" ref={register({required: true})} className="form-input mt-1 block w-full" placeholder="your@email.com"/>
            </label>
            <label className="block mb-5">
                <span className="text-gray-700">Comment</span>
                <textarea ref={register({required: true})} name="comment" className="form-textarea mt-1 block w-full" rows="8" placeholder="Enter some long form content."></textarea>
            </label>

            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" className="shadow bg-red-800 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
        </form>
    )
}