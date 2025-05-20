"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2,"First name í required").max(50),
  lastName: z.string().min(2,"Last name is required").max(50),
    email: z.string().email("Invalid email address"),
    message: z.string().min(5,"Message is too short"),
})



export default function Footer ()  {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
        message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()
  }
  return (
    <div className="flex justify-center text-indigo-950 py-3 ">
        <div className="flex justify-center text-indigo-950 py-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-xl w-full">
          <hr />
          <div className="flex justify-center text-2xl font-bold mb-4">
            <h1>Drop Me a Line, Let Me Know What You Think</h1>
          </div>
          <div className="flex flex-row gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>Thank you so much!!!</FormDescription>
          <Button type="submit" className="w-full hover:bg-gray-600 cursor-pointer">
            Submit
          </Button>
        </form>
      </Form>
    </div>
    </div>
  )
}