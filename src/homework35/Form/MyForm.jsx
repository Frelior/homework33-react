import { StyledForm } from "./StyledForm"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const TaskForm = () => {
  //adding value from input to local storage
  function addTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    task.completed = false
    task.id = tasks.length + 1
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  return (
    <StyledForm>
      <div className={"card"}>
        <div className="card-body">
          <Formik
            initialValues={{ title: "" }}
            onSubmit={(values) => addTaskToLocalStorage(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="title">Task</label>
                <Field
                  name="title"
                  type="text"
                  className={`form-control ${
                    touched.title && errors.title && "is-invalid"
                  }`}
                  placeholder="Enter title"
                ></Field>
                <button type="submit">Add</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </StyledForm>
  )
}

export default TaskForm
