import * as Yup from "yup";

export function initialValues(fristname, lastname) {
    return {
        fristname,
        lastname,

    };
}

export function validationSchema(){
    return Yup.object({
        fristname: Yup.string().required(true),
        lastname: Yup.string().required(true),
    });
}