import instance from "./instance";

const service = {
  sendMail: async (data) => {
    try {
      const response = await instance.post("/send", data);
      return { status: response.status, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response };
    }
  },
};

export default service;
