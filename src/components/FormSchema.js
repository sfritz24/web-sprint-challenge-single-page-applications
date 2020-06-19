import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Must be at least 2 characters long.")
      .required("Must include name."),
    size: yup
      .string()
      .oneOf(["individual", "small", "medium", "large", "family"], "Please select a size."),
    instructions: yup
        .string()
        .max(150, "Can not exceed 150 characters.")
  })
  
  export default formSchema