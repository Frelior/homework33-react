import { StyledForm, StyledFormikForm } from "./StyledForm"
import { Formik, Field, ErrorMessage } from "formik"
import { validationSchema } from "./validation"
import { nanoid } from "nanoid"
import { addAsyncTodo } from "../store/todoSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function TaskForm() {
  const [focused, setFocused] = useState(false)
  const dispatch = useDispatch()

  function createTask(title) {
    const task = { title: title, id: nanoid(), completed: false }
    return task
  }

  return (
    <StyledForm>
      <div className={"card border-0"}>
        <div className="card-body p-0">
          <Formik
            initialValues={{ title: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addAsyncTodo(createTask(values.title)))
              resetForm()
            }}
          >
            {({ errors, touched, isValid }) => {
              return (
                <StyledFormikForm>
                  <h4>Add new task</h4>
                  <div>
                    <Field
                      name="title"
                      type="text"
                      className={`form-control ${
                        errors.title && touched.title && "is-invalid"
                      }`}
                      placeholder="Enter title"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    ></Field>
                    {!isValid && focused && (
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
                </StyledFormikForm>
              )
            }}
          </Formik>
        </div>
      </div>
    </StyledForm>
  )
}
