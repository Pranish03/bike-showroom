import { useState } from "react";
import { Button } from "../../components/Button";
import { axios } from "../../lib/axios";
import toast from "react-hot-toast";

export const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);
      await axios.post("/contact", formValue);
      toast.success("Thankyou for contacting!");

      setFormValue({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error.response.data.error);
      toast.error("All fields are required");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-300 mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">Contact Us</h2>
      <form className="space-y-4 w-125 mx-auto mb-15" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name" className="text-lg block mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.name}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, name: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="email" className="text-lg block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.email}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, email: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="subject" className="text-lg block mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Enter subject"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.subject}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, subject: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="message" className="text-lg block mb-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Enter your message"
            className="w-full min-h-50 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.message}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, message: e.target.value }))
            }
          />
        </div>

        <Button
          className="bg-green-600 hover:bg-green-700 w-full"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
};
