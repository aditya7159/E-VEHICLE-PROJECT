function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user-input").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;

    if (message.trim() !== "") {
        appendMessage("user", message);
        userInput.value = "";
        processUserMessage(message);
    }
}

function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");
    newMessage.className = sender;
    newMessage.innerHTML =` <strong>${sender}:
    </strong> ${message}`;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

function processUserMessage(userMessage) {
    var botResponse = getBotResponse(userMessage);
    setTimeout(() => {
    appendMessage("bot", botResponse);
},1500);
}

function getBotResponse(userMessage) {
    // Simple predefined responses for common fitness-related questions
    if (userMessage.toLowerCase().includes("e-vehicle") || userMessage.toLowerCase().includes("electric vehicle")) {
        return "An electric vehicle (EV)[note 1] is a vehicle that uses one or more electric motors for propulsion. It can be powered by a collector system, with electricity from extravehicular sources, or it can be powered autonomously by a battery (sometimes charged by solar panels, or by converting fuel to electricity using fuel cells or a generator (Often known as a hybrid))";
    } else if (userMessage.toLowerCase().includes("types") || userMessage.toLowerCase().includes("types of e-vehicle")) {
        return "1-Battery Electric Vehicle (BEV) \n- 2-Hybrid Electric Vehicle \n- 3-Fuel Cell Electric Vehicle (FCEV)";
    } else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("what can you do")) {
        return "I can provide information on e-vehicle-related questions. Feel free to ask!";
    } else if (userMessage.toLowerCase().includes("benefits")) {
        return "Transport is a fundamental requirement of modern life, but the traditional combustion engine is quickly becoming outdated. Petrol or diesel vehicles are highly polluting and are being quickly replaced by fully electric vehicles. Fully electric vehicles (EV) have zero tailpipe emissions and are much better for the environment. The electric vehicle revolution is here, and you can be part of it.";
    } else if (userMessage.toLowerCase().includes("business models")) {
        return "There are primarily 3 areas where your business can invest and build offerings around electric mobility. Therefore, the value-wheel consists of these three major areas – Mobility, Infrastructure and Energy.";
    } else if (userMessage.toLowerCase().includes("manufacturers")) {
        return "Till 31st July 2021, there were 380 electric vehicle manufacturers in India. With the increasing adoption of electric vehicles in the landscape, this number is only expected to increase further";
    } else if (userMessage.toLowerCase().includes("service providers")) {
        return "There are primarily 3 areas where businesses can invest and build offerings around electric mobility. These areas are: Mobility, Infrastructure and energy.Each of these categories are further divided into domains and each domain has several business models";
    } else if (userMessage.toLowerCase().includes("components")) {
        return "The type of battery, the type of traction motor and the motor controller design vary according to the size, power and proposed application, which can be as small as a motorized shopping cart or wheelchair, through pedelecs, electric motorcycles and scooters, neighborhood electric vehicles, industrial fork-lift trucks and including many hybrid vehicles.";
    } else if (userMessage.toLowerCase().includes("battery") || userMessage.toLowerCase().includes("core")) {
        return "An electric-vehicle battery (EVB) in addition to the traction battery speciality systems used for industrial (or recreational) vehicles, are batteries used to power the propulsion system of a battery electric vehicle (BEVs). These batteries are usually a secondary (rechargeable) battery, and are typically lithium-ion batteries.";
    }else if (userMessage.toLowerCase().includes("charging station")) {
        return "A charging station, also known as a charge point or electric vehicle supply equipment (EVSE), is a power supply device that supplies electrical power for recharging plug-in electric vehicles (including battery electric vehicles, electric trucks, electric buses, neighborhood electric vehicles and plug-in hybrid vehicles).";
    }  
  else if (userMessage.toLowerCase().includes("safety")) {
        return "The United Nations in Geneva (UNECE) has adopted the first international regulation (Regulation 100) on safety of both fully electric and hybrid electric cars, with the intent of ensuring that cars with a high voltage electric power train, such as hybrid and fully-electric vehicles, are as safe as combustion-powered cars. The EU and Japan have already indicated that they intend to incorporate the new UNECE Regulation in their respective rules on technical standards for vehicles..";
    } else if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("what can you do")) {
        return "I can provide information on e-vehicle, and answer your e-vehicle-related questions. Feel free to ask!";
    } else if (userMessage.toLowerCase().includes("efficiency")) {
        // Simulated response with static nutritional information for an egg
        return "EV 'tank-to-wheels' efficiency is about a factor of three higher than internal combustion engine vehicles.[118] Energy is not consumed while the vehicle is stationary, unlike internal combustion engines which consume fuel while idling. In 2022, EVs enabled a net reduction of about 80 Mt of GHG emissions, on a well to-wheels basis, and the net GHG benefit of EVs will increase over time as the electricity sector is decarbonised.";
    } else if (userMessage.toLowerCase().includes("cost")) {
        // Simulated response with static nutritional information for cheese (1 ounce)
        return "As of 2021 the purchase price of an EV is often more, but the total cost of ownership of an EV varies wildly depending on location[122] and distance travelled per year:[123] in parts of the world where fossil fuels are subsidized, lifecycle costs of diesel or gas-powered vehicle are sometimes less than a comparable EV.";
    } else if (userMessage.toLowerCase().includes("range")) {
        // Simulated response with static nutritional information for rajma (cooked, 1 cup)
        return "Electric vehicles may have shorter range compared to vehicles with internal combustion engines,[126][127] which is why the electrification of long-distance transport, such as long-distance shipping, remains challenging.In 2022, the sales-weighted average range of small BEVs sold in the United States was nearly 350 km, while in France, Germany and the United Kingdom it was just under 300 km, compared to under 220 km in China";
    } else if (userMessage.toLowerCase().includes("heating")) {
        // Simulated response with static nutritional information for soya beans (cooked, 1 cup)
        return "Well insulated cabins can heat the vehicle using the body heat of the passengers. This is not enough, however, in colder climates as a driver delivers only about 100 W of heating power. A heat pump system, capable of cooling the cabin during summer and heating it during winter, is an efficient way of heating and cooling EVs";
    } else if (userMessage.toLowerCase().includes("future")) {
        // Simulated response with static nutritional information for chicken breast (cooked, 3.5 ounces)
        return "In a 2023 survey concentrated specifically on electric car ownership in the US, 50% of respondents planning to purchase a future car considered themselves unlikely to seriously consider buying an EV. The survey also found that support for banning the production of non-electric vehicles in the US by 2035 has declined from 47% to 40%.";
    }
  else {
        return "I'm sorry, I didn't understand that. Feel free to ask me about e-vehicle  or any vehicle-related topic!";
    }
}