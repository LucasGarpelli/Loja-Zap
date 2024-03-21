'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from '@/components/ui/progress';
import StepUser from './step-user';
import StepAddress from './step-address';
import StepFinish from './step-finish';
import { CheckoutSteps } from '@/types/checkout-steps';




type Props = {
    open: boolean,
    onOpenChange: (open: boolean) => void
}


const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');

    let progressPct = 0;

    switch (step) {
        case 'user': progressPct = 33;
            break;
        case 'address': progressPct = 66;
            break;
        case 'finish': progressPct = 100;
            break;

    }


    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de Entrega'}
                        {step === 'finish' && 'Envio para WhatsApp'}
                    </DialogTitle>
                    <DialogDescription>
                        <Progress value={progressPct} className='my-2' />
                        <div className='flex flex-col gap-3 '>
                            {step === 'user' && <StepUser setStep={setStep} />}
                            {step === 'address' && <StepAddress setStep={setStep} />}
                            {step === 'finish' && <StepFinish  />}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CheckoutDialog