"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";

export default function AddTransactions() {
  const initialValues: any = {
    description: "",
    amount: "",
    category: "",
    date: "",
  };
  const TransactionSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.date().required("Date is required"),
  });

//   const handleSubmit = async (
//     values: any,
//     { resetForm }: FormikHelpers<any>
//   ) => {
//     try {
//       const response = await fetch("http://localhost:4000/transactions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...values,
//           amount: Number(values.amount), // convert to number
//         }),
//       });

//       if (response.ok) {
//         alert("Transaction added successfully!");
//         resetForm();
//       } else {
//         alert("Something went wrong.");
//       }
//     } catch (error) {
//       console.error("POST error:", error);
//       alert("Error connecting to server.");
//     }
//   };

const handleSubmit = () => {
    console.log("Form submitted");
}
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-2xl mb-2">Add Transaction</h1>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={TransactionSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-200"
          >
            Add Transaction
          </button>
        </Form>
      </Formik>
    </div>
  );
}
