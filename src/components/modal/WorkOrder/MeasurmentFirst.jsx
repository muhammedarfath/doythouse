import React from "react";

function MeasurmentFirst({
  section2Ref,
  yokeLength,
  setYokeLength,
  yokeRound,
  setYokeRound,
  fullLength,
  setFullLength,
  upperBust,
  setUpperBust,
  bust,
  setBust,
  underBust,
  setUnderBust,
  midWaist,
  setMidWaist,
  hip,
  setHip,
  shoulder,
  setShoulder,
  shoulderWidth,
  setShoulderWidth,
  slitLength,
  setSlitLength,
  slitRound,
  setSlitRound,
  sleeveType,
  setSleeveType,
  sleeveLength,
  setSleeveLength,
  wrist,
  setWrist,
  threeFourth,
  setThreeFourth,
  elbow,
  setElbow,
  armRound,
  setArmRound,
  armHole,
  setArmHole,
  neck,
  setNeck,
  frontNeck,
  setFrontNeck,
  backNeck,
  setBackNeck,
  collarRound,
  setCollarRound,
  tuckPoint,
  setTuckPoint,
  pointToPoint,
  setPointToPoint
}) {
  return (
    <div className="lg:w-1/3 md:w-1/3" ref={section2Ref}>
      <div className="text-lg font-semibold mb-4">Measurements:</div>
      <table className="min-w-full border-collapse">
        <tbody>
          <tr>
            <th className="border p-2 text-left">Yoke Length</th>
            <td>
              <input
                value={yokeLength}
                onChange={(e) => setYokeLength(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Yoke Round</th>
            <td>
              <input
                value={yokeRound}
                onChange={(e) => setYokeRound(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Full Length</th>
            <td>
              <input
                value={fullLength}
                onChange={(e) => setFullLength(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Upper Bust</th>
            <td>
              <input
                value={upperBust}
                onChange={(e) => setUpperBust(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Bust</th>
            <td>
              <input
                value={bust}
                onChange={(e) => setBust(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Under Bust</th>
            <td>
              <input
                value={underBust}
                onChange={(e) => setUnderBust(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Mid Waist</th>
            <td>
              <input
                value={midWaist}
                onChange={(e) => setMidWaist(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Hip</th>
            <td>
              <input
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Shoulder</th>
            <td>
              <input
                value={shoulder}
                onChange={(e) => setShoulder(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Shoulder Width</th>
            <td>
              <input
                value={shoulderWidth}
                onChange={(e) => setShoulderWidth(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Slit Length</th>
            <td>
              <input
                value={slitLength}
                onChange={(e) => setSlitLength(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Slit Round</th>
            <td>
              <input
                value={slitRound}
                onChange={(e) => setSlitRound(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Sleeve Type</th>
            <td>
              <input
                value={sleeveType}
                onChange={(e) => setSleeveType(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Sleeve Length</th>
            <td>
              <input
                value={sleeveLength}
                onChange={(e) => setSleeveLength(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Wrist</th>
            <td>
              <input
                value={wrist}
                onChange={(e) => setWrist(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">3/4th</th>
            <td>
              <input
                value={threeFourth}
                onChange={(e) => setThreeFourth(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Elbow</th>
            <td>
              <input
                value={elbow}
                onChange={(e) => setElbow(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Arm Round</th>
            <td>
              <input
                value={armRound}
                onChange={(e) => setArmRound(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Arm Hole</th>
            <td>
              <input
                value={armHole}
                onChange={(e) => setArmHole(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Neck</th>
            <td>
              <input
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">F/N</th>
            <td>
              <input
                value={frontNeck}
                onChange={(e) => setFrontNeck(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">B/N</th>
            <td>
              <input
                value={backNeck}
                onChange={(e) => setBackNeck(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Collar Round</th>
            <td>
              <input
                value={collarRound}
                onChange={(e) => setCollarRound(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Tuck Point</th>
            <td>
              <input
                value={tuckPoint}
                onChange={(e) => setTuckPoint(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
          <tr>
            <th className="border p-2 text-left">Point to Point</th>
            <td>
              <input
                value={pointToPoint}
                onChange={(e) => setPointToPoint(e.target.value)}
                type="text"
                className="md:p-6 lg:p-2 p-2 border w-[9rem] focus:ring-2 focus:ring-[#000] focus:ring-offset-0 outline-none"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MeasurmentFirst;
