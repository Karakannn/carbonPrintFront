import { ErrorMessage, Field } from 'formik'
import { ReactNode } from 'react'

type FormikSelectProps = {
    children: ReactNode,
    name: string
    label: string
}
export default function FormikSelect({ label, children, name }: FormikSelectProps) {
    return (
        <div className="custom-input">
            <label htmlFor="question1">{label}</label>

            <Field as="select" name={name}>
                {children}
            </Field>
            <ErrorMessage name={name} />
        </div>
    )
}
