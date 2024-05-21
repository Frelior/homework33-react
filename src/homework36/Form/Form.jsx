import { StyledForm } from "./Form.js"
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik"
import { object, string, number, date, InferType } from "yup"

const validationSchema = object({
  name: string().required("Name is required"),
  email: string().email("Email is invalid"),
  phone: number().positive("Phone must be positive"),
})

export default function Form() {
  return (
    <StyledForm>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={console.log("submit")}
        validationSchema={validationSchema}
      >
        <FormikForm>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            ></Field>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            ></Field>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
            ></Field>
          </div>
          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </StyledForm>
  )
}
