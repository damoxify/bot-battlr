# BOT-BATTLR

Welcome to Your Bot Army, a React-based application that allows users to manage and recruit bots into their army. This application provides features like enlisting bots, releasing bots, discharging bots, sorting, and filtering by class.

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/damoxify/bot-battlr>
   ```

2. Change into the project directory:

   ```bash
   cd your-bot-battlr
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```
### Starting the JSON Server
To simulate a backend API for this application, we'll use JSON Server. Run the following command to start the JSON Server:

```bash
json-server --watch db.json --port 3000
```
### Running the Application

To start the application, run the following command:

```bash
npm start
```

This will start the development server, and you can access the application in your web browser at [http://localhost:3000](http://localhost:3001).

## Features

- **View All Bots**: The `BotCollection` component displays a list of all available bots, including their details.

- **Recruit Bots**: Users can recruit bots into their army by clicking the "Recruit Army" button on a bot card in the `BotCollection`.

- **Release Bots**: Enlisted bots can be released from the army by clicking the "Release" button in the `YourBotArmy` section.

- **Discharge Bots**: To discharge a bot from service permanently, click the red "X" button in the `YourBotArmy`. This action removes the bot from both the frontend and the backend.

- **Sorting**: The `SortBar` component allows sorting bots by health, damage, or armor.

- **Filtering**: Users can filter bots by class (e.g., Support, Medic, etc.) by clicking the corresponding class filter buttons in the `BotCollection`.

- **Bot Details**: Clicking on a bot card in the `BotCollection` displays detailed bot information in the `BotSpecs` component. Users can enlist the bot from there.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and ensure the code style follows the project's conventions.

4. Test your changes thoroughly.

5. Create a pull request with a clear description of the changes and why they are necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the React community for creating an amazing library.
- Special thanks to [Adedamola] for their contributions.

Enjoy managing your bot army!
```
