import { StyledForm } from "./StyledForm"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const TaskForm = ({ addTask }) => {
  const initialValues = { task: "" }
  const validationSchema = Yup.object({
    task: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTask(values.task)
        resetForm()
      }}
    >
      {() => (
        <Form>
          <Field
            name="task"
            placeholder="Enter your task"
          />
          <ErrorMessage
            name="task"
            component="div"
          />
          <button type="submit">Add Task</button>
        </Form>
      )}
    </Formik>
  )
}

export default TaskForm
