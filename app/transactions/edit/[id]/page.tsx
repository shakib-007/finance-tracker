"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const initialValues: Transaction = {
  id: "",
  date: "",
  description: "",
  category: "",
  amount: "",
};

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function EditTransaction({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params); 

  const router = useRouter();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transactions/${id}`);
        const data = await res.json();
        setValues(data);
      } catch (err) {
        toast.error("Failed to fetch transaction. Please try again.");
      }
    };

    fetchTransaction();
  }, [id]);

  const {
    handleSubmit,
    getFieldProps,
    handleChange,
    handleBlur,
    setValues,
    values,
    touched,
    errors,
    resetForm,
    setFieldValue,
    setErrors,
  } = useFormik({
    initialValues,

    validationSchema: Yup.object({
      date: Yup.date().required("Date is Required!"),
      description: Yup.string().required("Description is Required!"),
      category: Yup.string().required("Category is Required!"),
      amount: Yup.number().required("Amount is Required!"),
    }),

    onSubmit: async (values: Transaction) => {
      try {
        const response = await fetch(`${API_URL}/transactions/${values.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
    
        if (!response.ok) {
          throw new Error("Failed to Update data");
        }

        toast.success("Transaction updated successfully!");

        router.push('/transactions');

        resetForm();

      } catch (error) {
        toast.error("Failed to update transaction. Please try again.");
      }
    },
  });

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Update Transaction</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 border border-gray-300 bg-blue-50 shadow-md rounded-lg space-y-4"
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
