import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    card: Yup.string()
    .min(11, "Card number must be 11-16 characters")
    .max(16, "Card number must be 11-16 characters")
    .required("Enter the card number"),
    cvrCard: Yup.string()
    .length(3, "CVR must be 3 characters")
    .required("Enter the CVV "),
    dateCard: Yup.string()
    .matches(/\d{2}\/\d{2}/, "Enter date of form 01/11")
    .required("Enter the Expiration Date"),
    amount: Yup.number()
    .required("Enter the Expiration Amount")
});
export default BasicFormSchema;
