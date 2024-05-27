import { StyledForm } from "./StyledForm"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { nanoid } from "nanoid"
import { useState } from "react"

export default function TaskForm({ setStorage }) {
  const [focused, setFocused] = useState(false)

  //adding value from input to local storage
  function addTaskToLocalStorage(task) {
    if (task.title) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || []
      task.completed = false
      task.id = nanoid(6)
      tasks.push(task)
      setStorage(tasks)
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }

  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters long")
      .required("Title is required"),
  })

  return (
    <StyledForm>
      <div className={"card"}>
        <div className="card-body p-0">
          <Formik
            initialValues={{ title: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              addTaskToLocalStorage(values)
              resetForm()
            }}
          >
            {({ errors, touched }) => {
              return (
                <Form>
                  <h4>Add new task</h4>
                  <div>
                    <Field
                      name="title"
                      type="text"
                      className={`form-control ${
                        focused && errors.title && touched.title && "is-invalid"
                      }`}
                      placeholder="Enter title"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    ></Field>
                    {focused && errors.title && (
                      <ErrorMessage
                        name="title"
                        component="div"
                        className={`invalid-feedback`}
                      />
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary mt-3"
                  >
                    Add
                  </button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </StyledForm>
  )
}
