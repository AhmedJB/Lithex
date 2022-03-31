import { Fragment , useContext , useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../components/Loader";
import { UserContext } from "../../contexts/UserContext";




export default function transactions(props){


    const [User,setUser] = useContext(UserContext);
    const [loading,setLoading] = useState(true);



    

    const html = (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"
          />
          <link rel="manifest" href="/assets/meta/manifest.json" />
          <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/meta/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/meta/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/meta/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/meta/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/meta/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/meta/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/meta/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/meta/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/meta/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/meta/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/meta/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/meta/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/meta/favicon-16x16.png"
          />

          <title>Transactions</title>
        </Head>
        <div id="nexo-platform" className="application">
          <Header location="transaction" setLoading={setLoading} />

          <main>
            <section className="TransactionsPage custom">
              <aside>
                <div className="Filter">
                  <div className="card">
                    <div className="header mb-l">
                      <h4>Filters</h4>
                    </div>
                    <fieldset>
                      <label>Date Range</label>
                      <div className="DateRangeBox">
                        <div className="DateRangePicker DateRangePicker_1">
                          <div>
                            <div className="DateRangePickerInput DateRangePickerInput_1">
                              <div className="DateInput DateInput_1 DateInput__small DateInput__small_2">
                                <input
                                  className="DateInput_input DateInput_input_1 DateInput_input__small DateInput_input__small_2"
                                  aria-label="Start Date"
                                  type="text"
                                  id="start-date-id"
                                  name="start-date-id"
                                  placeholder="Start Date"
                                  autoComplete="off"
                                  aria-describedby="DateInput__screen-reader-message-start-date-id"
                                  defaultValue
                                />
                                <p
                                  className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1"
                                  id="sDateInput__screen-reader-message-start-date-id"
                                >
                                  Navigate forward to interact with the calendar
                                  and select a date. Press the question mark key
                                  to get the keyboard shortcuts for changing
                                  dates.
                                </p>
                              </div>
                              <div
                                className="DateRangePickerInput_arrow DateRangePickerInput_arrow_1"
                                aria-hidden="true"
                                role="presentation"
                              >
                                -
                              </div>
                              <div className="DateInput DateInput_1 DateInput__small DateInput__small_2">
                                <input
                                  className="DateInput_input DateInput_input_1 DateInput_input__small DateInput_input__small_2"
                                  aria-label="End Date"
                                  type="text"
                                  id="end-date-id"
                                  name="end-date-id"
                                  placeholder="End Date"
                                  autoComplete="off"
                                  aria-describedby="DateInput__screen-reader-message-end-date-id"
                                  defaultValue
                                />
                                <p
                                  className="DateInput_screenReaderMessage DateInput_screenReaderMessage_1"
                                  id="DateInput__screen-reader-message-end-date-id"
                                >
                                  Navigate backward to interact with the
                                  calendar and select a date. Press the question
                                  mark key to get the keyboard shortcuts for
                                  changing dates.
                                </p>
                              </div>
                              <button
                                className="DateRangePickerInput_calendarIcon DateRangePickerInput_calendarIcon_1"
                                type="button"
                                aria-label="Interact with the calendar and add the check-in date for your trip."
                              >
                                <svg
                                  className="DateRangePickerInput_calendarIcon_svg DateRangePickerInput_calendarIcon_svg_1"
                                  focusable="false"
                                  viewBox="0 0 1393.1 1500"
                                >
                                  <path d="m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label>Transaction Type</label>
                      <div className="SelectBox filter">
                        <span>
                          <label>All Types</label>
                          <i className="fa fa-chevron-down" />
                          <select>
                            <option value={-1}>All Types</option>
                            <option value={0}>Top Up Crypto</option>
                            <option value={1}>Withdrawal Crypto</option>
                            <option value={2}>Repayment</option>
                            <option value={3}>Interest</option>
                            <option value={4}>Sell Order</option>
                            <option value={5}>Additional Interest</option>
                            <option value={6}>Loan Withdrawal</option>
                            <option value={7}>Accounting</option>
                            <option value={8}>Interest Discount</option>
                            <option value={9}>Dividend</option>
                            <option value={10}>Top Up Fiat</option>
                            <option value={11}>Exchange Top Up</option>
                            <option value={12}>Exchange Withdrawal</option>
                            <option value={13}>Withdrawal Fiat</option>
                            <option value={14}>ICO Deposit</option>
                            <option value={15}>Cashback</option>
                            <option value={16}>Exchange</option>
                            <option value={17}>Internal Transfer</option>
                            <option value={18}>Internal Transfer</option>
                            <option value={19}>Custom Fee</option>
                            <option value={20}>Swap</option>
                            <option value={21}>Bonus</option>
                            <option value={22}>Card Transaction</option>
                            <option value={23}>Automatic Repayment</option>
                            <option value={24}>Refund</option>
                            <option value={25}>Chargeback</option>
                            <option value={26}>Fixed Term Deposit</option>
                            <option value={27}>Fixed Term Withdrawal</option>
                            <option value={28}>Fixed Term Interest</option>
                            <option value={29}>Transfer to Nexo Prime</option>
                            <option value={30}>Transfer from Nexo Prime</option>
                            <option value={31}>Exchange Cashback</option>
                            <option value={32}>Referral Bonus</option>
                            <option value={33}>Exchange Booster</option>
                          </select>
                        </span>
                      </div>
                    </fieldset>
                    <fieldset>
                      <label>Asset</label>
                      <div className="SelectBox filter">
                        <span>
                          <label>AllAssets</label>
                          <i className="fa fa-chevron-down" />
                          <select>
                            <option value={-1}>AllAssets</option>
                            <option value={0}>(BTC) Bitcoin</option>
                            <option value={1}>(ETH) Ether</option>
                            <option value={2}>(NEXO) ERC-20</option>
                            <option value={3}>(USD) US Dollar</option>
                            <option value={4}>(EUR) Euro</option>
                            <option value={5}>(BNB) ERC-20</option>
                            <option value={6}>(USDT) Tether - Omni</option>
                            <option value={7}>(GBP) Pounds Sterling</option>
                            <option value={8}>(AUD) Australian Dollar</option>
                            <option value={9}>(BGN) Bulgarian Lev</option>
                            <option value={10}>(CAD) Canadian Dollar</option>
                            <option value={11}>(CZK) Czech Koruna</option>
                            <option value={12}>(DKK) Danish Krone</option>
                            <option value={13}>(HKD) Hong Kong Dollar</option>
                            <option value={14}>(HRK) Croatian Kuna</option>
                            <option value={15}>(HUF) Hungarian Forint</option>
                            <option value={16}>(JPY) Japanese Yen</option>
                            <option value={17}>(NOK) Norwegian Krone</option>
                            <option value={18}>(NPR) Nepalese Rupee</option>
                            <option value={19}>(NZD) New Zealand Dollar</option>
                            <option value={20}>(PLN) Polish Złoty</option>
                            <option value={21}>(RON) Romanian Leu</option>
                            <option value={22}>(SEK) Swedish Krona</option>
                            <option value={23}>(SGD) Singapore Dollar</option>
                            <option value={24}>(TRY) Turkish Lira</option>
                            <option value={25}>(AED) Emirati Dirham</option>
                            <option value={26}>(ARS) Argentine Peso</option>
                            <option value={27}>(CLP) Chilean Peso</option>
                            <option value={28}>(CNY) Chinese Yuan</option>
                            <option value={29}>(EGP) Egyptian Pound</option>
                            <option value={30}>(GEL) Georgian Lari</option>
                            <option value={31}>(GHS) Ghanaian Cedi</option>
                            <option value={32}>(IDR) Indonesian Rupiah</option>
                            <option value={33}>(ILS) Israeli Shekels</option>
                            <option value={34}>(INR) Indian Rupee</option>
                            <option value={35}>(KES) Kenyan Shillings</option>
                            <option value={36}>(KRW) South Korean Won</option>
                            <option value={37}>(MAD) Moroccan Dirham</option>
                            <option value={38}>(MXN) Mexican Peso</option>
                            <option value={39}>(MYR) Malaysian Ringgit</option>
                            <option value={40}>(NGN) Nigerian Naira</option>
                            <option value={41}>(PEN) Peruvian Sol</option>
                            <option value={42}>(PHP) Philippine Peso</option>
                            <option value={43}>(PKR) Pakistani Rupee</option>
                            <option value={44}>(RUB) Russian Ruble</option>
                            <option value={45}>(THB) Thai Baht</option>
                            <option value={46}>(UAH) Ukranian Hryvna</option>
                            <option value={47}>(VND) Vietnamese Dong</option>
                            <option value={48}>(ZAR) South African Rand</option>
                            <option value={49}>(XRP) XRP</option>
                            <option value={50}>(TUSD) TrueUSD</option>
                            <option value={51}>(USD) Stablecoins</option>
                            <option value={52}>(USDC) USD Coin</option>
                            <option value={53}>(DAI) Dai</option>
                            <option value={54}>(USDP) Pax Dollar</option>
                            <option value={55}>(LTC) Litecoin</option>
                            <option value={56}>(EUR) EUR</option>
                            <option value={57}>(XLM) Stellar</option>
                            <option value={58}>(TRX) Tron</option>
                            <option value={59}>(USDT) Tether</option>
                            <option value={60}>(NEXO) BEP2</option>
                            <option value={61}>(NEXO) NEXO Token</option>
                            <option value={62}>(BNB) BNB (BEP2)</option>
                            <option value={63}>(BNB) BNB</option>
                            <option value={64}>(BCH) Bitcoin Cash</option>
                            <option value={65}>(USD) USD</option>
                            <option value={66}>(GBP) GBP</option>
                            <option value={67}>(EOS) EOS</option>
                            <option value={68}>(PAXG) PAX Gold</option>
                            <option value={69}>(LINK) Chainlink</option>
                            <option value={70}>(OMR) Omani Rial</option>
                            <option value={71}>(BHD) Bahrain Dinar</option>
                            <option value={72}>(CHF) Swiss Franc</option>
                            <option value={73}>(KWD) Kuwait Dinar</option>
                            <option value={74}>(QAR) Quatar Rial</option>
                            <option value={75}>(SAR) Saudi Rial</option>
                            <option value={76}>(UGX) Ugandan Shilling</option>
                            <option value={77}>(HUSD) HUSD</option>
                            <option value={78}>(ADA) Cardano</option>
                            <option value={79}>(DOT) Polkadot</option>
                            <option value={80}>(DOGE) Dogecoin</option>
                            <option value={81}>(SOL) Solana</option>
                            <option value={82}>(AVAX) Avalanche</option>
                            <option value={83}>(UYU) Uruguayan peso</option>
                            <option value={84}>(MATIC) Polygon</option>
                            <option value={85}>(LUNA) Terra</option>
                            <option value={86}>(UNI) Uniswap</option>
                            <option value={87}>(AXS) Axie Infinity</option>
                            <option value={88}>(FTM) Fantom</option>
                            <option value={89}>(UST) TerraUSD</option>
                            <option value={90}>(ATOM) Cosmos</option>
                            <option value={91}>(MANA) Decentraland</option>
                            <option value={92}>(SAND) The Sandbox</option>
                            <option value={93}>(KSM) Kusama</option>
                          </select>
                        </span>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </aside>
              <div>
                <div className="top-container">
                  <h3>Transaction History</h3>
                  <div className="sorting">
                    <label>
                      <i className="fa fa-sort-amount-down" />
                      Sort by
                    </label>
                    <div className="SelectBox">
                      <span aria-expanded="false">
                        <label className="hv">
                          <div className="selected">Newest to Oldest</div>
                        </label>
                        <i className="fa fa-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="Empty">
                <Image src={"/assets/icons/no-transaction.svg"} height={200} width={200} style={{ opacity: 1, transform: "scale(1)" }} />

                 
                  <h6 className="semi-bold special">No transactions</h6>
                </div>
              </div>
            </section>
            <Footer />
          </main>
        </div>
      </Fragment>
    );


    return (loading ?  <Loader setLoading={setLoading} /> : html);



}