export default function Button({
  className = "btn btn-warning my-2",
  children = "Button",
  onClick = null,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      type="button"
      className={className}
    >
      {children}
    </button>
  )
}
