import { Field, ErrorMessage } from "formik"

export default function FormField({ name, type, warning = false }) {
  return (
    <div className="form-group">
      <div className="form-text-section">
        <label htmlFor={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <ErrorMessage
          className="text-danger"
          name={name}
          component="small"
        />
      </div>
      <Field
        className={`form-control ${warning ? "is-invalid" : ""}`}
        type={type}
        id={name}
        name={name}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      ></Field>
    </div>
  )
}
