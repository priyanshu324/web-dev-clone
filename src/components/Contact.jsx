import React from 'react';

// Contact Component
const Contact = () => {
    return (
        <>
            {/* Main container for the contact form */}
            <div className='bg-[#F0F4F8] dark:bg-[#121212] w-[420px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1340px] 2xl:w-[1536px] dark:text-white dark:mt-[-50px] dark:border-t-2 dark:border-2 dark:border-[#78909C] '>
                {/* Content container */}
                <div className='pb-10'>
                    {/* Heading for the Newsletter */}
                    <h1 className='text-[#212121] dark:text-[#EEEEEE] text-7xl font-bold flex items-center sm:text-6xl justify-center pl-5 mt-10 sm:pl-0 2xl:text-7xl'>Developer Newsletter</h1>
                    {/* Subheading for the newsletter */}
                    <p className='text-[#757575] dark:text-[#BDBDBD] text-xl font-semibold flex items-center justify-center mt-10 pl-2 2xl:text-xl'>Get the latest news, techniques and updates straight to your inbox.</p>
                    {/* Container for the form fields */}
                    <div className='bg-[#EEEEEE] dark:bg-[#353536] pl-4  pb-5 '>
                        {/* Grid container for form layout */}
                        <div className="mt-10 grid grid-cols-1 lg:grid lg:grid-cols-6 lg:gap-6 mb-10">
                            {/* First Name input */}
                            <div className="sm:col-span-3">
                                {/* Label for first name */}
                                <label htmlFor="first-name" className="block text-sm/6 font-medium lg:ml-64 text-[#212121] dark:text-[#EEEEEE] 2xl:text-sm">
                                    First name
                                </label>
                                {/* Input field for the first name */}
                                <div className="mt-2 ">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block p-2 w-80 sm:w-[500px] md:w-[700px] lg:ml-64 lg:w-[300px]  rounded-md border-0 py-1.5 text-[#212121] shadow-sm ring-1 ring-inset ring-[#78909C] placeholder-[#757575] focus:ring-2 focus:ring-inset focus:ring-[#7C4DFF] sm:text-sm/6 bg-white dark:bg-[#353536] dark:placeholder-[#BDBDBD] 2xl:text-sm 2xl:w-[300px]"
                                        placeholder='First Name'
                                    />
                                </div>
                            </div>
                            {/* Last Name input */}
                            <div className="sm:col-span-3 ">
                                {/* Label for the last name */}
                                <label htmlFor="last-name" className="block text-sm/6 font-medium lg:ml-28 text-[#212121] dark:text-[#EEEEEE] 2xl:text-sm">
                                    Last name
                                </label>
                                {/* Input field for the last name */}
                                <div className="mt-2 ">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block p-2 w-80 sm:w-[500px] md:w-[700px] lg:ml-28 lg:w-[300px]  rounded-md border-0 py-1.5 text-[#212121] shadow-sm ring-1 ring-inset ring-[#78909C] placeholder-[#757575] focus:ring-2 focus:ring-inset focus:ring-[#7C4DFF] sm:text-sm/6 bg-white dark:bg-[#353536] dark:placeholder-[#BDBDBD] 2xl:text-sm 2xl:w-[300px]"
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div >
                            {/* Email input */}
                            <div className="sm:col-span-3">
                                {/* Label for the email */}
                                <label htmlFor="last-name" className="block text-sm/6 font-medium lg:ml-64  text-[#212121] dark:text-[#EEEEEE] 2xl:text-sm">
                                    Your Email
                                </label>
                                {/* Input field for the email */}
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='Your Email'
                                        className="block w-80 sm:w-[500px] md:w-[700px] lg:w-full lg:ml-64 p-2 rounded-md border-0 py-1.5 text-[#212121] shadow-sm ring-1 ring-inset ring-[#78909C] placeholder-[#757575] focus:ring-2 focus:ring-inset focus:ring-[#7C4DFF] sm:text-sm/6 bg-white dark:bg-[#353536] dark:placeholder-[#BDBDBD] 2xl:text-sm"
                                    />
                                </div>
                            </div >
                        </div >
                        {/* Country select */}
                        <div >
                            <div className="sm:col-span-3 ">
                                {/* Label for the country dropdown */}
                                <label htmlFor="country" className="block text-sm/6 font-medium lg:ml-64  text-[#212121] dark:text-[#EEEEEE] lg:mt-[-30px] 2xl:text-sm">
                                    Country
                                </label>
                                {/* Dropdown select for country */}
                                <div className='mt-2'>
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        defaultValue='India'
                                        className="block p-2 w-80 md:w-[700px] lg:ml-64 lg:w-[650px]  rounded-md border-0 py-1.5 text-[#212121] shadow-sm ring-1 ring-inset ring-[#78909C] focus:ring-2 focus:ring-inset focus:ring-[#7C4DFF] sm:w-[500px] sm:text-sm/6 bg-white dark:bg-[#353536] dark:text-[#EEEEEE] dark:font-bold 2xl:text-sm 2xl:w-[700px]"
                                    >
                                        {/* Country option */}
                                        <option value="IN: India">India (भारत)</option>
                                        <option value="AF: Afghanistan">Afghanistan (افغانستان)</option>
                                        <option value="AX: Åland Islands">Åland Islands (Åland)</option>
                                        <option value="AL: Albania">Albania (Shqipëria)</option>
                                        <option value="DZ: Algeria">Algeria (الجزائر)</option>
                                        <option value="AS: American Samoa">American Samoa</option>
                                        <option value="AD: Andorra">Andorra</option>
                                        <option value="AO: Angola">Angola</option>
                                        <option value="AI: Anguilla">Anguilla</option>
                                        <option value="AQ: Antarctica">Antarctica</option>
                                        <option value="AG: Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="AR: Argentina">Argentina</option>
                                        <option value="AM: Armenia">Armenia (Հայաստանի Հանրապետութիւն)</option>
                                        <option value="AW: Aruba">Aruba</option>
                                        <option value="AC: Ascension Island">Ascension Island</option>
                                        <option value="AU: Australia">Australia</option>
                                        <option value="AT: Austria">Austria (Österreich)</option>
                                        <option value="AZ: Azerbaijan">Azerbaijan (Azərbaycan)</option>
                                        <option value="BS: Bahamas">Bahamas</option>
                                        <option value="BH: Bahrain">Bahrain (البحرين)</option>
                                        <option value="BD: Bangladesh">Bangladesh (বাংলাদেশ)</option>
                                        <option value="BB: Barbados">Barbados</option>
                                        <option value="BY: Belarus">Belarus (Беларусь)</option>
                                        <option value="BE: Belgium">Belgium (België)</option>
                                        <option value="BZ: Belize">Belize</option>
                                        <option value="BJ: Benin">Benin (Bénin)</option>
                                        <option value="BM: Bermuda">Bermuda</option>
                                        <option value="BT: Bhutan">Bhutan (भूटान)</option>
                                        <option value="BO: Bolivia">Bolivia</option>
                                        <option value="BA: Bosnia and Herzegovina">Bosnia and Herzegovina (Bosna i Hercegovina)</option>
                                        <option value="BW: Botswana">Botswana</option>
                                        <option value="BV: Bouvet Island">Bouvet Island</option>
                                        <option value="BR: Brazil">Brazil (Brasil)</option>
                                        <option value="IO: British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="VG: British Virgin Islands">British Virgin Islands</option>
                                        <option value="BN: Brunei">Brunei</option>
                                        <option value="BG: Bulgaria">Bulgaria (България)</option>
                                        <option value="BF: Burkina Faso">Burkina Faso</option>
                                        <option value="BI: Burundi">Burundi</option>
                                        <option value="KH: Cambodia">Cambodia (កម្ពុជា)</option>
                                        <option value="CM: Cameroon">Cameroon (Cameroun)</option>
                                        <option value="CA: Canada">Canada</option>
                                        <option value="IC: Canary Islands">Canary Islands</option>
                                        <option value="CV: Cape Verde">Cape Verde (Cabo Verde)</option>
                                        <option value="BQ: Caribbean Netherlands">Caribbean Netherlands</option>
                                        <option value="KY: Cayman Islands">Cayman Islands</option>
                                        <option value="CF: Central African Republic">Central African Republic (République centrafricaine)</option>
                                        <option value="EA: Ceuta and Melilla">Ceuta and Melilla</option>
                                        <option value="TD: Chad">Chad (تشاد)</option>
                                        <option value="CL: Chile">Chile</option>
                                        <option value="CN: China">China (中国)</option>
                                        <option value="CX: Christmas Island">Christmas Island</option>
                                        <option value="CP: Clipperton Island">Clipperton Island</option>
                                        <option value="CC: Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="CO: Colombia">Colombia</option>
                                        <option value="KM: Comoros">Comoros (جزر القمر)</option>
                                        <option value="CD: Congo">Congo (DRC) (République démocratique du Congo)</option>
                                        <option value="CG: Congo">Congo</option>
                                        <option value="CK: Cook Islands">Cook Islands</option>
                                        <option value="CR: Costa Rica">Costa Rica</option>
                                        <option value="HR: Croatia">Croatia (Hrvatska)</option>
                                        <option value="CU: Cuba">Cuba</option>
                                        <option value="CW: Curaçao">Curaçao</option>
                                        <option value="CY: Cyprus">Cyprus (Κύπρος)</option>
                                        <option value="CZ: Czechia">Czechia (Česko)</option>
                                        <option value="CI: Côte d’Ivoire">Côte d’Ivoire</option>
                                        <option value="DK: Denmark">Denmark (Danmark)</option>
                                        <option value="DG: Diego Garcia">Diego Garcia</option>
                                        <option value="DJ: Djibouti">Djibouti (Jabuuti)</option>
                                        <option value="DM: Dominica">Dominica</option>
                                        <option value="DO: Dominican Republic">Dominican Republic (República Dominicana)</option>
                                        <option value="EC: Ecuador">Ecuador</option>
                                        <option value="EG: Egypt">Egypt (مصر)</option>
                                        <option value="SV: El Salvador">El Salvador</option>
                                        <option value="GQ: Equatorial Guinea">Equatorial Guinea (Guinée équatoriale)</option>
                                        <option value="ER: Eritrea">Eritrea (ኤርትራ, اريتريا)</option>
                                        <option value="EE: Estonia">Estonia (Eesti)</option>
                                        <option value="ET: Ethiopia">Ethiopia (ኢትዮጵያ)</option>
                                        <option value="FK: Falkland Islands">Falkland Islands</option>
                                        <option value="FO: Faroe Islands">Faroe Islands (Føroyar)</option>
                                        <option value="FJ: Fiji">Fiji (फिजी)</option>
                                        <option value="FI: Finland">Finland (Suomi)</option>
                                        <option value="FR: France">France</option>
                                        <option value="GF: French Guiana">French Guiana (Guyane française)</option>
                                        <option value="PF: French Polynesia">French Polynesia (Polynésie française)</option>
                                        <option value="TF: French Southern Territories">French Southern Territories</option>
                                        <option value="GA: Gabon">Gabon</option>
                                        <option value="GM: Gambia">Gambia</option>
                                        <option value="GE: Georgia">Georgia (საქართველო)</option>
                                        <option value="DE: Germany">Germany (Deutschland)</option>
                                        <option value="GH: Ghana">Ghana</option>
                                        <option value="GI: Gibraltar">Gibraltar</option>
                                        <option value="GR: Greece">Greece (Ελλάδα)</option>
                                        <option value="GL: Greenland">Greenland (Kalaallit Nunaat)</option>
                                        <option value="GD: Grenada">Grenada</option>
                                        <option value="GP: Guadeloupe">Guadeloupe</option>
                                        <option value="GU: Guam">Guam</option>
                                        <option value="GT: Guatemala">Guatemala</option>
                                        <option value="GG: Guernsey">Guernsey</option>
                                        <option value="GN: Guinea">Guinea (Guinée)</option>
                                        <option value="GW: Guinea-Bissau">Guinea-Bissau (Guiné Bissau)</option>
                                        <option value="GY: Guyana">Guyana</option>
                                        <option value="HT: Haiti">Haiti (Haïti)</option>
                                        <option value="HM: Heard & McDonald Islands">Heard & McDonald Islands</option>
                                        <option value="HN: Honduras">Honduras</option>
                                        <option value="HK: Hong Kong">Hong Kong (香港)</option>
                                        <option value="HU: Hungary">Hungary (Magyarország)</option>
                                        <option value="IS: Iceland">Iceland (Ísland)</option>
                                        <option value="ID: Indonesia">Indonesia</option>
                                        <option value="IR: Iran">Iran (ایران)</option>
                                        <option value="IQ: Iraq">Iraq (العراق)</option>
                                        <option value="IE: Ireland">Ireland</option>
                                        <option value="IM: Isle of Man">Isle of Man</option>
                                        <option value="IL: Israel">Israel (ישראל)</option>
                                        <option value="IT: Italy">Italy (Italia)</option>
                                        <option value="JM: Jamaica">Jamaica</option>
                                        <option value="JP: Japan">Japan (日本)</option>
                                        <option value="JE: Jersey">Jersey</option>
                                        <option value="JO: Jordan">Jordan (الأردن)</option>
                                        <option value="KZ: Kazakhstan">Kazakhstan (Казахстан)</option>
                                        <option value="KE: Kenya">Kenya</option>
                                        <option value="KI: Kiribati">Kiribati</option>
                                        <option value="XK: Kosovo">Kosovo</option>
                                        <option value="KW: Kuwait">Kuwait (الكويت)</option>
                                        <option value="KG: Kyrgyzstan">Kyrgyzstan (Кыргызстан)</option>
                                        <option value="LA: Laos">Laos (ລາວ)</option>
                                        <option value="LV: Latvia">Latvia (Latvija)</option>
                                        <option value="LB: Lebanon">Lebanon (لبنان)</option>
                                        <option value="LS: Lesotho">Lesotho</option>
                                        <option value="LR: Liberia">Liberia</option>
                                        <option value="LY: Libya">Libya (ليبيا)</option>
                                        <option value="LI: Liechtenstein">Liechtenstein</option>
                                        <option value="LT: Lithuania">Lithuania (Lietuva)</option>
                                        <option value="LU: Luxembourg">Luxembourg</option>
                                        <option value="MO: Macau">Macau (澳门)</option>
                                        <option value="MK: Macedonia">Macedonia (FYROM) (Македонија)</option>
                                        <option value="MG: Madagascar">Madagascar</option>
                                        <option value="MW: Malawi">Malawi</option>
                                        <option value="MY: Malaysia">Malaysia</option>
                                        <option value="MV: Maldives">Maldives</option>
                                        <option value="ML: Mali">Mali (مالي)</option>
                                        <option value="MT: Malta">Malta</option>
                                        <option value="MH: Marshall Islands">Marshall Islands</option>
                                        <option value="MQ: Martinique">Martinique</option>
                                        <option value="MR: Mauritania">Mauritania (موريتانيا)</option>
                                        <option value="MU: Mauritius">Mauritius</option>
                                        <option value="YT: Mayotte">Mayotte</option>
                                        <option value="MX: Mexico">Mexico (México)</option>
                                        <option value="FM: Micronesia">Micronesia</option>
                                        <option value="MD: Moldova">Moldova</option>
                                        <option value="MC: Monaco">Monaco</option>
                                        <option value="MN: Mongolia">Mongolia (Монгол улс)</option>
                                        <option value="ME: Montenegro">Montenegro (Црна Гора)</option>
                                        <option value="MS: Montserrat">Montserrat</option>
                                        <option value="MA: Morocco">Morocco (المغرب)</option>
                                        <option value="MZ: Mozambique">Mozambique (Moçambique)</option>
                                        <option value="MM: Myanmar">Myanmar (Burma)</option>
                                        <option value="NA: Namibia">Namibia</option>
                                        <option value="NR: Nauru">Nauru</option>
                                        <option value="NP: Nepal">Nepal (नेपाल)</option>
                                        <option value="NL: Netherlands">Netherlands (Nederland)</option>
                                        <option value="AN: Netherlands Antilles">Netherlands Antilles (Nederlandse Antillen)</option>
                                        <option value="NC: New Caledonia">New Caledonia (Nouvelle-Calédonie)</option>
                                        <option value="NZ: New Zealand">New Zealand</option>
                                        <option value="NI: Nicaragua">Nicaragua</option>
                                        <option value="NE: Niger">Niger</option>
                                        <option value="NG: Nigeria">Nigeria</option>
                                        <option value="NU: Niue">Niue</option>
                                        <option value="NF: Norfolk Island">Norfolk Island</option>
                                        <option value="KP: North Korea">North Korea (조선 민주주의 인민 공화국)</option>
                                        <option value="MP: Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="NO: Norway">Norway (Norge)</option>
                                        <option value="OM: Oman">Oman (عمان)</option>
                                        <option value="QO: Outlying Oceania">Outlying Oceania</option>
                                        <option value="PK: Pakistan">Pakistan (پاکستان)</option>
                                        <option value="PW: Palau">Palau</option>
                                        <option value="PS: Palestine">Palestine (فلسطين)</option>
                                        <option value="PA: Panama">Panama (Panamá)</option>
                                        <option value="PG: Papua New Guinea">Papua New Guinea</option>
                                        <option value="PY: Paraguay">Paraguay</option>
                                        <option value="PE: Peru">Peru (Perú)</option>
                                        <option value="PH: Philippines">Philippines</option>
                                        <option value="PN: Pitcairn Islands">Pitcairn Islands</option>
                                        <option value="PL: Poland">Poland (Polska)</option>
                                        <option value="PT: Portugal">Portugal</option>
                                        <option value="PR: Puerto Rico">Puerto Rico</option>
                                        <option value="QA: Qatar">Qatar (قطر)</option>
                                        <option value="RO: Romania">Romania (România)</option>
                                        <option value="RU: Russia">Russia (Россия)</option>
                                        <option value="RW: Rwanda">Rwanda</option>
                                        <option value="RE: Réunion">Réunion</option>
                                        <option value="BL: Saint Barthélemy">Saint Barthélemy</option>
                                        <option value="SH: Saint Helena">Saint Helena</option>
                                        <option value="KN: Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option value="LC: Saint Lucia">Saint Lucia</option>
                                        <option value="MF: Saint Martin">Saint Martin</option>
                                        <option value="PM: Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="WS: Samoa">Samoa</option>
                                        <option value="SM: San Marino">San Marino</option>
                                        <option value="SA: Saudi Arabia">Saudi Arabia (المملكة العربية السعودية)</option>
                                        <option value="SN: Senegal">Senegal (Sénégal)</option>
                                        <option value="RS: Serbia">Serbia (Србија)</option>
                                        <option value="SC: Seychelles">Seychelles</option>
                                        <option value="SL: Sierra Leone">Sierra Leone</option>
                                        <option value="SG: Singapore">Singapore (新加坡)</option>
                                        <option value="SX: Sint Maarten">Sint Maarten</option>
                                        <option value="SK: Slovakia">Slovakia (Slovenská republika)</option>
                                        <option value="SI: Slovenia">Slovenia (Slovenija)</option>
                                        <option value="SB: Solomon Islands">Solomon Islands</option>
                                        <option value="SO: Somalia">Somalia (Somali)</option>
                                        <option value="ZA: South Africa">South Africa</option>
                                        <option value="GS: South Georgia & South Sandwich Islands">South Georgia & South Sandwich Islands</option>
                                        <option value="KR: South Korea">South Korea (대한민국)</option>
                                        <option value="SS: South Sudan">South Sudan</option>
                                        <option value="ES: Spain">Spain (España)</option>
                                        <option value="LK: Sri Lanka">Sri Lanka (இலங்கை)</option>
                                        <option value="VC: St. Vincent & Grenadines">St. Vincent & Grenadines</option>
                                        <option value="SD: Sudan">Sudan (السودان)</option>
                                        <option value="SR: Suriname">Suriname</option>
                                        <option value="SJ: Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="SZ: Swaziland">Swaziland</option>
                                        <option value="SE: Sweden">Sweden (Sverige)</option>
                                        <option value="CH: Switzerland">Switzerland (Schweiz, Suisse, Svizzera)</option>
                                        <option value="SY: Syria">Syria (سوريا)</option>
                                        <option value="ST: São Tomé and Príncipe">São Tomé and Príncipe</option>
                                        <option value="TW: Taiwan">Taiwan (台灣)</option>
                                        <option value="TJ: Tajikistan">Tajikistan (تاجیکستان)</option>
                                        <option value="TZ: Tanzania">Tanzania</option>
                                        <option value="TH: Thailand">Thailand (ประเทศไทย)</option>
                                        <option value="TL: Timor-Leste">Timor-Leste</option>
                                        <option value="TG: Togo">Togo</option>
                                        <option value="TK: Tokelau">Tokelau</option>
                                        <option value="TO: Tonga">Tonga</option>
                                        <option value="TT: Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option value="TA: Tristan da Cunha">Tristan da Cunha</option>
                                        <option value="TN: Tunisia">Tunisia (تونس)</option>
                                        <option value="TR: Turkey">Turkey (Türkiye)</option>
                                        <option value="TM: Turkmenistan">Turkmenistan (Туркменистан)</option>
                                        <option value="TC: Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option value="TV: Tuvalu">Tuvalu</option>
                                        <option value="UM: U.S. Outlying Islands">U.S. Outlying Islands (United States Minor Outlying Islands)</option>
                                        <option value="VI: U.S. Virgin Islands">U.S. Virgin Islands</option>
                                        <option value="UG: Uganda">Uganda</option>
                                        <option value="UA: Ukraine">Ukraine (Україна)</option>
                                        <option value="AE: United Arab Emirates">United Arab Emirates (الامارات العربية المتحدة)</option>
                                        <option value="GB: United Kingdom">United Kingdom</option>
                                        <option value="US: United States" selected>United States</option>
                                        <option value="UY: Uruguay">Uruguay</option>
                                        <option value="UZ: Uzbekistan">Uzbekistan (Ўзбекистон)</option>
                                        <option value="VU: Vanuatu">Vanuatu</option>
                                        <option value="VA: Vatican City">Vatican City (Vaticano)</option>
                                        <option value="VE: Venezuela">Venezuela</option>
                                        <option value="VN: Vietnam">Vietnam (Việt Nam)</option>
                                        <option value="WF: Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="EH: Western Sahara">Western Sahara (الصحراء الغربية)</option>
                                        <option value="YE: Yemen">Yemen (اليمن)</option>
                                        <option value="ZM: Zambia">Zambia</option>
                                        <option value="ZW: Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div >
                        </div >
                        {/* Disclaimer */}
                        <div>
                            <p className='text-[#757575] dark:text-[#BDBDBD] text-lg  lg:w-[500px] lg:ml-64 lg:mt-5 2xl:text-lg 2xl:w-[700px]'>
                                Don't worry, no spam here! Your information will only be used for web.dev and Chrome related updates and our emails are typically no more than 1-2 times a month. You can unsubscribe anytime.
                            </p>
                        </div>
                        {/* Term and Conditions Checkboxes */}
                        <div className="pl-4">
                            <fieldset>
                                <div className="mt-6 space-y-6 ml-36">
                                    {/* Add me to the web.dev mailing list checkbox */}
                                    <div className="relative flex gap-x-3 lg:ml-64 2xl:ml-[100px]">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm/6 2xl:text-sm">
                                            <label htmlFor="comments" className="font-medium text-[#212121] dark:text-[#EEEEEE] ">
                                                Add me to the web.dev mailing list.
                                            </label>
                                        </div>
                                    </div>
                                    {/* I accept Google's terms and policy checkbox */}
                                    <div className="relative flex gap-x-3 lg:ml-64 2xl:ml-[100px]">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm/6 sm:w-[500px] 2xl:text-sm 2xl:w-[700px]">
                                            <label htmlFor="comments" className="font-medium text-[#212121] dark:text-[#EEEEEE] ">
                                                I accept Google's <span className='text-[#00796B] dark:text-[#00BCD4] hover:underline hover:underline-offset-2 '> Terms and Conditions</span> and acknowledge that my information will be used in accordance with Google's <span className='text-[#00796B] dark:text-[#00BCD4] hover:underline hover:underline-offset-2'>Privacy Policy</span>.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        {/* Button for subcribe */}
                        <div className='flex items-center justify-center mt-10'>
                            {/* Subscribe Button */}
                            <div className='border-[#42A5F5] hover:border-[#8BC34A] border-2 dark:border-[#78909C] border-solid rounded-3xl flex items-center justify-center w-[150px] h-11 hover:bg-[#8BC34A] dark:bg-[#353536] dark:hover:bg-[#121212] transition-colors duration-200 2xl:w-[200px]'>
                                <button className='text-[#42A5F5]  dark:text-[#EEEEEE] font-bold'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;