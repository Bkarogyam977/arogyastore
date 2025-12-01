import { ERROR_MSG_TYPE, SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { displayMessage, getAPI, postAPI } from "@/dataarrange/utils/common"



const AddtoCartproduct = (customer_id, productlist, tokendata = null, domainid = null) => {
  
    const reqdata = {
        'customer_id' : customer_id.user.id,
        'productlist' : productlist,

    }
    if (tokendata !== null){
      reqdata['tracking_id'] = tokendata
    }
    if (domainid !== null){
      reqdata['domaintracking'] = domainid
    }
  const  successfn = (data) =>{
    displayMessage(SUCCESS_MSG_TYPE, "Successfully Added");
      
  }
  const errorfn = () => {

    displayMessage(ERROR_MSG_TYPE, "Something went wrong")
    
  }
  postAPI(`inv_cart/addtocart/`,reqdata, successfn, errorfn)
}

export default AddtoCartproduct;