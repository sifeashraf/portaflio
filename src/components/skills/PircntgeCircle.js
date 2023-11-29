function Percentgecircle({ colors, off, boxShadow, skill, id }) {
  //will calc and get number to cover the circle like 285
  let calc = 440 - (440 * off) / 100;
  let countup = 0;
  let intarvel = setInterval(() => {
    countup++;
    document.getElementById(`${id}`).innerHTML = countup + "%";
    if (countup === off) {
      clearInterval(intarvel);
    }
  }, 60);
  return (
    <div className="card-box">
      <div className="card">
        <div
          className="percent"
          style={{ "--dot-shadow-color": boxShadow, "--off-percent": calc }}
        >
          {/* <div
          dot dont romve cause its cool but not good for this design
          className="dot"
          style={{
            transform: `rotate(${3.6 * off}deg)`,
          }}
          ></div> */}

          <svg>
            <defs>
              <linearGradient
                id="paint0_linear_16_344"
                x1="-12.4348"
                y1="91.2145"
                x2="228.124"
                y2="92.098"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AA367C" />
                <stop offset="1" stopColor="#4A2FBD" />
              </linearGradient>
            </defs>
            <circle cx={75} cy={75} r={75} fill="transparent"></circle>

            <circle fill="transparent" cx={75} cy={75} r={75}></circle>
          </svg>
          <div className="number">
            <h2 id={id}></h2>
            <p>{skill}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Percentgecircle;
