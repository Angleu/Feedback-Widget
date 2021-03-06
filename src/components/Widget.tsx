import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
export function Widget() {
    return (
        <Popover className='absolute bottom-5 right-5'>
            <Popover.Panel>Olá Mundo</Popover.Panel>
            <Popover.Button className='bg-brand-500 px-3 h-12 text-white rounded-full flex items-center group'>
                <ChatTeardropDots className='h-6 w-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear'>
                    <span className='pl-2'>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )
}