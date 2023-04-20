import { Form } from "semantic-ui-react" ;
import { useFormik } from "formik";
import { useAuth } from "@/hooks";
import {initialValues, validationSchema} from "./ChangeNameForm.form"
import styles from "./ChangeNameForm.module.scss"

export  function ChangeNameForm() {

  const { user } = useAuth();
 

   const formik = useFormik ({
    initialValues: initialValues(user.fristname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      try {
        console.log("FORM ENVIADO")
        console.log(formValue)
      } catch (error) {
        console.error(error);
      }
    }
   })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre  </label>
      <div className={styles.content}>
        <Form.Input 
        name= "fristname" 
        placeholder ="Nombre "
        value={formik.values.fristname} 
        onChange={formik.handleChange}
        error={formik.errors.fristname}/>
         <Form.Input 
        name= "lastname" 
        placeholder ="Apellidos"
        value={formik.values.lastname} 
        onChange={formik.handleChange}
        error={formik.errors.lastname}/>
        <Form.Button type= "submit" loading={formik.isSubmitting}>Enviar</Form.Button>
      </div>
    </Form>
  )
}
