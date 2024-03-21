import { CheckoutSteps } from '@/types/checkout-steps'
import React, { Dispatch } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkout-store'
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
type Props = {
  setStep: Dispatch<React.SetStateAction<CheckoutSteps>>,
}
const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome').max(50),
})

const StepUser = ({ setStep }: Props) => {
  const { name, setname } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setname(values.name);
    setStep('address')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Nome</FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  placeholder="Qual seu nome?"
                  {...field} />
              </FormControl>
              <FormDescription>
               
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant='outline' type="submit">Próximo</Button>
      </form>
    </Form>
  )
}

export default StepUser