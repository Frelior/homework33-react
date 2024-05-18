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
    <StyledForm>
      <div className={"card"}>
        <div className="card-body">
          <Formik
            initialValues={{ title: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ errors, touched }) => <Form></Form>}
          </Formik>
        </div>
      </div>
    </StyledForm>
  )
}

export default TaskForm
