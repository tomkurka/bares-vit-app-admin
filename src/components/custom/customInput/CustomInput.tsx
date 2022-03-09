import React from "react"
import "./customInput.scss"

interface CustomInputProps {
  value: string
  onChange: () => void
  className?: string
  style?: React.CSSProperties
  name?: string
  required?: boolean
  type?: string
}

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  className,
  style,
  name,
  required,
  type,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={`input input-custom ${className}`}
      style={style}
      name={name}
      required={required}
      type={type}
      autoComplete="on"
    />
  )
}

export default CustomInput

interface CustomInputWithLabelProps {
  value: string
  onChange: any
  className?: string
  style?: React.CSSProperties
  name?: string
  required?: boolean
  label: string
  type?: string
}

export const CustomInputWithLabel: React.FC<CustomInputWithLabelProps> = ({
  value,
  onChange,
  className,
  style,
  name,
  required,
  label,
  type,
}) => {
  return (
    <div className="input-with-label">
      <div className="label">{label}</div>
      <CustomInput
        value={value}
        onChange={onChange}
        className={`input input-custom ${className}`}
        style={style}
        name={name}
        required={required}
        type={type}
      />
    </div>
  )
}
