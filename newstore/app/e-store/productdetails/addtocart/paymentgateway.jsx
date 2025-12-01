'use client'
import { postAPI } from '@/dataarrange/utils/common'
import React, { useState ,useRef, useEffect} from 'react'
import { useCustContext } from '../../provider';

export const PaymentGatewayIframe = ({userdata}) => {
    // const { customerdata, userdata, loading, error } =  useCustContext();
    const [paymentencdata, setPaymentencdata] = useState()
    const iframeRef = useRef(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);


    const requestpaymentData = (amount) => {

        const data = {
            "merchant_id":"3465332",
            "amount": amount,
            "redirect_url":
            'https://healdiway.bkarogyam.com/erp-api/paymentgateway/response_handler/',
            "cancel_url":
                "https://healdiway.bkarogyam.com/erp-api/paymentgateway/response_handler/",
            "language": "EN",
            "currency": "INR",
            "user_id": userdata.user.id.toString() 
        }


        const successfn = (data) => {
            console.log(data)

            setPaymentencdata(data)

        }
        const errorfn = (data) => {

        }
        postAPI('paymentgateway/request_handler/', data, successfn, errorfn)
    }

    
 
    const handleIframeMessage = (event) => {
        if (event.origin !== 'https://your-payment-gateway.com') return;
    
        const { status } = event.data;
    
        if (status === 'success' || status === 'failure') {
          handlePaymentStatus(status);
        }
      };
    
      const handlePaymentStatus = (status) => {
        fetch('/api/payment/response_handler', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: status,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(`Payment ${status}:`, data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
    
      useEffect(() => {

        
        // if (iframeLoaded && iframeRef.current) {
        //     const iframeDoc = iframeRef.current.contentWindow.document;
        //     const html = paymentencdata;
        //     iframeDoc.open();
        //     iframeDoc.write(html);
        //     iframeDoc.close();
        //   }




        // window.addEventListener('message', handleIframeMessage);
    
        // return () => {
        //   window.removeEventListener('message', handleIframeMessage);
        // };
      }, [iframeLoaded]);
      useEffect(()=>{
        requestpaymentData(2)  
      },[])

    return ( 

        <div>
            {/* {paymentencdata && `${paymentencdata.encReq} = ${paymentencdata.xscode}`} */}
      { paymentencdata && <iframe 
        ref={iframeRef}
        src={`https://secure.ccavenue.com/transaction.do?command=initiateTransaction&merchant_id=3465332&encRequest=${paymentencdata.encReq}&access_code=${paymentencdata.xscode}`}
        title="Payment Gateway"
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        onLoad={() => setIframeLoaded(true)}

      ></iframe> }
      </div>
  )
}
