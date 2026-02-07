import React from "react";
import "../stylings/dashboard.css";
import RecentTransactions from "./RecentTransaction";
import "../mobile/dassh.css";

import BusinessPayments from "./BusinessPayments";
import ImageCarousel from "./ImageCarousel";


const Dashboard = ({
  onSendMoney,
  onViewTransactions,
  onCheckBalance,
  onBankTransfer,
  mobileRecharge,reedem,card

}) => {

  const unavailable=()=>{
    alert('not available')
  }
  return (
    <div className="dashboard">
      <div className="q-section">
        <div className="q-left">
          <div
            className="mobile curs cut"
            onClick={() => alert("not available")}
          >
            <div className="qr-i">
              <img src="/images/qr.png" alt="img" className="qr-img" />
            </div>

            <div className="scan-btn curs d">
              Scan any <br />
              QR code
            </div>
          </div>
          <div className="bank-transf curs" onClick={onBankTransfer}>
            <div className="bank">
              <img src="/images/transfer.jpeg" alt="" className="qr-imgs" />
            </div>
            <div className="curs d">Bank Transfer</div>
          </div>
          <div className="mobile curs" onClick={mobileRecharge}>
            <div className="mobi">
              <i class="fa-solid fa-mobile mob"></i>
            </div>
            <div className="curs d">Mobile Reacharge</div>
          </div>
          <div className="mobile curs" onClick={onCheckBalance}>
            <div className="mobi">
              <i class="fa-solid fa-building-columns banks"></i>
            </div>
            <div className="curs d">Check Blance</div>
          </div>
          <div className="mobile mm curs" onClick={onSendMoney}>
            <div className="mobi">
              <i class="fa-solid fa-indian-rupee-sign banks"></i>
            </div>
            <div className="curs d">Send money</div>
          </div>
          <div className="mobile mm curs" onClick={onViewTransactions}>
            <div className="mobi">
              <i class="fa-solid fa-clock-rotate-left banks"></i>
            </div>
            <div className="curs d">
              Recent <br />
              Transaction
            </div>
          </div>
          <div className="mobile curs" onClick={reedem}>
            <div className="mobi">
              <img src="/images/play.png" alt="" className="play-img" />
            </div>
            <div className="curs d">Google code</div>
          </div>
          <div className="mobile curs" onClick={card}>
            <div className="mobi">
              <i class="fa-regular fa-credit-card banks"></i>
            </div>
            <div className="curs d">PAY With Card</div>
          </div>
        </div>
        <div className="q-right">
          <RecentTransactions />
        </div>
      </div>
      <div className="manage">
        <div className="manage-payment">
          <h2>Manage Payment</h2>
          <div className="manage-payment-2">
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-solid fa-wallet banks"></i>
              </div>

              <div className="walle curs d">Wallet</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <img src="/images/upi.png" alt="" className="qr-img2" />
              </div>

              <div className="walle curs d">UPI Lite</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-solid fa-building-columns banks"></i>{" "}
              </div>

              <div className="walle curs d">UPI Bank Accounts</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-solid fa-user banks"></i>{" "}
              </div>

              <div className="walle curs d">UPI Circle</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-brands fa-autoprefixer banks"></i>{" "}
              </div>

              <div className="walle curs d">Auto Pay</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-solid fa-globe banks"></i>
              </div>

              <div className="walle curs d">International</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi">
                {" "}
                <i class="fa-solid fa-gift banks"></i>
              </div>

              <div className="walle curs d">Gift Card</div>
            </div>
            <div
              className="wall mobile curs"
              onClick={() => alert("not Available")}
            >
              <div className="mobi banks"> @</div>

              <div className="walle curs d">UPI Settings</div>
            </div>
          </div>
        </div>
        <div className="ext">
          <div className="extra">
            <div className="loans wid">
              <div className="left-f">
                <h3>Loans</h3>
                <p>Personal,Gold etc</p>
              </div>

              <div className="right-f">
                <img
                  src="/images/loansss.png"
                  alt=""
                  className="loan-img lls"
                />
              </div>
            </div>
            <div className="ins wid">
              <div className="left-f">
                <h3 onClick={unavailable}>Insurance</h3>
                <button onClick={unavailable}>Offer</button>
              </div>

              <div className="right-f">
                <img src="/images/inss.png" alt="" className="ins-img lls" />
              </div>
            </div>
            <div className="gold wid">
              <div className="left-f">
                <h3>Golds & Silver</h3>
                <p>Save $10 Daily</p>
              </div>

              <div className="right-f">
                <img src="/images/golds.png" alt="" className="gold-img lls" />
              </div>
            </div>
            <div className="mutual wid">
              <div className="left-f">
                <h3>Mutual Funds</h3>
                <p>SIPs & Investments</p>
              </div>
              <div className="right-f">
                <img src="/images/funds.png" alt="" className="funds lls llm" />
              </div>
            </div>
            <div className="travel wids">
              <div className="left-f">
                <h3>Travel & Transit</h3>
                <p className="tyui">Flight,Train,Bus,Hotel,Metro</p>
                <button>Sale</button>
              </div>

              <div className="right-f">
                <img src="/images/fast.png" alt="" className="fast-img lds" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bussiness">
        <div className="left-bus">
          <BusinessPayments />
        </div>
        <div className="right-bus">
          <h2>Recharge & bills</h2>
          <div className="right-bus2">
            <div className="cut" onClick={mobileRecharge}>
              <div>
                <img src="/images/recharge.png" alt="" className="rech" />
              </div>
              <div className="d">Mobile Reacharge</div>
            </div>
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/fast2.png" alt="" className="rech ssd" />
              </div>
              <div className="curs d">FastTag Reacharge</div>
            </div>
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/plays.png" alt="" className="rech ssa" />
              </div>
              <div className="curs d">Google Play</div>
            </div>
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/dth.png" alt="" className="rech" />
              </div>
              <div className="curs d">DTH</div>
            </div>{" "}
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/nmc.png" alt="" className="rech" />
              </div>
              <div className="curs d">NCMC Recharge</div>
            </div>{" "}
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/roms.png" alt="" className="rech" />
              </div>
              <div className="curs d">Mobile Reacharge</div>
            </div>{" "}
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/cable.png" alt="" className="rech" />
              </div>
              <div className="curs sss d">Cable Tv</div>
            </div>{" "}
            <div className="mobile curs" onClick={mobileRecharge}>
              <div>
                <img src="/images/apple.png" alt="" className="rech" />
              </div>
              <div className="curs d">Apple Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="off">
        <div className="off-1">
          <h2>Gift cards & more</h2>
          <div className="off1-1">
            <div className="sub">
              <h3>Subscriptions</h3>
              <p>
                Buy plans from leading <br />
                OTT platform
              </p>
              <div className="imgs-d">
                <img
                  src="/images/flipkarts.png"
                  alt=""
                  className="imgs-dd dm"
                />
                <img src="/images/zomatos.png" alt="" className="imgs-dd de" />
                <img
                  src="/images/flipkarts.png"
                  alt=""
                  className="imgs-dd df"
                />
              </div>
            </div>

            <div className="sub">
              <h3>Gift Card</h3>
              <p>Buy gift card from biggest brands</p>
              <div className="imgs-d">
                <img
                  src="/images/flipkarts.png"
                  alt=""
                  className="imgs-dd dm"
                />
                <img src="/images/zomatos.png" alt="" className="imgs-dd de" />
                <img
                  src="/images/flipkarts.png"
                  alt=""
                  className="imgs-dd df"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="off-2">
          <h2>Offers & More</h2>
          <div className="ref">
            <div className="ref-1">
              <div className="ref-2" onClick={() => alert("not available")}>
                <img src="/images/reward.png" alt="" className="reward-img" />
                <p className="rew">Rewards</p>
              </div>
              <div className="ref-2" onClick={() => alert("not available")}>
                <img
                  src="/images/offer.jpeg"
                  alt=""
                  className="reward-img img-red"
                />
                <p className="rew">Offers</p>
              </div>
              <div className="ref-2" onClick={() => alert("not available")}>
                <img src="/images/referal.png" alt="" className="reward-img" />
                <p className="rew">Referals</p>
              </div>
              <div className="ref-2" onClick={() => alert("not available")}>
                <img src="/images/squad.png" alt="" className="reward-img" />
                <p className="rew">Squads</p>
              </div>
            </div>
          </div>
        </div>
        <div className="off-3">
          <h2>Manage Your Money</h2>
          <div className="subs">
            <div className="sub sut">
              {" "}
              <h3>Personal Loan</h3>
              <p>Up to $100 instand approval</p>
              <p>Apply Now</p>
            </div>
            <div className="sub sut">
              <h3>Gold Loan</h3>
              <p>Intrest rate starting at 0.96% montly</p>
              <p>Apply Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll">
        <ImageCarousel />
      </div>
      <div className="chat">
        <div className="chats-left">
          <h2>Explore with ChatGpt</h2>
          <div className="chats">
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/light.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/img.png" alt="" className="img-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/chat.png" alt="" className="chat-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/healthy.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/cal.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/ast.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/write.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
            <div className="chats-1" onClick={unavailable}>
              <img src="/images/vaction.png" alt="" className="light-img" />
              <p>
                Ask Me <br />
                Anything
              </p>
            </div>
          </div>
        </div>
        <div className="chat-right">
          <div className="chat-r-1">
            <div className="sbbb">
              <div className="sb">
                {" "}
                <img src="/images/sbb.jpeg" alt="sss" className="sbb" />
              </div>
              <span>State Bank..-8373</span>
            </div>

            <div className="qrs">
              <img src="/images/qrs-img.png" alt="" className="qrs-img" />
            </div>
            <p className="pd">UPI ID:6785768487@axl</p>
            <div className="downs">
              <button className="down" onClick={()=>alert('Connection error')}>Download</button>
              <button className="share" onClick={()=>alert('sharing option is unavailable')}>Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
