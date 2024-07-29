import React, { useState } from "react";

export default function AgeCalculator() {
  //BirthDate inputs
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [active, setActive] = useState(false);

  //computed Age value
  const [myDate, setMyDate] = useState();
  const [myMonth, setMyMonth] = useState();
  const [myYear, setMyYear] = useState();

  //Get current DateTime
  const current = new Date();

  const currentDate = current.getDate();
  const currentMonth = current.getMonth() + 1;
  const currentYear = current.getFullYear();

  const handleSubmit = () => {
    let myDate;
    let myMonth;
    let myYear;
    //Computed Date

    if (date == "" || !date || month == "" || !month || year == "" || !year) {
      alert("All input value must contain a valid date");
    } else {
      currentDate > date
        ? (myDate = currentDate - date)
        : (myDate = date - currentDate);
      // alert(myDate);
      setMyDate(myDate);

      //Computed Month 7 > 5
      currentMonth > month
        ? (myMonth = currentMonth - month)
        : (myMonth = month - currentMonth);

      setMyMonth(myMonth);

      //Computed Year
      currentYear > year
        ? (myYear = currentYear - year)
        : (myYear = year - currentYear);
      if (month < 12 - currentMonth) {
        //Computed Year Before Birth Month
        setMyYear(myYear - 1);
      } else {
        //Computed Year After Birth Month
        setMyYear(myYear);
      }

      setActive(true);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-lvh bg-blue-500">
        <div className="font-oleo  bg-gray-300 h-96 w-96 rounded-lg overflow-hidden tracking-widest">
          <header className="flex justify-center items-center h-16 bg-gray-100 mb-5 border-b-2 border-gray-400 ">
            <p className="text-2xl text-purple-900">Age Calculator</p>
          </header>
          <main className="flex flex-col  items-center">
            <form className="flex text-blue-500 justify-center gap-3 mt-8">
              <div className=" w-28">
                <label htmlFor="date">Date</label>
                <input
                  type="number"
                  max={31}
                  min={1}
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-28 border-blue-500 border-2 h-10 p-3"
                />
              </div>
              <div className=" w-28">
                <label htmlFor="month">Month</label>
                <input
                  type="number"
                  max={12}
                  min={1}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  id="month"
                  className="w-28 border-blue-500 border-2 h-10 p-3"
                />
              </div>
              <div className=" w-28">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  max={2024}
                  min={1900}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  id="year"
                  className="w-28 border-blue-500 border-2 h-10 p-3"
                />
              </div>
            </form>
            <button
              className="w-30 bg-blue-600 text-gray-200 w-32 h-10 my-12"
              onClick={handleSubmit}
            >
              Submit
            </button>

            <p className="tracking-wider text-purple-900 text-lg">
              {active &&
                `Your Age is ${myYear} Years ${myMonth} Months ${myDate} Days`}
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
