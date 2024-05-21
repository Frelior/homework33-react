import { StyledForm } from "./Form.js"
import FormField from "../FormField/FormField.jsx"
import { Formik, Form as FormikForm } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "Invalid value")
    .min(12, "Must be 12 digits")
    .max(12, "Must be 12 digits"),
})

function myAlert(obj) {
  alert(`Name: ${obj.name} \nEmail: ${obj.email} \nPhone: ${obj.phone}`)
}

export default function Form() {
  return (
    <StyledForm>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={(values, { resetForm }) => {
          myAlert(values)
          resetForm()
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <FormikForm>
            <FormField
              warning={errors.name && touched.name}
              name="name"
              type="text"
            ></FormField>
            <FormField
              warning={errors.email && touched.email}
              name="email"
              type="email"
            ></FormField>
            <FormField
              warning={errors.phone && touched.phone}
              name="phone"
              type="tel"
            ></FormField>
            <button
              disabled={
                Object.keys(errors).length > 0 ||
                Object.keys(touched).length === 0
              }
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </FormikForm>
        )}
      </Formik>
    </StyledForm>
  )
}
