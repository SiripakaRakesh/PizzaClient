class CountServices {
  getCount = async () => {
    try {
      const response = await fetch("http://127.0.0.1:7000/get-count");
      const result = await response.json();
      return result.count;
    } catch (error) {
      console.error(error);
    }
  };

  updateCount = async () => {
    try {
      await fetch("http://127.0.0.1:7000/update-count", {
        method: "POST",
        body: JSON.stringify({ count: 1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  addCount = async (count) => {
    try {
      let result = await fetch("http://127.0.0.1:7000/add-count", {
        method: "post",
        body: JSON.stringify({ count }),
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


}

export default new CountServices();