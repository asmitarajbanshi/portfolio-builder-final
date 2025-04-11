import React, { useEffect, useState } from "react";

const SocialMedia = ({ MediaData, value, onChange, readOnly }) => {
  const [allFieldsFilled, setAllFieldsFilled] = useState(0);

  useEffect(() => {
    const filledFields = Object.values(value).filter(v => v).length;
    if (filledFields === 7) {
      setAllFieldsFilled(7); // All fields filled
    } else if (filledFields > 0) {
      setAllFieldsFilled(1); // Some fields filled
    } else {
      setAllFieldsFilled(0); // No fields filled
    }
  }, [value]);

  return (
    <div
      className={`my-4 border rounded-md flex flex-col ${
        allFieldsFilled === 7
          ? "border-green-500"
          : allFieldsFilled === 0
          ? ""
          : "border-yellow-500"
      } p-3 my-2`}
    >
      {Object.keys(MediaData).map((md) => (
        <div key={md}>
          <label
            htmlFor={md}
            className="dark:text-gray-200 text-xs block py-1 font-medium"
          >
            {MediaData[md][1]}
          </label>
          <input
            type={MediaData[md][0]}
            className="dark:bg-zinc-800 form-control block w-full md:w-90 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
            id={md}
            name={md}
            onChange={onChange}
            value={value[md]}
            placeholder={`Enter something for ${MediaData[md][1]}`}
            readOnly={readOnly}
          />
          {MediaData[md][2] && (
            <small
              id={`${md}-help`}
              className="dark:text-gray-400 text-gray-500 text-xs"
            >
              {MediaData[md][2]}
            </small>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
