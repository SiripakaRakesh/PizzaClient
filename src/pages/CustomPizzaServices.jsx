class CustomPizzaServices{
       
  getCustomOrder = async () => {
      try {
        let result = await fetch("http://127.0.0.1:7000/get-custom-pizza");
        result = await result.json();
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    };

  deleteOrder = async (id) => {
      try {
        let result = await fetch(`http://127.0.0.1:7000/delete-custom-pizza/${id}`, {
          method: "Delete",
        });
        result = await result.json();
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    };

  deleteCustomPizza = async (total) => {
      try {
        let result = await fetch(`http://127.0.0.1:7000/delete-custom-pizza-price/${total}`, {
          method: "DELETE",
        });
        result = await result.json();
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    };

    addCustomPizza = async (base,sauce,cheese,Veggies,price,userId) => {
      try {
        let result = await fetch("http://127.0.0.1:7000/add-custom-pizza", {
          method: "post",
          body: JSON.stringify({ base, sauce, cheese, Veggies, price, userId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    };

    getCustomOrderId = async (_id) => {
      try {
        let result = await fetch(`http://127.0.0.1:7000/get-custom-pizza/${_id}`);
        result = await result.json();
        return result;
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
}

export default new CustomPizzaServices();