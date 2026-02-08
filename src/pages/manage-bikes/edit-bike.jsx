import { useState } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export const EditBike = () => {
  const [formValue, setFormValue] = useState({
    name: "Thunderbolt Rider",
    price: "90,000",
    companyName: "Thunderbolt",
    image: null,
    description:
      "Unleash the power of lightning as you speed through the streets. Built with a lightweight yet durable frame, it delivers smooth handling and stable performance across city roads and highways. The ergonomic seating position ensures comfort on long rides, while the responsive braking system provides confidence and control in all conditions.",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="max-w-300 mx-auto">
      <div className="text-lg mt-10">
        <Link to="/manage-bikes" className="flex items-center gap-1">
          <IoIosArrowRoundBack size={30} />
          <span className="hover:underline">Back</span>
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-center mb-10">Edit Bikes</h2>
      <form className="space-y-4 w-125 mx-auto mb-15" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-lg block mb-1">
            Bike name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter bike name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.name}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, name: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="price" className="text-lg block mb-1">
            Bike price
          </label>
          <input
            id="price"
            type="text"
            placeholder="Enter bike price"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.price}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, price: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="company" className="text-lg block mb-1">
            Company name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Enter company name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.companyName}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, companyName: e.target.value }))
            }
          />
        </div>

        <div>
          <label htmlFor="image" className="text-lg block mb-1">
            Bike image
          </label>
          <input
            id="image"
            type="file"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) =>
              setFormValue((p) => ({
                ...p,
                image: e.target.files?.[0] || null,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="description" className="text-lg block mb-1">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter bike description"
            type="text"
            className="w-full min-h-50 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formValue.description}
            onChange={(e) =>
              setFormValue((p) => ({ ...p, description: e.target.value }))
            }
          />
        </div>

        <Button className="bg-green-600 hover:bg-green-700 w-full">
          Edit Bike
        </Button>
      </form>
    </div>
  );
};
