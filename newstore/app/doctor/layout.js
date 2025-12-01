
import { Inter } from 'next/font/google'

import LayoutDoctor from './Doctorlay'



const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Arogya Doctors',
  description: 'Arogya Doctor at Bk Arogya ERP',
}

export default function DoctorRootLayout({ children }) {
  
  return (
    <LayoutDoctor  >

      {children}
    </LayoutDoctor>
       
  )
}
