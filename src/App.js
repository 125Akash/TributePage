import React from "react";
import { Typewriter } from "react-simple-typewriter";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Info from "./Components/Info";

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <div className=" marquee rounded-xl flex justify-center items-center p-1">
        <p>
          प्रौढ प्रताप पुरंदर, क्षत्रिय कुलावतंस, सिंहासनाधी श्वर, महाराजाधिराज
          महाराज श्रीमंत श्री छत्रपती शिवाजी महाराज की जय !
        </p>
      </div>
      <div className="flex justify-start items-center rounded-lg shadow-lg m-5 ">
        <div className="flex justify-center items-center m-3 ">
          <img
            src="/M1.png"
            alt="Chhatrapati Shivaji Maharaj"
            className="w-[80%] h-[85%] mx-auto mb-4 rounded-lg"
          />
        </div>
        <div className=" text-lg font-semibold text-orange-400 w-4/5 h-3/5">
          <div className="flex justify-center items-center text-white m-5">
            <h1 className="font-bold text-3xl">
              अखंड हिंदुस्तांचे आराध्य दैवत छत्रपती शिवाजी महाराज{" "}
            </h1>
          </div>

          <div className="flex justify-center items-center text-lg font-semibold text-orange-400 w-full h-3/5">
            <Typewriter
              words={[
                "शिवाजी महाराज, महाराष्ट्र के स्वराज्य स्थापक और मराठा साम्राज्य के प्रतिपालक थे। उनका जन्म 19 फरवरी 1630 को शिवनेरी किले में हुआ था। उनके पिताजी शहाजी भोंसले और माताजी जीजाबाई थीं। शिवाजी महाराज ने अपने जीवन में हिंदवी स्वराज्य स्थापित करने के उद्देश्य से अपने पिता की सलाह और गुरु दादोजी कोंडदेव के मार्गदर्शन में अपने बलिदान भरा जीवन व्यतीत किया | उनका बचपन से ही युद्धक्षेत्र में रुचि थी, और वे छत्रपति बने के लिए समर्पण कर गए। उन्होंने गेरिला युद्ध का बहुत प्रचलन किया और अपने सैन्य दल को चलाने के लिए एक अच्छे नेता के रूप में विकसित किया। रायगड में 1674 में, शिवाजी महाराज ने स्वराज्य की स्थापना की और वे छत्रपति के रूप में राज्याभिषेक किए गए। उन्होंने अपने समय में मुघल और आदिल शाही सुल्तानत के खिलाफ सशक्त रूप से लड़ा। उनकी नौसेना भी बहुत मजबूत थी, और उन्होंने मराठा साम्राज्य को समुद्रिक रूप से भी विस्तार दिया। शिवाजी महाराज को 'हिन्दू सम्राट छत्रपति शिवाजी महाराज' के रूप में सम्मानित किया गया।उनकी वीरता, व्यक्तित्व और राजनीतिक कुशलता ने उन्हें एक महत्वपूर्ण ऐतिहासिक चरित्र बनाया है, और उनका अभिमान और प्रेम आज भी महाराष्ट्र के लोगों के दिलों में जिन्दा है।",
              ]}
              loop={true}
              cursor={true}
              cursorStyle="🖋️"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>

        <hr className="text-white text-2xl font-semibold" />
      </div>
      <div className="w-fit m-14 ">
        <Info className="mb-12" />
      </div>
      <div className="flex justify-center items-center text-orange-500 rounded-2xl bg-black">
      <AudioPlayer
        autoPlay
        loop
        src="/MelaMan.mp3"
        className="bg-orange-500 rounded-xl"

        // other props here
      />
      </div>
     
    </div>
  );
}

export default App;
