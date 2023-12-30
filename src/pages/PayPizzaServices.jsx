class PayPizzaServices{
   
  getPayOrder = async () => {
     try {
       let result = await fetch("http://127.0.0.1:7000/get-all-pay-pizza");
       result = await result.json();
       return result;
     } catch (error) {
       console.error("Error:", error);
     }
   };

   deletePayPizzaOrder = async (id) => {
     try {
       let result = await fetch(`http://127.0.0.1:7000/delete-pay-pizza-order/${id}`, {
         method: "Delete",
       });
       result = await result.json();
       return result;
     } catch (error) {
       console.error("Error:", error);
     }
   };

   deletePizza = async (total) => {
     try {
       let result = await fetch(`http://127.0.0.1:7000/delete-pay-pizza/${total}`, {
         method: "DELETE",
       });
       result = await result.json();
       return result;
     } catch (error) {
       console.error("Error:", error);
     }
   };
   
   getPayPizzaOrder = async (_id) => {
     try {
       let result = await fetch(`http://127.0.0.1:7000/get-pay-pizza/${_id}`);
       result = await result.json();
       return result;
     } catch (error) {
       console.error("Error:", error);
     }
   }; 
  
   addPayPizza = async (data) => {
   try {
     let result = await fetch("http://127.0.0.1:7000/add-pay-pizza", {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json",
       },
     });
     result = await result.json();
     return result;
   } catch (error) {
     console.error("Error:", error);
   }
 };
 

}

export default new PayPizzaServices();