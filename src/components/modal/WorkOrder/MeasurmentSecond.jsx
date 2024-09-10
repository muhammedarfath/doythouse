import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function MeasurmentSecond({
  section3Ref,
  skirtFullLength,
  setSkirtFullLength,
  seat,
  setSeat,
  thigh,
  setThigh,
  knee,
  setKnee,
  calf,
  setCalf,
  bottomRound,
  setBottomRound,
  zip,
  setZip,
  handleCheckboxChange,
  pad,
  setPad,
  backOpen,
  setBackOpen,
  frontOpen,
  setFrontOpen,
  handleFileChange,
}) {
  return (
    <div
      className="lg:w-1/3 md:w-1/3 mt-10 flex flex-col gap-8"
      ref={section3Ref}
    >
      <div>
        <div className="flex border p-3 justify-center">
          <h1 className="text-lg font-semibold mb-4">SKIRT & PANT:</h1>
        </div>
        <table className="min-w-full border-collapse">
          <tbody>
            <tr>
              <th className="border p-2 text-left">Full length</th>
              <td>
                <input
                  value={skirtFullLength}
                  onChange={(e) => setSkirtFullLength(e.target.value)}
                  type="text"
                  className="p-2 border w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="border p-2 text-left">Seat</th>
              <td>
                <input
                  value={seat}
                  onChange={(e) => setSeat(e.target.value)}
                  type="text"
                  className="p-2 border w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="border p-2 text-left">Thigh</th>
              <td>
                <input
                  value={thigh}
                  onChange={(e) => setThigh(e.target.value)}
                  type="text"
                  className="p-2 border w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="border p-2 text-left">Knee</th>
              <td>
                <input
                  type="text"
                  value={knee}
                  onChange={(e) => setKnee(e.target.value)}
                  className="p-2 border w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="border p-2 text-left">Calf</th>
              <td>
                <input
                  type="text"
                  value={calf}
                  onChange={(e) => setCalf(e.target.value)}
                  className="p-2 border w-full"
                />
              </td>
            </tr>
            <tr>
              <th className="border p-2 text-left">Bottom Round</th>
              <td>
                <input
                  type="text"
                  value={bottomRound}
                  onChange={(e) => setBottomRound(e.target.value)}
                  className="p-2 border w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="min-w-full border-collapse">
        <div className="flex flex-col gap-7 border p-1">
          <div className="flex gap-7 items-center">
            <div className="border p-2 px-8 text-left">Zip</div>
            <IoMdArrowRoundForward />
            <input
              checked={zip}
              onChange={handleCheckboxChange(setZip)}
              className="w-8 h-8"
              type="checkbox"
            />
          </div>
          <div className="flex gap-7 items-center">
            <div className="border p-2 px-8 text-left">Pad</div>
            <IoMdArrowRoundForward />
            <input
              checked={pad}
              onChange={handleCheckboxChange(setPad)}
              className="w-8 h-8"
              type="checkbox"
            />
          </div>
          <div className="flex lg:gap-7 gap-4 items-center">
            <div className="border p-2 text-left">Back Open</div>
            <IoMdArrowRoundForward />
            <input
              checked={backOpen}
              onChange={handleCheckboxChange(setBackOpen)}
              className="w-8 h-8"
              type="checkbox"
            />
            <div className="border p-2 text-left">Front Open</div>
            <IoMdArrowRoundForward />
            <input
              checked={frontOpen}
              onChange={handleCheckboxChange(setFrontOpen)}
              className="w-8 h-8"
              type="checkbox"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="picture">Picture</label>
            <input id="picture" type="file" onChange={handleFileChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurmentSecond;
