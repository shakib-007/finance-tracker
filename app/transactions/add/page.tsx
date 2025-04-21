"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number | string;
}

const initialValues: Transaction = {
  date: "",
  description: "",
  category: "",
  amount: "",
};

export default function AddTransactions() {
  const {
    handleSubmit,
    getFieldProps,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
    setFieldValue,
    setErrors,
  } = useFormik({
    initialValues,

    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      amount: Yup.number().required("Amount is required"),
    }),

    onSubmit: (values: Transaction) => {
      const formData = new FormData();
      console.log(values);
    },
  });

  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl mb-2">Add Transaction</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 border border-gray-300 bg-white shadow-md rounded-lg space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2">
            Category
          </label>
          <select
            {...getFieldProps("category")}
            className="border border-gray-300 rounded-lg p-3"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Salary">Salary</option>
            <option value="Rent">Rent</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>
          {touched.category && errors.category && (
            <div className="text-red-500">{errors.category as string}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="mb-2">
            Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg p-2"
            {...getFieldProps("date")}
          />
          {touched.date && errors.date && (
            <div className="text-red-500">{errors.date as string}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-2">
            Amount
          </label>
          <input
            type="number"
            className="border border-gray-300 rounded-lg p-2"
            {...getFieldProps("amount")}
          />
          {touched.amount && errors.amount && (
            <div className="text-red-500">{errors.amount as string}</div>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2"
            {...getFieldProps("description")}
          />

          {touched.description && errors.description && (
            <div className="text-red-500">{errors.description as string}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-200 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
