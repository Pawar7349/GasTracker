Blockchain Gas Tracker

🚀 Overview
Blockchain Gas Tracker is a real-time gas price monitoring app for the Ethereum blockchain. It helps users track current gas prices and transaction fees, built using Next.js and the MetaMask API.

✨ Features
Display real-time gas prices for Ethereum transactions.
User-friendly dashboard with responsive design.
Data fetched directly from the MetaMask gas API.
🛠 Tech Stack
Next.js: For the frontend framework.
Tailwind CSS: For UI styling and responsive design.
MetaMask API: For fetching real-time gas prices.
Shadcn UI: For enhanced UI components.
🎬 Demo
Check out a live demo of the Gas Tracker here (add the link to your live project if hosted).

(Add a screenshot or GIF here)

⚙️ Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/blockchain-gas-tracker.git
cd blockchain-gas-tracker
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env.local file and add your Infura API key and Infura API secret as shown below:

bash
Copy code
INFURA_API_KEY=your_api_key
INFURA_API_KEY_SECRET=your_api_secret
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 to view it in your browser.

🧑‍💻 Usage
On the homepage, you’ll see the latest Ethereum gas prices fetched from the MetaMask API.
The gas prices include low, medium, and high estimates, updated in real-time.

📁 Project Structure
lua
Copy code
|-- src
|   |-- app
|   |   |-- page.js           # Main homepage
|   |-- components
|   |   |-- GasCard.js        # Component to display gas prices
|   |-- lib
|   |   |-- getData.js        # Fetches gas price data from API
|-- public
|-- .env.local                 # Environment variables for API keys

🛡 Security
Gas prices are fetched securely using your Infura API Key.
Always keep your API Key and API Secret safe in the .env.local file.

🤝 Contributing
Feel free to contribute! Please fork this repository, make your changes, and submit a pull request.

📜 License
This project is licensed under the MIT License.

🙏 Acknowledgements
Next.js for the framework.
Tailwind CSS for styling.
MetaMask for the gas price API.
Shadcn UI for UI components.