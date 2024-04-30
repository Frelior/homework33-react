export default function Button({
  className,
  children,
  onClick = null,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      type="button"
      className={className ? className : "btn btn-warning my-2"}
    >
      {children}
    </button>
  )
}
