const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

import { useState } from "react";

export default function Example() {
  const [title, setTitle] = useState("TOO TOO SO CUTE");
  const [sales, setSales] = useState(0);
  return (
    <div className="relative isolate overflow-hidden bg-orange-50 py-24 sm:py-32">
      <img
        src="3bears-4.jpg"
        alt=""
        className="absolute inset-0 -z-10 w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            加入成為兔兔的一份子
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            想要擁有一個兔兔般可愛的生活嗎？加入我們兔兔幫，讓我們一起齊心卯起來，從清晨的胡蘿蔔早餐到夜晚的草地派對，讓我們的生活充滿歡笑與奇遇！記得，當你加入兔兔幫，你就不僅僅是一個小兔兔，而是一位正義的兔兔武士，準備好與其他幫派展開搞怪又可愛的戰鬥！快來，讓我們的大家庭更加繽紛有趣吧！🐰💥
          </p>
        </div>

        <div>
          <table>
            <tr>
              <td>
                <div className="mockup-phone mx-10">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1 ">
                      <b>這是一張示意圖，假如您擁有一隻兔子</b>
                      <figure>
                        <img src="bath2.png" alt="tootoo" />
                      </figure>
                      <b>您可以跟它一起洗澡，度過美好時光</b>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10 rounded-lg">
                  <figure>
                    <img src="tootoocry2.jpg" alt="Dogs" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>想要來一隻可愛兔子嗎 ? </p>

                    <span className="countdown font-mono text-2xl">
                      <span style={{ "--value": 10 }}></span>h
                      <span style={{ "--value": 24 }}></span>m
                      <span style={{ "--value": 33 }}></span>s
                    </span>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs my-5"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSales(sales + 1);
                        }}
                      >
                        我要買一隻
                      </button>
                    </div>

                    <div>已賣出{sales}隻</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="mx-10 my-10">
                  <b>真實顧客回饋</b>
                </div>

                <div className="chat chat-start mx-10">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="donut2.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    真的太好吃了 ! 從來沒有吃過的味道 !
                  </div>
                </div>
                <div className="chat chat-start mx-10">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="bubblecat3-2.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    每天都被它治癒了 ~ 世界第一可愛 ! 都不想去上班了zzz
                  </div>
                </div>
                <div className="chat chat-start mx-10">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="star1.png"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    怎麼這麼可愛 ! 這是違法的吧 ♥{" "}
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
