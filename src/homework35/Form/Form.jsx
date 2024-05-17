import { StyledForm } from "./StyledForm"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const MyForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required").min(2, "Minimum 2 characters"),
  })

  const saveToLocalStorage = (values) => {
    localStorage.setItem("formData", JSON.stringify(values))
  }

  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        saveToLocalStorage(values)
        setSubmitting(false)
        alert("Данные сохранены!")
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Имя:</label>
            <Field
              type="text"
              name="name"
            />
            <ErrorMessage
              name="name"
              component="div"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
          >
            Сохранить
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default MyForm
