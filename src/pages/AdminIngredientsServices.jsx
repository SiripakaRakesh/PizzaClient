class AdminIngredientsServices {

  getIngredients = async () => {
      try {
        const response = await fetch("http://127.0.0.1:7000/all-pizza-ingredients");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    deleteIngredient = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:7000/admin/update/ingredients/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    };

    getIngredientsDetails = async (id) => {
      try {
        const response = await fetch(`http://127.0.0.1:7000/get-ingredients-custom-pizza/${id}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };

    updateIngredients=async (id,base,cheese,Veggies,sauce)=>{
      let result=await fetch(`http://127.0.0.1:7000/update-ingredients-custom-pizza/${id}`,{
          method:'put',
          body:JSON.stringify({base,cheese,Veggies,sauce}),
          headers:{
              "Content-Type":"application/json"
          }
      });
      result=  await result.json();
      
       return result;
      
  }


}

export default new AdminIngredientsServices();